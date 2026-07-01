export interface InquiryPayload {
  type: string;
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  region?: string;
  message?: string;
  website?: string;
}
function readablePage(path: string): string {
  if (!path || path === "/") return "홈(한글)";
  if (path === "/en" || path.startsWith("/en")) return "홈(영문)";
  return path;
}
function trafficSource(ref: string): string {
  if (!ref) return "직접 방문";
  try {
    const host = new URL(ref).hostname.replace(/^www\./, "");
    if (host.includes("naver")) return "네이버";
    if (host.includes("google")) return "구글";
    if (host.includes("instagram")) return "인스타그램";
    if (host.includes("facebook")) return "페이스북";
    if (host.includes("linkedin")) return "링크드인";
    if (host.includes("ceslprimus.com")) return "사이트 내 이동";
    return host;
  } catch {
    return ref;
  }
}
function deviceType(): string {
  if (typeof navigator === "undefined") return "";
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? "모바일" : "PC";
}
function utmSource(): string {
  if (typeof window === "undefined") return "";
  try {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source");
    if (!source) return "";
    const campaign = params.get("utm_campaign");
    return campaign ? `${source} / ${campaign}` : source;
  } catch {
    return "";
  }
}
export function logInquiry(payload: InquiryPayload): void {
  try {
    const path = typeof window !== "undefined" ? window.location.pathname : "";
    const ref = typeof document !== "undefined" ? document.referrer : "";
    const w = typeof window !== "undefined" ? (window as unknown as { gtag?: (...args: unknown[]) => void }) : undefined;
    if (w && typeof w.gtag === "function") {
      w.gtag("event", "generate_lead", { inquiry_type: payload.type });
    }
    void fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, page: readablePage(path), referrer: utmSource() || trafficSource(ref), device: deviceType() }),
      keepalive: true
    }).catch(() => {});
  } catch {
    /* no-op */
  }
}
