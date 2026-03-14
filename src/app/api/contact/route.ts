import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { businessInfo } from "@/lib/seo-config";

// Simple in-memory rate limiting: max 5 requests per IP per hour
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }

  if (entry.count >= 5) return false;

  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429 }
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("name" in body) ||
    !("email" in body) ||
    !("nachricht" in body)
  ) {
    return NextResponse.json(
      { error: "Pflichtfelder fehlen." },
      { status: 400 }
    );
  }

  const { name, email, telefon, nachricht } = body as {
    name: unknown;
    email: unknown;
    telefon?: unknown;
    nachricht: unknown;
  };

  // Validate
  if (
    typeof name !== "string" ||
    name.trim().length < 2 ||
    name.trim().length > 100
  ) {
    return NextResponse.json({ error: "Ungültiger Name." }, { status: 400 });
  }

  if (
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 200
  ) {
    return NextResponse.json(
      { error: "Ungültige E-Mail-Adresse." },
      { status: 400 }
    );
  }

  if (
    typeof nachricht !== "string" ||
    nachricht.trim().length < 10 ||
    nachricht.trim().length > 5000
  ) {
    return NextResponse.json(
      { error: "Nachricht muss zwischen 10 und 5000 Zeichen lang sein." },
      { status: 400 }
    );
  }

  const telefonStr =
    typeof telefon === "string" && telefon.trim().length > 0
      ? telefon.trim()
      : "Nicht angegeben";

  const toEmail = process.env.CONTACT_EMAIL ?? businessInfo.contact.email;
  const fromEmail = process.env.SMTP_USER ?? businessInfo.contact.email;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false, // STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Traumplatz Kontaktformular <${fromEmail}>`,
      to: toEmail,
      replyTo: email.trim(),
      subject: `Neue Kontaktanfrage von ${name.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 32px;">
          <div style="background: white; border-radius: 12px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <div style="border-bottom: 3px solid #16a34a; padding-bottom: 16px; margin-bottom: 24px;">
              <h1 style="margin: 0; font-size: 22px; color: #111827;">Neue Kontaktanfrage</h1>
              <p style="margin: 4px 0 0; color: #6b7280; font-size: 14px;">über das Formular auf traumplatz-gartenpflege.de</p>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; width: 130px;">
                  <span style="font-weight: 600; color: #374151; font-size: 14px;">Name</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${name.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-weight: 600; color: #374151; font-size: 14px;">E-Mail</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <a href="mailto:${email.trim()}" style="color: #16a34a;">${email.trim()}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-weight: 600; color: #374151; font-size: 14px;">Telefon</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${telefonStr}</td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <p style="font-weight: 600; color: #374151; font-size: 14px; margin: 0 0 8px;">Nachricht</p>
              <div style="background: #f9fafb; border-radius: 8px; padding: 16px; color: #111827; line-height: 1.6; white-space: pre-wrap;">${nachricht.trim()}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f3f4f6; text-align: center;">
              <a href="mailto:${email.trim()}" style="display: inline-block; background: #16a34a; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">
                Direkt antworten
              </a>
            </div>
          </div>
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px;">${businessInfo.name} &mdash; ${businessInfo.address.street}, ${businessInfo.address.postalCode} ${businessInfo.address.city}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("SMTP error:", error);
    return NextResponse.json(
      {
        error:
          "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 }
    );
  }
}
