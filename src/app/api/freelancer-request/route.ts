import { NextResponse } from "next/server";

// POST /api/freelancer-request
// Receives lead submissions from freelancers who want to collaborate with ITsPeople.
//
// Payload:
//   { name: string; email: string; phone?: string; expertise?: string;
//     availability?: string; message?: string; locale: "nl" | "en" }
//
// TODO (production): forward to info@itspeople.nl via a transactional email
// provider such as Resend. See src/app/api/whitepaper-request/route.ts for the
// reference integration pattern.

type FreelancerPayload = {
  name?: string;
  email?: string;
  phone?: string;
  expertise?: string;
  availability?: string;
  message?: string;
  locale?: "nl" | "en";
};

export async function POST(request: Request) {
  let payload: FreelancerPayload;
  try {
    payload = (await request.json()) as FreelancerPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { name, email } = payload;
  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  // eslint-disable-next-line no-console
  console.log("[freelancer-request]", {
    name,
    email,
    phone: payload.phone ?? null,
    expertise: payload.expertise ?? null,
    availability: payload.availability ?? null,
    message: payload.message ?? null,
    locale: payload.locale ?? "nl",
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
