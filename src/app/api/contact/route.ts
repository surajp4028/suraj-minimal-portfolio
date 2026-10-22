import { Resend } from "resend";
import { sendWhatsApp } from "@/lib/ultramsg";
import { contactServices } from "@/data/profile";

type Payload = {
  name?: string;
  email?: string;
  service?: string;
  subject?: string;
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const escapeHtml = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function emailHtml(
  name: string,
  email: string,
  service: string,
  subject: string,
  message: string,
) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 0;color:#64748b;width:90px">${label}</td><td style="padding:6px 0;color:#0f172a">${value}</td></tr>`;
  return `<div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:auto;padding:24px;border:1px solid #e2e8f0;border-radius:16px">
  <h2 style="margin:0 0 4px;color:#0f172a">New portfolio enquiry</h2>
  <p style="margin:0 0 16px;color:#64748b">Someone filled in the contact form on your portfolio.</p>
  <table style="border-collapse:collapse;font-size:14px">
    ${row("Name", escapeHtml(name))}
    ${row("Email", `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`)}
    ${row("Service", escapeHtml(service))}
    ${row("Subject", escapeHtml(subject))}
  </table>
  <div style="margin-top:16px;padding:16px;background:#f8fafc;border-radius:12px;color:#0f172a;white-space:pre-wrap;font-size:14px;line-height:1.6">${escapeHtml(message)}</div>
  <p style="margin-top:16px;color:#94a3b8;font-size:12px">Reply to this email to answer ${escapeHtml(name)} directly.</p>
</div>`;
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const subject = body.subject?.trim() || `${service || "New"} enquiry`;
  const message = body.message?.trim() ?? "";

  if (name.length < 2 || !isEmail(email) || message.length < 10) {
    return Response.json(
      {
        ok: false,
        error:
          "Please enter your name, a valid email and a message (10+ characters).",
      },
      { status: 422 },
    );
  }
  if (!contactServices.includes(service)) {
    return Response.json(
      { ok: false, error: "Please choose a service." },
      { status: 422 },
    );
  }
  if (name.length > 100 || subject.length > 200 || message.length > 5000) {
    return Response.json(
      { ok: false, error: "That message is too long." },
      { status: 422 },
    );
  }

  // Configured in .env: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return Response.json(
      { ok: false, error: "Email isn't configured yet. Please email me directly." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\nService: ${service}\nSubject: ${subject}\n\n${message}`,
    html: emailHtml(name, email, service, subject, message),
  });

  if (error) {
    console.error("Contact form: Resend error", error.name, error.message);
    return Response.json(
      { ok: false, error: "Could not send right now. Please email me directly." },
      { status: 502 },
    );
  }

  // WhatsApp alert (UltraMsg) is best-effort: the email already went out, so a
  // failure is logged but doesn't fail the visitor's submission.
  let whatsapp = false;
  try {
    const preview = message.length > 500 ? `${message.slice(0, 500)}…` : message;
    whatsapp = Boolean(
      await sendWhatsApp(
        `📩 New portfolio enquiry\n\n*Name:* ${name}\n*Email:* ${email}\n*Service:* ${service}\n*Subject:* ${subject}\n\n${preview}`,
      ),
    );
  } catch (err) {
    console.error(
      "Contact form: WhatsApp alert failed",
      err instanceof Error ? err.message : err,
    );
  }

  return Response.json({ ok: true, whatsapp });
}
