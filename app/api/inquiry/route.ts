import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_DOMAINS = ["ceslprimus.com", "localhost", "127.0.0.1"];
const hits = new Map<string, number[]>();

function originAllowed(req: Request): boolean {
  const src = req.headers.get("origin") || req.headers.get("referer") || "";
  if (!src) return false;
  try {
    const host = new URL(src).hostname;
    if (host.endsWith(".vercel.app")) return true;
    return ALLOWED_DOMAINS.some((d) => host === d || host.endsWith("." + d));
  } catch {
    return false;
  }
}

function rateLimited(req: Request): boolean {
  const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 8;
}

function clamp(value: unknown, max: number): string {
  return String(value ?? "").slice(0, max);
}

export async function POST(req: Request) {
  if (!originAllowed(req)) {
    return NextResponse.json({ ok: false, reason: "forbidden" }, { status: 403 });
  }
  if (rateLimited(req)) {
    return NextResponse.json({ ok: false, reason: "rate-limited" }, { status: 429 });
  }
  let data: Record<string, unknown> = {};
  try {
    data = await req.json();
  } catch {
    data = {};
  }
  if (clamp(data.website, 100).trim() !== "") {
    return NextResponse.json({ ok: true });
  }
  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  const payload = {
    type: clamp(data.type, 80),
    name: clamp(data.name, 80),
    phone: clamp(data.phone, 80),
    email: clamp(data.email, 120),
    company: clamp(data.company, 120),
    region: clamp(data.region, 80),
    message: clamp(data.message, 2000),
    referrer: clamp(data.referrer, 120),
    page: clamp(data.page, 80),
    device: clamp(data.device, 40)
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
