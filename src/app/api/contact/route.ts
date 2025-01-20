import { Resend } from "resend";
import { NextResponse } from "next/server";

if (!process.env.CONTACT_EMAIL || !process.env.RESEND_API_KEY) {
  console.error("Hiányzó környezeti változók");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL!,
      subject: `Új kapcsolatfelvétel: ${subject}`,
      html: `
        <h2>Új üzenet érkezett a weboldalról</h2>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tárgy:</strong> ${subject}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${message}</p>
      `,
    });

    if (data.error) {
      throw new Error(data.error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error: Error | unknown) {
    console.error("Resend API hiba:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Ismeretlen hiba történt",
      },
      { status: 500 }
    );
  }
}
