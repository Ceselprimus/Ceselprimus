import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ceslprimus.com"),
  applicationName: "쎄슬프라이머스",
  title: {
    default: "쎄슬프라이머스 | 수직농장에서 콜드체인까지, 식품 인프라 통합 솔루션",
    template: "%s | 쎄슬프라이머스"
  },
  description:
    "쎄슬프라이머스는 프리미엄 딸기 수직농장에서 출발해 냉방·제습, 전력·제어·데이터 관리, 콜드체인, 사업화 지원으로 확장하는 농식품·콜드체인 인프라 기술기업입니다. 딸기수직농장, 쿨링시스템, 해외진출, 컨설팅까지 — 알파팜, 알파쿨링, 알파에너지, 알파서포트 네 개 라인업과 국내외 구축 사례를 제공합니다.",
  keywords: [
    "쎄슬프라이머스",
    "CESeL Primus",
    "알파팜",
    "알파쿨링",
    "딸기수직농장",
    "수직농장",
    "스마트팜",
    "연중 딸기 사업솔루션",
    "저온제습",
    "콜드체인 인프라",
    "농식품·콜드체인 인프라",
    "SOFC",
    "고체산화물연료전지"
  ],
  authors: [{ name: "주식회사 쎄슬프라이머스 농업회사법인", url: "https://www.ceslprimus.com" }],
  creator: "주식회사 쎄슬프라이머스 농업회사법인",
  publisher: "주식회사 쎄슬프라이머스 농업회사법인",
  category: "농식품·콜드체인 인프라",
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/",
      en: "/en",
      "x-default": "/"
    }
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
      "수직농장에서 콜드체인까지 — 알파팜, 알파쿨링, 알파에너지, 알파서포트를 연결한 식품 인프라 통합 솔루션입니다.",
    url: "https://www.ceslprimus.com",
    siteName: "쎄슬프라이머스",
    locale: "ko_KR",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "쎄슬프라이머스 통합 솔루션 포트폴리오"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "쎄슬프라이머스 | 수직농장에서 콜드체인까지, 식품 인프라 통합 솔루션",
    description:
      "알파팜, 알파쿨링, 알파에너지, 알파서포트를 연결한 식품 인프라 통합 솔루션입니다.",
    images: ["/media/og-image.jpg"]
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
  const fontHref =
    "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";
  return (
    <html lang="ko">
      <body>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href={fontHref} media="print" id="font-css" />
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.getElementById("font-css").media="all";'
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
