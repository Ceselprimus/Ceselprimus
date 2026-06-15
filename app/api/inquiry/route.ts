import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  let data: Record<string, unknown> = {};
  try {
    data = await req.json();
  } catch {
    data = {};
  }
  const payload = {
    type: String(data.type ?? ""),
    name: String(data.name ?? ""),
    phone: String(data.phone ?? ""),
    email: String(data.email ?? ""),
    company: String(data.company ?? ""),
    region: String(data.region ?? ""),
    message: String(data.message ?? ""),
    referrer: String(data.referrer ?? ""),
    page: String(data.page ?? ""),
    device: String(data.device ?? "")
  };
  if (!webhook) {
    return NextResponse.json({ ok: false, reason: "not-configured" });
  }
  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) });
  }
}
