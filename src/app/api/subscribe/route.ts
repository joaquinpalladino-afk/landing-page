
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/utils/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
      .insert([{ email, active: true, created_at: new Date() }]);

    if (insertError) {
      console.error("Error inserting email:", insertError);
      return new NextResponse(
        JSON.stringify({ message: "Database error" }),
        { status: 500 }
      );
    }

    try {
      await resend.emails.send({
        from: "Loomtask <noreply@loomtask.com>",
        to: email,
        subject: "You're on the Loomtask Waitlist!",
        html: `
          <div style="font-family: sans-serif; text-align: center; padding: 20px;">
            <img src="https://loomtask.com/logo.png" alt="Loomtask Logo" style="width: 150px; margin-bottom: 20px;">
            <h2>Welcome to the Loomtask Waitlist!</h2>
            <p>Hi there,</p>
            <p>Thank you for signing up. You're officially on the waitlist for Loomtask!</p>
            <p>We're working hard to bring you the best task management experience. You'll be among the first to know when we launch.</p>
            <p>Stay tuned for updates!</p>
            <br>
            <p>Best regards,</p>
            <p>The Loomtask Team</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      // Even if the email fails, the user is still subscribed.
      // You might want to add more robust error handling here, like a retry mechanism.
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
