import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const GA_ID = "G-EE93PZ4M0Q";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ceslprimus.com"),
  applicationName: "쎄슬프라이머스",
  title: {
    default: "딸기수직농장 에코테크 기업 | 저전력 저온제습·물순환·폐열·CO₂ | 쎄슬프라이머스",
    template: "%s | 쎄슬프라이머스"
  },
  description:
    "쎄슬프라이머스는 딸기수직농장을 기반으로 LED 현열 저전력 저온제습, 15℃·50%RH 환경제어, 저TDS 응축수 회수, 실외기 프리쿨링, 폐열·CO₂ 자원화 기술을 제공하는 에코테크 기업입니다.",
  keywords: [
    "쎄슬프라이머스",
    "CESeL Primus",
    "알파팜",
    "딸기수직농장",
    "에코테크 기업",
    "저전력 저온제습",
    "LED 현열 제습",
    "15℃ 50%RH 딸기재배",
    "응축수 회수",
    "실외기 프리쿨링",
    "폐열 CO₂ 활용",
    "바이오 CO₂ 알파팜",
    "고밀도 딸기재배랙",
    "정량관수",
    "다단 육묘랙",
    "딸기 개화묘",
    "DSRP",
    "연중 딸기 생산",
    "스마트팜 엔지니어링"
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
    title: "딸기수직농장 에코테크 기업 | 저전력 저온제습·물순환·폐열·CO₂ | 쎄슬프라이머스",
    description:
      "쎄슬프라이머스는 딸기수직농장을 기반으로 LED 현열 저전력 저온제습, 15℃·50%RH 환경제어, 저TDS 응축수 회수, 실외기 프리쿨링, 폐열·CO₂ 자원화 기술을 제공하는 에코테크 기업입니다.",
    url: "https://www.ceslprimus.com",
    siteName: "쎄슬프라이머스",
    locale: "ko_KR",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "딸기수직농장 기반 에코테크 기업 쎄슬프라이머스"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "딸기수직농장 에코테크 기업 | 저전력 저온제습·물순환·폐열·CO₂ | 쎄슬프라이머스",
    description:
      "에너지를 줄이고, 물을 회수하며, 폐열과 CO₂를 생산자원으로 전환하는 딸기수직농장 기반 에코테크 기업입니다.",
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
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
