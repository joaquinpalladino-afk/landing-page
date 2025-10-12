
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/utils/supabase";

const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = emailSchema.safeParse(body);

    if (!result.success) {
      return new NextResponse(
        JSON.stringify({
          message: "Invalid input",
          errors: result.error.flatten().fieldErrors,
        }),
        { status: 400 }
      );
    }

    const { email } = result.data;

    const { data: existingEmails, error: selectError } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email);

    if (selectError) {
      console.error("Error checking for existing email:", selectError);
      return new NextResponse(
        JSON.stringify({ message: "Database error" }),
        { status: 500 }
      );
    }

    if (existingEmails && existingEmails.length > 0) {
      return new NextResponse(
        JSON.stringify({ message: "Email already subscribed" }),
        { status: 409 }
      );
    }

    const { error: insertError } = await supabase
      .from("waitlist")
      .insert([{ email, active: false, created_at: new Date() }]);

    if (insertError) {
      console.error("Error inserting email:", insertError);
      return new NextResponse(
        JSON.stringify({ message: "Database error" }),
        { status: 500 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "You have been added to the waitlist!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in subscribe API:", error);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
