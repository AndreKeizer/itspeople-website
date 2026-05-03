import { NextResponse } from "next/server";

// POST /api/whitepaper-request
// Receives gated whitepaper lead submissions from the Insights page.
//
// The form payload is:
//   { whitepaper: string; name: string; company: string; email: string;
//     phone?: string; message?: string; locale: "nl" | "en" }
//
// Current implementation: logs the request server-side and returns success.
// TODO (production): forward to info@itspeople.nl via a transactional email
// provider such as Resend, Postmark or SMTP. Recommended env vars:
//   RESEND_API_KEY=...
//   ITSPEOPLE_LEAD_INBOX=info@itspeople.nl
//
// Example Resend integration (uncomment after `npm i resend` and setting
// RESEND_API_KEY in .env.local):
//
//   import { Resend } from "resend";
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: "ITsPeople Website <noreply@itspeople.nl>",
//     to: process.env.ITSPEOPLE_LEAD_INBOX ?? "info@itspeople.nl",
//     replyTo: payload.email,
//     subject: `Whitepaper aanvraag, ${payload.whitepaper}`,
//     text: `Naam: ${payload.name}\nBedrijf: ${payload.company}\n` +
//           `E-mail: ${payload.email}\nTelefoon: ${payload.phone ?? "-"}\n\n` +
//           `Bericht:\n${payload.message ?? "(geen)"}\n\n` +
//           `Taal: ${payload.locale}`,
//   });

type LeadPayload = {
  whitepaper?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  locale?: "nl" | "en";
};

export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const { name, company, email, whitepaper } = payload;
  if (!name || !company || !email || !whitepaper) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields (name, company, email, whitepaper)" },
      { status: 400 },
    );
  }

  // Simple email sanity check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email address" },
      { status: 400 },
    );
  }

  // Log the lead so André can retrieve it from server logs until a proper
  // email/CRM integration is wired up.
  console.log("[whitepaper-request]", {
    receivedAt: new Date().toISOString(),
    ...payload,
  });

  return NextResponse.json({ ok: true });
}
