import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// 홈페이지 챗봇/문의에서 들어온 문의를 Google 시트(Apps Script 웹훅)로 전달합니다.
// 웹훅 주소는 소스에 노출되지 않도록 Vercel 환경변수 INQUIRY_WEBHOOK_URL 로 관리합니다.
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
    message: String(data.message ?? ""),
    name: String(data.name ?? ""),
    phone: String(data.phone ?? ""),
    email: String(data.email ?? ""),
    page: String(data.page ?? "")
  };

  // 웹훅이 아직 설정되지 않아도 사이트는 정상 동작해야 하므로 200으로 조용히 반환합니다.
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
