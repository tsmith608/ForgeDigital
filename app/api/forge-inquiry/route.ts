// app/api/forge-inquiry/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // IMPORTANT: Resend needs Node runtime

const API = process.env.RESEND_API_KEY;
const TO = process.env.INQUIRY_TO;
const FROM = process.env.INQUIRY_FROM;

const missing = !API ? "RESEND_API_KEY" : !TO ? "INQUIRY_TO" : !FROM ? "INQUIRY_FROM" : "";
if (missing) {
  console.error(`[forge-inquiry] Missing env: ${missing}`);
}

export async function POST(req: Request) {
  try {
    if (missing) {
      return NextResponse.json({ ok: false, error: `Server missing ${missing}` }, { status: 500 });
    }

    const form = await req.formData();

    // Honeypot
    if (String(form.get("company") || "").trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields (name, email, message)" }, { status: 400 });
    }

    const resend = new Resend(API!);
    const subject = `Forge Digital Inquiry — ${name}`;

    const { error } = await resend.emails.send({
      from: FROM!, // e.g. 'Forge Digital <onboarding@resend.dev>' or a verified domain sender
      to: TO!,     // your inbox
      subject,
      replyTo: email, // you can reply from your inbox; nothing is sent to the visitor
      text:
`Name: ${name}
Email: ${email}
Phone: ${phone || "(not provided)"}

Message:
${message}

— submitted ${new Date().toISOString()}`,
    });

    if (error) {
      console.error("[forge-inquiry] Resend error:", error);
      return NextResponse.json({ ok: false, error: String(error) }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[forge-inquiry] Unexpected:", err);
    return NextResponse.json({ ok: false, error: err?.message || "Server error" }, { status: 500 });
  }
}
