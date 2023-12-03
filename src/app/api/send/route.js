import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const resendEmail = process.env.RESEND_EMAIL;
const contactEmail = process.env.CONTACT_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: resendEmail,
      to: [contactEmail],
      subject: `DRG PORTFOLIO: ${subject}`,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Sent by: {email}</p>
          <p>Message:</p>
          <p>{message}</p>
        </>
      ),
    });
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
