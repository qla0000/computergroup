import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const data = await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: 'your@email.com',
      subject: `Új kapcsolatfelvétel: ${subject}`,
      html: `
        <h2>Új üzenet érkezett a weboldalról</h2>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tárgy:</strong> ${subject}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${message}</p>
      `
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}