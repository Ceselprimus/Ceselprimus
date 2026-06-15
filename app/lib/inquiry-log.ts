// 클라이언트에서 문의/대화 내용을 서버 라우트(/api/inquiry)로 전송하는 헬퍼.
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
    if (host.includes("facebook") || host.startsWith("fb.") || host.includes("l.facebook")) return "페이스북";
    if (host.includes("linkedin") || host.includes("lnkd.in")) return "링크드인";
    if (host.includes("daum")) return "다음";
    if (host.includes("bing")) return "빙";
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

export function logInquiry(payload: InquiryPayload): void {
  try {
    const path = typeof window !== "undefined" ? window.location.pathname : "";
    const ref = typeof document !== "undefined" ? document.referrer : "";
    void fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, page: readablePage(path), referrer: trafficSource(ref), device: deviceType() }),
      keepalive: true
    }).catch(() => {});
  } catch {
    /* no-op */
  }
}
