import type { Metadata } from "next";
import KeywordLanding from "../components/KeywordLanding";

const url = "https://www.ceslprimus.com/alphafarm";

export const metadata: Metadata = {
  title: { absolute: "딸기수직농장 · 연중 프리미엄 딸기 사업솔루션 | 알파팜" },
  description:
    "딸기수직농장으로 시작하는 연중 딸기 사업솔루션. 쎄슬프라이머스 알파팜은 재배·운영·판매를 패키지로 연결해 계절과 관계없이 운영되는 딸기 사업 구조를 설계합니다. 알파코어·알파카페·컨테이너팜.",
  keywords: ["딸기수직농장", "딸기 수직농장", "연중 딸기 사업솔루션", "수직농장 창업", "스마트팜 딸기", "알파팜", "프리미엄 딸기"],
  alternates: { canonical: "/alphafarm" },
  openGraph: {
    title: "딸기수직농장·연중 딸기 사업솔루션 | 쎄슬프라이머스 알파팜",
    description: "재배·운영·판매를 패키지로 연결하는 연중 딸기 사업솔루션, 알파팜.",
    url,
    siteName: "쎄슬프라이머스",
    locale: "ko_KR",
    images: [{ url: "/media/og-image.jpg", width: 1200, height: 630, alt: "쎄슬프라이머스 알파팜 딸기수직농장" }],
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}/#webpage`,
  url,
  name: "딸기수직농장·연중 딸기 사업솔루션 | 쎄슬프라이머스 알파팜",
  inLanguage: "ko-KR",
  isPartOf: { "@id": "https://www.ceslprimus.com/#website" },
  about: { "@id": "https://www.ceslprimus.com/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://www.ceslprimus.com" },
      { "@type": "ListItem", position: 2, name: "알파팜 (딸기수직농장)", item: url }
    ]
  }
};

export default function AlphaFarmPage() {
  return (
    <KeywordLanding
      eyebrow="알파팜 — 딸기수직농장"
      title="알파팜, 연중 프리미엄 딸기 사업 패키지."
      intro="쎄슬프라이머스의 알파팜은 단순 딸기수직농장 설비가 아니라, 재배·운영·판매까지 연결하는 연중 프리미엄 딸기 사업솔루션입니다. 고객이 초기 투자를 결정하면 계절과 관계없이 연중 운영되는 딸기 사업 구조를 만듭니다."
      blocks={[
        {
          heading: "연중 딸기 사업솔루션",
          body: "재배, 운영, 판매까지 하나의 패키지로 연결합니다. 계약은 1년 기본, 이후 1년 단위 연장이며, 재배·품질관리·판매 같은 머리 아픈 일은 시스템과 운영팀이 대신합니다."
        },
        {
          heading: "알파코어 — 프리미엄 딸기 생산기지",
          body: "안정적인 생산과 품질관리, 운영 지속성을 위한 대형 프리미엄 딸기수직농장. 도심형부터 대형 생산기지까지 규모에 맞춰 설계합니다."
        },
        {
          heading: "알파카페 · 경험형 포트폴리오",
          body: "생산한 딸기를 케이크·생과팩·음료 등 프리미엄 상품으로 판매하는 매장형 모델과, 호텔·쇼룸·베이커리 공간을 브랜드 경험으로 전환하는 포트폴리오를 제공합니다."
        },
        {
          heading: "알파 컨테이너팜",
          body: "40피트 하이큐브 기반의 소형 생산·검증형 딸기수직농장. 적은 면적에서도 고밀도 수직재배로 검증과 확장을 빠르게 진행할 수 있습니다."
        }
      ]}
      ctaTitle="딸기수직농장 사업, 어디서부터 시작할지 함께 설계합니다."
      ctaBody="도심형 매장부터 대형 생산기지, 해외 진출까지 — 프로젝트 목적을 알려주시면 사업개발 담당자가 직접 검토해 회신드립니다."
      backHref="/#alphafarm"
      backLabel="홈에서 알파팜 자세히 보기"
      jsonLd={jsonLd}
    />
  );
}
