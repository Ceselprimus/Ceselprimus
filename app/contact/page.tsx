import type { Metadata } from "next";
import KeywordLanding from "../components/KeywordLanding";

const url = "https://www.ceslprimus.com/contact";

export const metadata: Metadata = {
  title: { absolute: "쎄슬프라이머스 컨설팅 | 딸기수직농장·쿨링시스템·해외진출 상담" },
  description:
    "쎄슬프라이머스는 연중 딸기 사업솔루션, 냉방·제습 문제, 전력·데이터 운영관리, 해외 실증·사업화 지원에 대한 프로젝트 컨설팅·상담을 제공합니다. 프로젝트·파트너십·해외 실증·냉동냉장 설비 문의를 받습니다.",
  keywords: ["컨설팅", "쎄슬프라이머스 컨설팅", "딸기수직농장 컨설팅", "스마트팜 컨설팅", "저온제습 컨설팅", "해외진출 컨설팅", "프로젝트 문의", "파트너십 문의"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "쎄슬프라이머스 컨설팅 | 프로젝트 상담",
    description: "딸기수직농장·쿨링시스템·해외진출 프로젝트 컨설팅·상담.",
    url,
    siteName: "쎄슬프라이머스",
    locale: "ko_KR",
    images: [{ url: "/media/og-image.jpg", width: 1200, height: 630, alt: "쎄슬프라이머스 프로젝트 컨설팅 문의" }],
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}/#webpage`,
  url,
  name: "쎄슬프라이머스 컨설팅 | 프로젝트 상담",
  inLanguage: "ko-KR",
  isPartOf: { "@id": "https://www.ceslprimus.com/#website" },
  about: { "@id": "https://www.ceslprimus.com/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://www.ceslprimus.com" },
      { "@type": "ListItem", position: 2, name: "컨설팅·문의", item: url }
    ]
  }
};

export default function ContactPage() {
  return (
    <KeywordLanding
      eyebrow="컨설팅 · 프로젝트 문의"
      title="프로젝트 컨설팅 문의."
      intro="쎄슬프라이머스는 연중 딸기 사업솔루션, 냉방·제습 문제, 전력·데이터 운영관리, 해외 실증·사업화 지원에 대한 프로젝트 상담을 제공합니다."
      blocks={[
        {
          heading: "프로젝트 문의",
          body: "딸기수직농장, 식품공장, 포장실 구축·개선 프로젝트. 목적과 현장 조건을 알려주시면 맞는 솔루션 조합을 설계해 드립니다."
        },
        {
          heading: "파트너십 문의",
          body: "국내 사업개발 파트너, 기술 협력, 공동 사업. 함께 시장을 넓힐 파트너십을 검토합니다."
        },
        {
          heading: "해외 실증 문의",
          body: "아세안 등 해외 실증, 구축, 현지 사업화. 진출 대상 국가와 제품·기술을 기준으로 검토합니다."
        },
        {
          heading: "냉동 · 냉장 설비 문의",
          body: "저온창고, 콜드체인 시설의 저온제습·결로·에너지 운영. 설비 조건에 맞춰 진단하고 제안합니다."
        }
      ]}
      ctaTitle="어떤 단계든, 담당자가 직접 검토해 회신드립니다."
      ctaBody="프로젝트 목적을 알려주시면 사업개발 담당자가 맞는 조합을 설계해 연락드립니다."
      backHref="/#contact"
      backLabel="홈 연락처로 이동"
      jsonLd={jsonLd}
    />
  );
}
