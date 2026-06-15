// 클라이언트에서 문의/대화 내용을 서버 라우트(/api/inquiry)로 전송하는 헬퍼.
// 실패해도 사용자 경험을 막지 않도록 모든 오류를 조용히 무시합니다.

export interface InquiryPayload {
  type: string;
  message?: string;
  name?: string;
  phone?: string;
  email?: string;
}

export function logInquiry(payload: InquiryPayload): void {
  try {
    const page = typeof window !== "undefined" ? window.location.pathname : "";
    void fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, page }),
      keepalive: true
    }).catch(() => {});
  } catch {
    /* no-op */
  }
}
