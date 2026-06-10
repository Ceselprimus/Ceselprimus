import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ceslprimus.com"),
  title: "쎄슬프라이머스 | 알파 솔루션 포트폴리오",
  description:
    "쎄슬프라이머스는 알파팜에서 검증된 운영 경험을 기반으로 재배, 기후, 전력, 제어, 콜드체인, 데이터, 사업화 지원을 연결한 농식품·콜드체인 인프라 통합 솔루션 포트폴리오를 제공합니다.",
  keywords: [
    "쎄슬프라이머스",
    "알파팜",
    "알파쿨링",
    "알파에너지",
    "알파서포트",
    "농식품 인프라",
    "콜드체인 인프라",
    "저온제습",
    "에너지저장장치 연계 콜드체인 컨테이너",
    "에너지 효율화"
  ],
  openGraph: {
    title: "쎄슬프라이머스 | 알파 솔루션 포트폴리오",
    description:
      "생산, 기후, 전력, 제어, 콜드체인, 데이터, 사업화 지원을 하나의 포트폴리오로 연결합니다.",
    images: ["/media/hero-integrated-solution-v2.png"],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
