import { enquirySchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 422 });
  }

  // Honeypot filled → silently accept without processing.
  if (parsed.data.company) return Response.json({ ok: true });

  // TODO: forward to email / CRM (e.g. Resend, HubSpot, Google Sheets).
  console.info("[enquiry]", { ...parsed.data, receivedAt: new Date().toISOString() });

  return Response.json({ ok: true });
}
