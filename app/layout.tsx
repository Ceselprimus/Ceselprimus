import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ceselprimus.com"),
  title: "CESeL Primus | Alpha Solution Portfolio",
  description:
    "CESeL Primus는 AlphaFarm에서 검증된 운영 경험을 기반으로 재배, 기후, 전력, 제어, 콜드체인, 데이터, 사업화 지원을 연결한 농식품·콜드체인 인프라 통합 솔루션 포트폴리오를 제공합니다.",
  keywords: [
    "쎄슬프라이머스",
    "CESeL Primus",
    "AlphaFarm",
    "AlphaCooling",
    "AlphaEnergy",
    "AlphaEnergy-EMS",
    "AlphaEnergy-PCU",
    "AlphaSupport",
    "농식품 인프라",
    "콜드체인 인프라",
    "저온제습",
    "ESS 연계 콜드체인 컨테이너",
    "에너지 효율화"
  ],
  openGraph: {
    title: "CESeL Primus | Tech Intelligence Solution",
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
