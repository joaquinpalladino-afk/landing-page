
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !emailRegex.test(email)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid email address" }),
        { status: 400 }
      );
    }

    const { data: existingEmails, error: selectError } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email);

    if (selectError) {
      console.error("Error checking for existing email:", selectError);
      throw selectError;
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
      throw insertError;
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
