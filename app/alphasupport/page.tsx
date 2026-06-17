import type { Metadata } from "next";
import KeywordLanding from "../components/KeywordLanding";

const url = "https://www.ceslprimus.com/alphasupport";

export const metadata: Metadata = {
  title: { absolute: "해외진출 · 아세안 현지 실증 지원 | 알파서포트" },
  description:
    "해외진출을 준비하는 한국 기업의 제품과 기술을 아세안 현장에서 검증합니다. 쎄슬프라이머스 알파서포트는 시장 적합성 검증부터 현지 실증·구축·운영·사업화 제안까지 연결하는 실행형 지원 서비스입니다.",
  keywords: ["해외진출", "아세안 진출", "ASEAN", "현지 실증", "해외 사업화", "동남아 진출", "사업화 컨설팅", "알파서포트"],
  alternates: { canonical: "/alphasupport" },
  openGraph: {
    title: "해외진출 · 아세안 현지 실증 지원 | 알파서포트",
    description: "현지 실증에서 사업화 제안까지 연결하는 실행형 해외진출 지원, 알파서포트.",
    url,
    siteName: "쎄슬프라이머스",
    locale: "ko_KR",
    images: [{ url: "/media/og-image.jpg", width: 1200, height: 630, alt: "쎄슬프라이머스 알파서포트 해외진출 지원" }],
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}/#webpage`,
  url,
  name: "해외진출 · 아세안 현지 실증 지원 | 알파서포트",
  inLanguage: "ko-KR",
  isPartOf: { "@id": "https://www.ceslprimus.com/#website" },
  about: { "@id": "https://www.ceslprimus.com/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://www.ceslprimus.com" },
      { "@type": "ListItem", position: 2, name: "알파서포트 (해외진출)", item: url }
    ]
  }
};

export default function AlphaSupportPage() {
  return (
    <KeywordLanding
      eyebrow="알파서포트 — 해외진출·아세안 실증"
      title="알파서포트, 현지 실증에서 사업화 제안까지."
      intro="알파서포트는 한국 기업의 제품과 기술을 아세안 현장에서 검증하고, 실증·구축·운영·사업화 제안까지 연결하는 실행형 해외진출 지원 서비스입니다."
      blocks={[
        {
          heading: "아세안 시장 적합성 검증",
          body: "진출하려는 제품·기술이 현지 기후, 규제, 수요에 맞는지 먼저 검증합니다. 막연한 진출이 아니라, 검증된 근거 위에서 다음 단계를 결정합니다."
        },
        {
          heading: "현지 실증 · 생산기반 구축",
          body: "현지 파트너와 함께 실증 사이트를 구축하고 운영합니다. 말레이시아 알파팜처럼, 실제 현장에서 작동하는 레퍼런스를 만들어 진출의 신뢰를 확보합니다."
        },
        {
          heading: "사업화 제안 · 운영 지원",
          body: "검증과 구축에서 끝나지 않고, 현지 사업화 제안과 운영까지 연결합니다. 제품 공급, 운영 프로토콜, 리테일 접점까지 실제 사업이 되도록 함께합니다."
        },
        {
          heading: "저온제습 공조 컨설팅",
          body: "고온다습한 아세안 환경에서 핵심이 되는 냉방·제습·결로 문제를 함께 진단하고, 현지 조건에 맞는 공조 설계를 컨설팅합니다."
        }
      ]}
      ctaTitle="아세안 진출, 검증된 현장 위에서 시작하세요."
      ctaBody="진출 대상 국가와 제품·기술을 알려주시면, 해외 사업개발 담당자가 직접 검토해 회신드립니다."
      backHref="/#alphasupport"
      backLabel="홈에서 알파서포트 자세히 보기"
      jsonLd={jsonLd}
    />
  );
}
