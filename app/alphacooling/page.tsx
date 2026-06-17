import type { Metadata } from "next";
import KeywordLanding from "../components/KeywordLanding";

const url = "https://www.ceslprimus.com/alphacooling";

export const metadata: Metadata = {
  title: { absolute: "쿨링시스템 · 저온제습 기반 기후제어 | 알파쿨링" },
  description:
    "쿨링시스템과 저온제습으로 식품공장 결로·고온다습 문제를 해결합니다. 쎄슬프라이머스 알파쿨링은 수직농장, 식품 포장실, 저온저장·콜드체인 시설의 습도·결로·공급공기 품질을 통합 관리합니다.",
  keywords: ["쿨링시스템", "냉각 시스템", "저온제습", "식품공장 결로", "결로 해결", "고온다습 환경 제어", "콜드체인", "핫가스 재열 제습", "HGR", "알파쿨링"],
  alternates: { canonical: "/alphacooling" },
  openGraph: {
    title: "쿨링시스템·저온제습·결로 해결 | 쎄슬프라이머스 알파쿨링",
    description: "식품공장 결로와 고온다습 문제를 잡는 저온제습 중심 쿨링시스템, 알파쿨링.",
    url,
    siteName: "쎄슬프라이머스",
    locale: "ko_KR",
    images: [{ url: "/media/og-image.jpg", width: 1200, height: 630, alt: "쎄슬프라이머스 알파쿨링 저온제습 쿨링시스템" }],
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}/#webpage`,
  url,
  name: "쿨링시스템·저온제습·결로 해결 | 쎄슬프라이머스 알파쿨링",
  inLanguage: "ko-KR",
  isPartOf: { "@id": "https://www.ceslprimus.com/#website" },
  about: { "@id": "https://www.ceslprimus.com/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://www.ceslprimus.com" },
      { "@type": "ListItem", position: 2, name: "알파쿨링 (쿨링시스템)", item: url }
    ]
  }
};

export default function AlphaCoolingPage() {
  return (
    <KeywordLanding
      eyebrow="알파쿨링 — 쿨링시스템·저온제습"
      title="알파쿨링, 냉방·제습·결로 문제 해결."
      intro="알파쿨링은 고온다습 환경의 냉방·제습·결로 문제를 개선하는 저온제습 기반 기후제어 솔루션입니다. 정밀한 습도 제어로 균일한 기후를 만들고, 결로·품질 리스크와 에너지 사용 구조까지 함께 개선합니다."
      blocks={[
        {
          heading: "식품공장 결로 문제 해결",
          body: "식품공정과 포장실의 결로, 고습, 포장재 젖음 문제에 대응하는 인라인 핫가스 재열 제습(HGR) 유닛. 위생과 품질 리스크로 이어지는 결로를 근본에서 잡습니다."
        },
        {
          heading: "딸기 재배실 전용 저온제습",
          body: "저온재배 조건의 습도와 결로를 냉각기·순환팬·기류·센서 통합 설계로 관리하는 알파쿨링 팜. 균일한 기후가 품질과 수확 안정성으로 이어집니다."
        },
        {
          heading: "콜드체인 컨테이너 쿨링",
          body: "철도기술연구원 기술이전 특허 기반, 에너지저장장치(ESS)를 연계한 콜드체인 컨테이너. 이동·저장 과정의 온습도를 안정적으로 유지합니다."
        },
        {
          heading: "적용 현장",
          body: "수직농장·시설원예, 식품공장·포장실, 저온창고·콜드체인 시설, 베이커리·프리미엄 리테일까지 — 고온다습 환경의 품질 리스크가 있는 곳이면 적용 가능합니다."
        }
      ]}
      ctaTitle="결로·고습 문제, 현장 조건에 맞는 쿨링시스템으로 잡습니다."
      ctaBody="시설 종류와 현재 겪는 문제를 알려주시면, 저온제습 공조 담당자가 직접 검토해 회신드립니다."
      backHref="/#alphacooling"
      backLabel="홈에서 알파쿨링 자세히 보기"
      jsonLd={jsonLd}
    />
  );
}
