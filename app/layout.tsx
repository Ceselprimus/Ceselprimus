import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ceslprimus.com"),
  applicationName: "쎄슬프라이머스",
  title: {
    default: "쎄슬프라이머스 | 수직농장에서 콜드체인까지, 식품 인프라 통합 솔루션",
    template: "%s | 쎄슬프라이머스"
  },
  description:
    "쎄슬프라이머스는 프리미엄 딸기 수직농장에서 출발해 냉방·제습, 에너지·운영 관리, 콜드체인, 사업화 지원으로 확장하는 농식품·콜드체인 인프라 기술기업입니다. 알파팜, 알파쿨링, 알파이엠스, 알파서포트 라인업을 제공합니다.",
  keywords: [
    "쎄슬프라이머스",
    "쎄슬 프라이머스",
    "CESeL Primus",
    "CESeL Primus Co Ltd",
    "알파팜",
    "AlphaFarm",
    "알파쿨링",
    "AlphaCooling",
    "알파이엠스",
    "AlphaEMS",
    "알파에너지",
    "AlphaEnergy",
    "알파서포트",
    "AlphaSupport",
    "연중 딸기 사업솔루션",
    "딸기 수직농장",
    "컨테이너팜",
    "프리미엄 딸기 사업솔루션",
    "농식품 인프라",
    "콜드체인 인프라",
    "저온제습",
    "고온다습 환경 제어",
    "식품공장 결로",
    "냉동 냉장 설비 관리",
    "에너지저장장치 연계 콜드체인 컨테이너",
    "에너지 효율화",
    "사업화 지원"
  ],
  authors: [{ name: "주식회사 쎄슬프라이머스 농업회사법인", url: "https://www.ceslprimus.com" }],
  creator: "주식회사 쎄슬프라이머스 농업회사법인",
  publisher: "주식회사 쎄슬프라이머스 농업회사법인",
  category: "농식품·콜드체인 인프라",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "쎄슬프라이머스 | 수직농장에서 콜드체인까지, 식품 인프라 통합 솔루션",
    description:
      "프리미엄 딸기 수직농장에서 출발해 냉방·제습, 에너지·운영 관리, 콜드체인, 사업화 지원까지 하나의 포트폴리오로 연결합니다.",
    url: "https://www.ceslprimus.com",
    siteName: "쎄슬프라이머스",
    locale: "ko_KR",
    images: [
      {
        url: "/media/hero-integrated-solution-v2.png",
        width: 1680,
        height: 960,
        alt: "쎄슬프라이머스 통합 솔루션 포트폴리오"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "쎄슬프라이머스 | 수직농장에서 콜드체인까지, 식품 인프라 통합 솔루션",
    description:
      "알파팜, 알파쿨링, 알파이엠스, 알파서포트를 연결한 통합 솔루션 포트폴리오입니다.",
    images: ["/media/hero-integrated-solution-v2.png"]
  },
  other: {
    "ai-content-declaration": "company profile, solution portfolio, contact information",
    "llms.txt": "https://www.ceslprimus.com/llms.txt"
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
