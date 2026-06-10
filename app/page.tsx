import Image from "next/image";
import type { ComponentType, ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  Droplets,
  Factory,
  Globe2,
  Handshake,
  Leaf,
  Mail,
  PackageCheck,
  Phone,
  Snowflake,
  Zap
} from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import Reveal from "./components/Reveal";

const businessInquiryMail = `mailto:rkdghtn636@gmail.com?subject=${encodeURIComponent(
  "쎄슬프라이머스 사업개발 문의"
)}`;

const baseUrl = "https://www.ceslprimus.com";

const companyLegal = {
  name: "주식회사 쎄슬프라이머스 농업회사법인",
  displayName: "쎄슬프라이머스",
  representative: "이관호",
  businessNumber: "791-81-00425",
  address: "서울특별시 서초구 양재대로2길 18, 4층 H6호 (우면동, 호반파크 2관)",
  startDate: "2016년 09월 01일",
  businessType: "농업, 임업 및 어업",
  businessItems: "종자 및 묘목 생산업 / 채소, 화훼 및 과실작물 시설재배업",
  inquiryPhone: "010-3341-6036",
  inquiryEmail: "rkdghtn636@gmail.com",
  representativeEmail: "kevinlee@ceslprimus.com"
};

const heroStats = [
  { value: "2016", label: "법인 설립" },
  { value: "4", label: "솔루션 라인업" },
  { value: "10건", label: "특허 · 상표 · 저작권" },
  { value: "2개국", label: "한국 · 말레이시아 거점" }
];

const businessInfoRows = [
  ["상호", companyLegal.name],
  ["대표자", companyLegal.representative],
  ["사업자등록번호", companyLegal.businessNumber],
  ["사업장 소재지", companyLegal.address],
  ["업태", companyLegal.businessType],
  ["종목", companyLegal.businessItems],
  ["사업개발 문의", companyLegal.inquiryPhone],
  ["이메일", companyLegal.inquiryEmail]
];

const portfolio = [
  {
    name: "알파팜",
    anchor: "#alphafarm",
    englishName: "AlphaFarm",
    label: "프리미엄 딸기 수직농장 시스템",
    dot: "bg-forest",
    image: "/media/lineup-alphafarm-clean.png",
    summary:
      "재배, 운영, 판매까지 패키지로 제공하는 연중 딸기 사업솔루션입니다. 딸기 수직농장부터 컨테이너팜, 매장형 모델까지 포함합니다.",
    items: ["딸기 수직농장", "알파 컨테이너팜", "알파카페", "공간형 설치 모델"]
  },
  {
    name: "알파쿨링",
    anchor: "#alphacooling",
    englishName: "AlphaCooling",
    label: "냉방 · 제습 · 공조 솔루션",
    dot: "bg-ice",
    image: "/media/sns/lineup-cooling.png",
    summary:
      "정밀한 습도 제어로 균일한 기후를 만들고 결로와 품질 리스크를 줄입니다. 수직농장부터 콜드체인 시설까지 적용합니다.",
    items: ["수직농장 재배실", "식품 포장실", "저온저장시설", "콜드체인 시설"]
  },
  {
    name: "알파이엠스",
    anchor: "#alphaems",
    englishName: "AlphaEMS",
    label: "에너지 · 운영 관리 플랫폼",
    dot: "bg-energy",
    image: "/media/lineup-alphaenergy-clean.png",
    summary:
      "주요 설비의 운전상태와 전력 사용량을 통합 모니터링하고, 피크부하와 에너지 효율을 데이터로 관리합니다.",
    items: ["설비 통합 모니터링", "전력 사용량 분석", "피크부하 관리", "냉동·냉장 설비 관리"]
  },
  {
    name: "알파서포트",
    anchor: "#alphasupport",
    englishName: "AlphaSupport",
    label: "운영 · 교육 · 사업화 지원 서비스",
    dot: "bg-amber",
    image: "/media/lineup-support-clean.png",
    summary:
      "재배 운영교육과 시설 운영 프로토콜, 데이터 기반 운영관리부터 실증, 구축, 해외 사업화 제안까지 지원합니다.",
    items: ["재배 운영교육", "시설 운영 프로토콜", "데이터 기반 관리", "실증 · 해외 사업화"]
  }
];

const problems = [
  {
    title: "프리미엄 농식품 생산",
    body: "품질과 공급 안정성을 동시에 요구하는 연중 생산 기반",
    icon: Leaf
  },
  {
    title: "고온다습 환경",
    body: "습도, 결로, 공급공기 상태가 품질 리스크로 이어지는 공간",
    icon: Droplets
  },
  {
    title: "고소비 전력 설비",
    body: "냉각, 제습, 냉동·냉장 설비의 피크부하와 운전 안정성",
    icon: Zap
  },
  {
    title: "현지 사업화 실행",
    body: "실증, 구축, 운영, 제안까지 연결되어야 하는 해외 확장",
    icon: Building2
  }
];

const alphaFarmModels = [
  ["알파팜 코어", "대형 프리미엄 딸기 생산기지"],
  ["알파카페", "생산과 프리미엄 리테일을 연결하는 매장형 모델"],
  ["경험형 포트폴리오", "호텔, 쇼룸, 베이커리 공간을 딸기 브랜드 경험으로 전환"],
  ["알파 컨테이너팜", "40피트 하이큐브 기반의 소형 생산 · 검증형 모델"]
];

const alphaFarmFlow = ["생산 기반", "운영 관리", "판매 연결", "공간 경험", "사업화 지원"];

const coolingFlow = ["정밀 습도 제어", "균일한 기후", "품질 리스크 저감", "에너지 절감"];

const coolingModels = [
  ["알파쿨링 팜", "수직농장과 재배실의 습도, 노점, 공급공기 상태를 통합 관리해 균일한 재배 기후를 만듭니다."],
  ["알파쿨링 식품 · 포장실", "식품공정과 포장실의 결로, 곰팡이, 작업환경 리스크를 저온제습으로 줄입니다."],
  ["콜드체인 컨테이너", "철도기술연구원 기술이전 기반, 에너지저장장치를 연계한 저온물류 컨테이너입니다."]
];

const emsCapabilities = [
  { title: "설비 모니터링", body: "냉동기, 공조기, 재배 설비의 운전상태를 한 화면에서 확인" },
  { title: "에너지 절감", body: "전력 사용량을 분석해 낭비 구간과 절감 포인트를 도출" },
  { title: "피크부하 관리", body: "수요 집중 시간대의 부하를 분산해 전력 비용과 리스크 관리" },
  { title: "냉동 · 냉장 설비 관리", body: "온도 이탈, 이상 운전을 조기에 감지해 제품 손실 예방" }
];

const emsModels = [
  {
    title: "알파이엠스 팜",
    body: "재배 환경 데이터와 설비 운전 데이터를 통합해, 수직농장 운영을 데이터 기반으로 관리합니다.",
    items: ["재배 환경 모니터링", "설비 운전 데이터 통합", "운영 리포트"]
  },
  {
    title: "알파이엠스 콜드체인",
    body: "냉동·냉장 설비와 저온 공간의 온도, 전력, 알람을 통합 모니터링해 운영 안정성을 높입니다.",
    items: ["온도 · 알람 통합 관제", "전력 사용량 분석", "피크부하 대응"]
  }
];

const energyPreview = [
  ["알파에너지 폐열 회수", "냉동 설비의 폐열을 회수해 재열, 세척수, 건조 공정에 다시 활용하는 모듈"],
  ["알파에너지 냉열 저장", "냉수와 브라인의 냉열을 저장해 피크 냉방과 부하 완충에 활용하는 모듈"]
];

const supportItems = [
  "재배 운영교육",
  "시설 운영 프로토콜",
  "데이터 기반 운영관리",
  "시장 적합성 검증",
  "현지 실증 · 구축 지원",
  "해외 사업화 제안"
];

const audiences = [
  "수직농장 · 시설원예",
  "식품공장 · 포장실",
  "저온창고 · 콜드체인 시설",
  "베이커리 · 호텔 · 프리미엄 리테일",
  "연구기관 · 교육시설",
  "아세안 해외 사업화 파트너"
];

const news = [
  {
    title: "알파 솔루션 포트폴리오",
    channel: "네이버 블로그",
    image: "/media/alpha-solution-portfolio-0610.png",
    href: "https://blog.naver.com/cesel_primus"
  },
  {
    title: "식품공장 저온제습 솔루션",
    channel: "페이스북",
    image: "/media/sns/sns-facebook-cooling.png",
    href: "https://www.facebook.com/profile.php?id=61590596724306"
  },
  {
    title: "고온다습 환경 제어",
    channel: "링크드인",
    image: "/media/sns/sns-linkedin-cooling.png",
    href: "https://www.linkedin.com/company/ceselprimus-agtech/?viewAsMember=true"
  },
  {
    title: "저온제습이 필요한 이유",
    channel: "네이버 블로그",
    image: "/media/sns/sns-blog-dehumidification.png",
    href: "https://blog.naver.com/cesel_primus"
  },
  {
    title: "식품공장 결로 문제",
    channel: "네이버 블로그",
    image: "/media/sns/sns-blog-condensation.png",
    href: "https://blog.naver.com/cesel_primus"
  },
  {
    title: "국내 사업개발 파트너 모집",
    channel: "인스타그램",
    image: "/media/sns/lineup-support.png",
    href: "https://www.instagram.com/cesel.primus/"
  }
];

const socialLinks = [
  ["네이버 블로그", "https://blog.naver.com/cesel_primus"],
  ["페이스북", "https://www.facebook.com/profile.php?id=61590596724306"],
  ["링크드인", "https://www.linkedin.com/company/ceselprimus-agtech/?viewAsMember=true"],
  ["인스타그램", "https://www.instagram.com/cesel.primus/"]
];

const contactItems: Array<[ComponentType<{ className?: string }>, string, string]> = [
  [Factory, "프로젝트 문의", "수직농장, 식품공장, 포장실 구축 · 개선 프로젝트"],
  [Handshake, "파트너십 문의", "국내 사업개발 파트너, 기술 협력, 공동 사업"],
  [Globe2, "해외 실증 문의", "아세안 등 해외 실증, 구축, 현지 사업화"],
  [Snowflake, "냉동 · 냉장 설비 문의", "저온창고, 콜드체인 시설의 제습 · 에너지 운영"]
];

const contacts = [
  {
    name: "강호수",
    role: "프로 · 사업개발",
    company: companyLegal.displayName,
    phones: [{ label: "휴대전화", value: "010-3341-6036", href: "tel:01033416036" }],
    email: "rkdghtn636@gmail.com",
    primary: true
  },
  {
    name: "이관호",
    role: "대표",
    company: companyLegal.displayName,
    phones: [
      { label: "국내", value: "+82 10-3761-7953", href: "tel:+821037617953" },
      { label: "말레이시아", value: "+60 17-551-8024", href: "tel:+60175518024" }
    ],
    email: "kevinlee@ceslprimus.com",
    primary: false
  }
];

const ipAssetNames = [
  "로봇을 활용한 스마트 팜 자동화 시스템",
  "부하 보호 및 고장 방지 기능을 갖는 스마트 팜 시스템 및 그 제공방법",
  "식물 생육 모니터링 제어 시스템 및 식물 생육 모니터링 제어 방법",
  "스마트 엣지 디바이스 기반의 생육 분석 방법 및 그를 위한 장치 및 시스템",
  "수직형 수경 재배 시스템",
  "고밀도 수직재배를 위한 점적관수, 고밀도 재배 프레임 및 엘이디 시스템",
  "컨테이너 및 이를 제작하는 방법",
  "농작물의 생산성 향상을 위한 데이터 분석 방법 및 장치",
  "쎄슬알파팜",
  "딸기 잎 색상도 채널을 위한 딥러닝 기반 딸기 생육상황 분석 소프트웨어"
];

const faqs = [
  {
    question: "쎄슬프라이머스는 어떤 회사인가요?",
    answer:
      "쎄슬프라이머스는 프리미엄 딸기 수직농장에서 출발해 냉방·제습, 에너지·운영 관리, 콜드체인, 사업화 지원으로 확장하는 기술기업입니다. 식품 생산과 저장 인프라를 하나의 통합 플랫폼으로 만드는 것을 목표로 합니다."
  },
  {
    question: "연중 딸기 사업솔루션이란 무엇인가요?",
    answer:
      "알파팜이 제공하는 사업 모델입니다. 고객이 초기 투자를 결정하면 재배, 운영, 판매까지 쎄슬프라이머스가 패키지로 책임져, 계절과 관계없이 연중 운영되는 딸기 사업을 만듭니다. 계약은 1년 기본, 이후 1년 단위로 연장합니다."
  },
  {
    question: "알파쿨링은 어떤 문제를 해결하나요?",
    answer:
      "수직농장, 식품 포장실, 저온저장시설, 콜드체인 시설에서 발생하는 고온다습 환경, 결로, 공급공기 품질 문제를 저온제습 중심의 공조 솔루션으로 해결합니다."
  },
  {
    question: "알파이엠스는 어떤 플랫폼인가요?",
    answer:
      "주요 설비의 운전상태와 전력 사용량을 통합 모니터링하고, 피크부하와 에너지 운영 효율을 관리하는 에너지·운영 관리 플랫폼입니다. 농장형과 콜드체인형으로 제공됩니다."
  },
  {
    question: "알파에너지는 바로 도입할 수 있나요?",
    answer:
      "알파에너지는 폐열 회수와 냉열 저장으로 에너지 활용도를 높이는 신규 라인업으로, 현재 개발 검토 단계입니다. 적용 가능 시점과 구성은 문의해 주시면 단계에 맞게 안내드립니다."
  },
  {
    question: "어떤 문의를 할 수 있나요?",
    answer:
      "프로젝트 문의, 파트너십 문의, 해외 실증 문의, 냉동·냉장 설비 문의를 받고 있습니다. 사업개발 담당자가 프로젝트 목적에 맞춰 검토 후 회신드립니다."
  }
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: companyLegal.displayName,
    legalName: companyLegal.name,
    alternateName: ["쎄슬프라이머스", "CESeL Primus", "CESeL Primus Co., Ltd."],
    url: baseUrl,
    logo: `${baseUrl}/media/cesel-logo-ci-transparent.png`,
    image: `${baseUrl}/media/hero-integrated-solution-v2.png`,
    taxID: companyLegal.businessNumber,
    foundingDate: "2016-09-01",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyLegal.address,
      addressCountry: "KR"
    },
    description:
      "프리미엄 딸기 수직농장에서 출발해 냉방·제습, 에너지·운영 관리, 콜드체인, 사업화 지원으로 확장하는 농식품·콜드체인 인프라 기술기업입니다.",
    sameAs: socialLinks.map(([, href]) => href),
    contactPoint: contacts.flatMap((contact) =>
      contact.phones.map((phone) => ({
        "@type": "ContactPoint",
        name: contact.name,
        contactType: contact.role,
        telephone: phone.value,
        email: contact.email,
        areaServed: ["KR", "MY", "ASEAN"],
        availableLanguage: ["ko", "en"]
      }))
    ),
    knowsAbout: [
      "연중 딸기 사업솔루션",
      "프리미엄 딸기 수직농장",
      "컨테이너팜",
      "저온제습",
      "냉방·제습·공조 솔루션",
      "에너지·운영 관리 플랫폼",
      "피크부하 관리",
      "콜드체인 컨테이너",
      "냉동·냉장 설비 관리",
      "해외 실증·사업화 지원"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "쎄슬프라이머스",
    inLanguage: "ko-KR",
    publisher: {
      "@id": `${baseUrl}/#organization`
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    url: baseUrl,
    name: "쎄슬프라이머스 | 수직농장에서 콜드체인까지, 식품 인프라 통합 솔루션",
    isPartOf: {
      "@id": `${baseUrl}/#website`
    },
    about: {
      "@id": `${baseUrl}/#organization`
    },
    primaryImageOfPage: `${baseUrl}/media/hero-integrated-solution-v2.png`,
    dateModified: "2026-06-10",
    inLanguage: "ko-KR"
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${baseUrl}/#solution-list`,
    name: "쎄슬프라이머스 솔루션 라인업",
    itemListElement: portfolio.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: item.name,
        alternateName: item.englishName,
        serviceType: item.label,
        description: item.summary,
        provider: {
          "@id": `${baseUrl}/#organization`
        },
        areaServed: ["대한민국", "말레이시아", "아세안"]
      }
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${baseUrl}/#portfolio-motion`,
    name: "쎄슬프라이머스 포트폴리오 모션 필름",
    description:
      "프리미엄 딸기 수직농장에서 출발한 운영 경험이 기후제어, 에너지·운영 관리, 콜드체인, 사업화 지원으로 확장되는 흐름을 보여주는 브랜드 모션 필름입니다.",
    thumbnailUrl: [`${baseUrl}/media/hero-integrated-solution-v2.png`],
    contentUrl: `${baseUrl}/media/cesel-portfolio-motion.mp4`,
    uploadDate: "2026-06-10",
    inLanguage: "ko-KR",
    publisher: {
      "@id": `${baseUrl}/#organization`
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: baseUrl
      }
    ]
  }
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <StructuredData data={structuredData} />
      <SiteHeader inquiryHref={businessInquiryMail} />
      <Hero />
      <PositioningSection />
      <ProblemSection />
      <LineupSection />
      <AlphaFarmSection />
      <AlphaCoolingSection />
      <AlphaEmsSection />
      <AlphaEnergySection />
      <AlphaSupportSection />
      <AudienceSection />
      <IpSection />
      <MotionSection />
      <NewsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function StructuredData({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c")
      }}
    />
  );
}

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-[min(1140px,92vw)] ${className}`}>{children}</div>;
}

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-[1rem] font-semibold ${dark ? "text-mint" : "text-forest"}`}>
      <span aria-hidden className={`h-px w-9 ${dark ? "bg-mint/70" : "bg-forest/50"}`} />
      {children}
    </p>
  );
}

function SectionTitle({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <h2
      className={`mt-5 text-[1.9rem] font-bold leading-[1.22] tracking-tight md:text-[2.7rem] md:leading-[1.14] ${
        dark ? "text-white" : "text-ink"
      }`}
    >
      {children}
    </h2>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[94svh] w-full overflow-hidden bg-ink text-white">
      <Image
        src="/media/hero-integrated-solution-v2.png"
        alt="쎄슬프라이머스 수직농장과 콜드체인 통합 솔루션 비주얼"
        fill
        priority
        sizes="100vw"
        className="slow-drift object-cover"
      />
      <div className="hero-mask absolute inset-0" />
      <div className="relative z-10 flex min-h-[94svh] flex-col">
        <Container className="flex flex-1 flex-col justify-center pb-16 pt-36 md:pt-40">
          <div className="max-w-3xl">
            <p className="reveal-up flex items-center gap-3 text-[1.02rem] font-semibold text-mint md:text-lg">
              <span aria-hidden className="h-px w-9 bg-mint/70" />
              농식품 · 콜드체인 인프라 기술기업
            </p>
            <h1 className="reveal-up mt-6 text-[2.6rem] font-bold leading-[1.16] tracking-tight md:text-[4.1rem] md:leading-[1.08]">
              수직농장에서 콜드체인까지,
              <br />
              식품 인프라를 플랫폼으로.
            </h1>
            <p className="reveal-up-delayed mt-7 max-w-2xl text-lg leading-relaxed text-white/82 md:text-[1.35rem] md:leading-relaxed">
              쎄슬프라이머스는 프리미엄 딸기 수직농장에서 출발해 냉방·제습, 에너지·운영 관리,
              콜드체인, 사업화 지원까지 — 식품 생산과 저장의 전 과정을 하나의 솔루션으로
              연결합니다.
            </p>
            <div className="reveal-up-delayed mt-10 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[1.05rem] font-semibold text-ink transition hover:bg-mint"
                href="#lineup"
              >
                솔루션 라인업 보기 <ArrowRight className="h-5 w-5" />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[1.05rem] font-semibold text-white ring-1 ring-inset ring-white/40 transition hover:bg-white/10 hover:ring-white"
                href={businessInquiryMail}
              >
                사업개발 문의
              </a>
            </div>
          </div>
        </Container>
        <div className="reveal-up-late border-t border-white/16 bg-ink/30 backdrop-blur-sm">
          <Container className="grid grid-cols-2 gap-x-6 gap-y-7 py-8 md:grid-cols-4 md:py-9">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold tracking-tight md:text-[2rem]">{stat.value}</p>
                <p className="mt-1.5 text-[0.95rem] font-medium text-white/64 md:text-base">{stat.label}</p>
              </div>
            ))}
          </Container>
        </div>
      </div>
    </section>
  );
}

function PositioningSection() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-4xl">
            <Eyebrow>핵심 포지셔닝</Eyebrow>
            <p className="mt-7 text-[1.55rem] font-bold leading-[1.4] tracking-tight text-ink md:text-[2.15rem] md:leading-[1.38]">
              단순한 설비 공급을 넘어, 식품 생산·저장 인프라를
              <span className="text-forest"> 하나의 통합 플랫폼</span>으로 만듭니다.
            </p>
            <p className="mt-7 max-w-3xl text-[1.08rem] leading-relaxed text-ink/68 md:text-[1.18rem]">
              딸기 수직농장에서 검증한 운영 경험을 기반으로 기후제어, 에너지·운영 관리, 콜드체인,
              사업화 지원으로 확장합니다. 생산 · 저장 · 공조 · 에너지 · 운영 데이터가 결합된
              기술 기업, 쎄슬프라이머스입니다.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>적용 영역</Eyebrow>
            <SectionTitle>
              현장의 문제는 설비 하나가 아니라
              <br className="hidden md:block" /> 운영 전체에서 발생합니다.
            </SectionTitle>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 90}>
              <div className="group border-t-2 border-ink/12 pt-7 transition-colors duration-300 hover:border-forest">
                <problem.icon className="h-9 w-9 text-forest transition duration-300 group-hover:-translate-y-1" />
                <h3 className="mt-7 text-2xl font-bold leading-snug tracking-tight">{problem.title}</h3>
                <p className="mt-3.5 text-[1.05rem] leading-relaxed text-ink/66 md:text-[1.1rem]">{problem.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function LineupSection() {
  return (
    <section id="lineup" className="bg-white py-20 md:py-32">
      <Container>
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <Eyebrow>솔루션 라인업</Eyebrow>
              <SectionTitle>
                알파팜에서 검증하고,
                <br /> 네 개의 라인업으로 확장합니다.
              </SectionTitle>
            </div>
            <p className="max-w-md text-[1.05rem] leading-relaxed text-ink/62 md:pb-2 md:text-[1.1rem]">
              생산, 기후, 에너지, 운영 — 각 라인업은 따로 도입할 수도, 하나의 프로젝트로 묶을 수도
              있습니다.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {portfolio.map((item, index) => (
            <Reveal key={item.name} delay={(index % 2) * 110}>
              <a
                href={item.anchor}
                className="group block overflow-hidden rounded-2xl bg-paper ring-1 ring-ink/8 transition duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  <Image
                    src={item.image}
                    alt={`${item.name} 대표 이미지`}
                    fill
                    sizes="(min-width: 768px) 50vw, 92vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  <p className="absolute left-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/92 text-[0.95rem] font-bold text-ink">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="p-7 md:p-8">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
                    <h3 className="text-[1.7rem] font-bold tracking-tight text-ink md:text-3xl">{item.name}</h3>
                    <p className="flex items-center gap-2 text-[1rem] font-semibold text-forest">
                      <span aria-hidden className={`h-2 w-2 rounded-full ${item.dot}`} />
                      {item.label}
                    </p>
                  </div>
                  <p className="mt-4 text-[1.05rem] leading-relaxed text-ink/68 md:text-[1.1rem]">{item.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.items.map((entry) => (
                      <span
                        key={entry}
                        className="rounded-full bg-white px-3.5 py-1.5 text-[0.95rem] font-medium text-ink/72 ring-1 ring-ink/10"
                      >
                        {entry}
                      </span>
                    ))}
                  </div>
                  <p className="mt-7 inline-flex items-center gap-2 text-[1.02rem] font-semibold text-forest">
                    자세히 보기
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AlphaFarmSection() {
  return (
    <section id="alphafarm" className="py-20 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <Reveal>
              <Eyebrow>알파팜 — 라인업 01</Eyebrow>
              <SectionTitle>
                투자는 한 번,
                <br /> 딸기 사업은 연중 내내 돌아갑니다.
              </SectionTitle>
              <p className="mt-6 text-[1.08rem] leading-relaxed text-ink/70 md:text-[1.18rem]">
                알파팜은 설비가 아니라 <strong className="font-bold text-ink">연중 딸기 사업솔루션</strong>을
                제공합니다. 고객이 초기 투자를 결정하면 재배, 운영, 판매까지 쎄슬프라이머스가
                패키지로 책임집니다. 계약은 1년 기본, 이후 1년 단위로 연장하며 — 머리 아픈 일은
                시스템과 운영팀이 대신합니다.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-5">
                {alphaFarmFlow.map((step, index) => (
                  <div key={step} className="border-t-2 border-forest/25 pt-4">
                    <p className="text-[0.9rem] font-bold text-forest">{String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-1.5 text-[1.05rem] font-semibold leading-snug text-ink">{step}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {alphaFarmModels.map(([name, desc]) => (
                  <div
                    key={name}
                    className="rounded-2xl bg-white p-6 ring-1 ring-ink/8 transition-colors duration-300 hover:ring-forest/40"
                  >
                    <p className="text-xl font-bold tracking-tight text-ink">{name}</p>
                    <p className="mt-2.5 text-[1.02rem] leading-relaxed text-ink/66">{desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={140} className="lg:sticky lg:top-28">
            <figure className="relative overflow-hidden rounded-2xl bg-ink shadow-soft">
              <div className="relative aspect-[4/5] md:aspect-[4/4.4]">
                <Image
                  src="/media/lineup-alphafarm-clean.png"
                  alt="알파팜 프리미엄 딸기 수직농장"
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-7 pt-16 text-white">
                <p className="text-xl font-bold leading-snug md:text-2xl">
                  생산 현장과 운영 시스템을 함께 설계합니다
                </p>
                <p className="mt-2.5 text-[1rem] leading-relaxed text-white/72">
                  재배 공간, 품질관리, 리테일 접점, 현지 사업화까지 하나의 흐름으로.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function AlphaCoolingSection() {
  return (
    <section id="alphacooling" className="bg-white py-20 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal delay={140} className="order-last lg:order-first lg:sticky lg:top-28">
            <figure className="relative overflow-hidden rounded-2xl bg-ink shadow-soft">
              <div className="relative aspect-[4/5] md:aspect-[4/4.4]">
                <Image
                  src="/media/sns/lineup-cooling.png"
                  alt="알파쿨링 저온제습 공조 설비가 적용된 식품 작업장"
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>알파쿨링 — 라인업 02</Eyebrow>
              <SectionTitle>
                습도를 제어하면, 기후가 균일해지고
                <br /> 품질 리스크가 줄어듭니다.
              </SectionTitle>
              <p className="mt-6 text-[1.08rem] leading-relaxed text-ink/70 md:text-[1.18rem]">
                단순 냉방이 아닙니다. 노점, 표면결로, 공급공기 상태까지 함께 관리하는 저온제습
                중심의 공조 솔루션으로, 수직농장부터 식품 포장실, 저온저장시설, 콜드체인 시설까지
                적용합니다.
              </p>
            </Reveal>
            <Reveal delay={110}>
              <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-3">
                {coolingFlow.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full bg-paper px-4 py-2 text-[1rem] font-semibold text-ink ring-1 ring-ink/10">
                      {step}
                    </span>
                    {index < coolingFlow.length - 1 ? (
                      <ArrowRight aria-hidden className="h-4 w-4 text-forest" />
                    ) : null}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 overflow-hidden rounded-2xl ring-1 ring-ink/8">
                {coolingModels.map(([name, desc], index) => (
                  <div
                    key={name}
                    className={`grid gap-2.5 bg-paper p-6 md:grid-cols-[210px_1fr] md:gap-6 md:p-7 ${
                      index > 0 ? "border-t border-ink/8" : ""
                    }`}
                  >
                    <p className="text-lg font-bold tracking-tight text-ink">{name}</p>
                    <p className="text-[1.02rem] leading-relaxed text-ink/66 md:text-[1.06rem]">{desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AlphaEmsSection() {
  return (
    <section id="alphaems" className="py-20 md:py-32">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>알파이엠스 — 라인업 03</Eyebrow>
            <SectionTitle>
              설비 운전과 전력 사용을
              <br /> 한 화면에서 관리합니다.
            </SectionTitle>
            <p className="mt-6 text-[1.08rem] leading-relaxed text-ink/70 md:text-[1.18rem]">
              알파이엠스는 에너지·운영 관리 플랫폼입니다. 냉동기와 공조기, 재배 설비의 운전상태와
              전력 사용량을 통합 모니터링하고, 피크부하와 에너지 효율을 데이터로 관리합니다.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {emsCapabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 90}>
              <div className="border-t-2 border-ink/12 pt-6 transition-colors duration-300 hover:border-energy">
                <h3 className="text-xl font-bold tracking-tight text-ink md:text-[1.35rem]">{capability.title}</h3>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-ink/66 md:text-[1.06rem]">{capability.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {emsModels.map((model, index) => (
            <Reveal key={model.title} delay={index * 110}>
              <article className="h-full rounded-2xl bg-white p-7 ring-1 ring-ink/8 md:p-9">
                <h3 className="text-2xl font-bold tracking-tight text-ink">{model.title}</h3>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-ink/68">{model.body}</p>
                <div className="mt-7 space-y-3.5">
                  {model.items.map((item) => (
                    <p key={item} className="flex items-start gap-3 text-[1.05rem] font-medium text-ink/82">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AlphaEnergySection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-paper ring-1 ring-ink/8">
            <div className="grid gap-8 p-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:p-12">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-amber/12 px-4 py-1.5 text-[0.95rem] font-bold text-[#9A5708] ring-1 ring-amber/35">
                  <BatteryCharging className="h-4 w-4" />
                  개발 검토 중인 신규 라인업
                </p>
                <h2 className="mt-5 text-[1.65rem] font-bold leading-[1.25] tracking-tight text-ink md:text-[2.1rem]">
                  알파에너지 — 버려지는 에너지를
                  <br className="hidden md:block" /> 다시 쓰는 기술을 준비합니다.
                </h2>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-ink/66 md:text-[1.1rem]">
                  폐열 회수와 냉열 저장으로 에너지 활용도를 높이는 방향으로 개발을 검토하고
                  있습니다. 전력·운영 관리는 알파이엠스가 담당합니다.
                </p>
              </div>
              <div className="grid gap-4">
                {energyPreview.map(([name, desc]) => (
                  <div key={name} className="rounded-2xl bg-white p-6 ring-1 ring-ink/8">
                    <p className="text-lg font-bold tracking-tight text-ink">{name}</p>
                    <p className="mt-2 text-[1.02rem] leading-relaxed text-ink/66">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function AlphaSupportSection() {
  return (
    <section id="alphasupport" className="py-20 md:py-32">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] bg-forest text-white shadow-soft">
            <div className="grid md:grid-cols-[1.05fr_0.95fr]">
              <div className="p-8 md:p-14">
                <Eyebrow dark>알파서포트 — 라인업 04</Eyebrow>
                <SectionTitle dark>
                  도입 이후가 진짜 시작입니다.
                  <br /> 운영과 사업화까지 함께 갑니다.
                </SectionTitle>
                <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/76 md:text-[1.12rem]">
                  재배 운영교육과 시설 운영 프로토콜, 데이터 기반 운영관리부터 시장 적합성 검증,
                  현지 실증, 해외 사업화 제안까지 — 솔루션이 실제 사업이 되도록 지원합니다.
                </p>
                <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {supportItems.map((item) => (
                    <p
                      key={item}
                      className="border-t border-white/22 pt-4 text-[1.06rem] font-medium text-white/88"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[320px] md:min-h-[480px]">
                <Image
                  src="/media/lineup-support-clean.png"
                  alt="알파서포트 사업개발 파트너십"
                  fill
                  sizes="(min-width: 768px) 45vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-forest/40 to-transparent md:from-forest/60" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>적용 고객군</Eyebrow>
            <SectionTitle>
              생산 현장부터 리테일, 저온물류까지
              <br /> 함께하고 있습니다.
            </SectionTitle>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-x-10 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <Reveal key={audience} delay={(index % 3) * 80}>
              <p className="flex min-h-[5.5rem] items-center gap-4 border-t border-ink/12 py-5 text-xl font-semibold leading-snug tracking-tight text-ink md:text-[1.32rem]">
                <PackageCheck className="h-6 w-6 shrink-0 text-forest" />
                {audience}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function IpSection() {
  return (
    <section id="ip" className="py-20 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <Eyebrow>권리 · 특허 포트폴리오</Eyebrow>
            <SectionTitle>
              10건의 등록 권리가
              <br /> 기술의 깊이를 증명합니다.
            </SectionTitle>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-ink/66 md:text-[1.12rem]">
              스마트팜 자동화, 생육 분석, 수직재배, 컨테이너, 데이터 분석까지 — 특허·상표·저작권
              포트폴리오가 솔루션의 기반입니다.
            </p>
          </Reveal>
          <div>
            {ipAssetNames.map((name, index) => (
              <Reveal key={name} delay={(index % 5) * 60}>
                <div className="group flex items-baseline gap-5 border-t border-ink/10 py-5 transition-colors duration-300 last:border-b hover:border-forest/50">
                  <span className="w-9 shrink-0 text-[0.95rem] font-bold text-forest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[1.08rem] font-semibold leading-snug text-ink md:text-[1.14rem]">{name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function MotionSection() {
  return (
    <section id="motion-film" className="bg-ink py-20 text-white md:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-3 text-[1rem] font-semibold text-mint">
              <span aria-hidden className="h-px w-9 bg-mint/70" />
              브랜드 모션 필름
              <span aria-hidden className="h-px w-9 bg-mint/70" />
            </p>
            <h2 className="mt-5 text-[1.9rem] font-bold leading-[1.22] tracking-tight md:text-[2.7rem] md:leading-[1.14]">
              하나의 흐름으로 이어지는
              <br /> 쎄슬프라이머스의 확장
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-white/68 md:text-[1.12rem]">
              수직농장에서 출발한 운영 경험이 기후제어, 에너지·운영 관리, 콜드체인, 사업화 지원으로
              확장되는 방향을 담았습니다.
            </p>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="relative mt-12 overflow-hidden rounded-2xl ring-1 ring-white/14 md:mt-14">
            <video
              className="aspect-video h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/media/hero-integrated-solution-v2.png"
            >
              <source src="/media/cesel-portfolio-motion.mp4" type="video/mp4" />
              쎄슬프라이머스 포트폴리오 모션 필름
            </video>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="py-20 md:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>소식</Eyebrow>
              <SectionTitle>
                공식 채널의 최신 소식을
                <br /> 한곳에서 만나보세요.
              </SectionTitle>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-[0.98rem] font-semibold text-ink ring-1 ring-ink/12 transition-colors duration-200 hover:ring-forest hover:text-forest"
                >
                  {label} <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {news.map((item, index) => (
            <Reveal key={`${item.channel}-${item.title}`} delay={(index % 3) * 90}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8 transition duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.045]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <p className="text-[0.95rem] font-bold text-forest">{item.channel}</p>
                    <h3 className="mt-1.5 text-xl font-bold leading-snug tracking-tight text-ink md:text-[1.32rem]">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink/35 transition group-hover:text-forest" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-white py-20 md:py-32">
      <Container className="max-w-[820px]">
        <Reveal>
          <div className="text-center">
            <p className="flex items-center justify-center gap-3 text-[1rem] font-semibold text-forest">
              <span aria-hidden className="h-px w-9 bg-forest/50" />
              자주 묻는 질문
              <span aria-hidden className="h-px w-9 bg-forest/50" />
            </p>
            <h2 className="mt-5 text-[1.9rem] font-bold leading-[1.22] tracking-tight text-ink md:text-[2.7rem] md:leading-[1.14]">
              궁금한 점에 먼저 답합니다.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 border-t border-ink/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-ink/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-bold leading-snug tracking-tight text-ink transition-colors hover:text-forest md:text-xl">
                  {faq.question}
                  <span
                    aria-hidden
                    className="text-2xl font-medium leading-none text-forest transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-7 pr-10 text-[1.05rem] leading-relaxed text-ink/68 md:text-[1.1rem]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <Reveal>
              <Eyebrow>연락처</Eyebrow>
              <SectionTitle>
                프로젝트 목적을 알려주시면,
                <br /> 맞는 조합을 설계해 드립니다.
              </SectionTitle>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-ink/68 md:text-[1.12rem]">
                수직농장, 식품공장, 저온물류, 해외 실증, 프리미엄 딸기 사업화 — 어떤 단계든
                사업개발 담당자가 직접 검토하고 회신드립니다.
              </p>
              <a
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 text-[1.05rem] font-semibold text-white transition hover:bg-ink"
                href={businessInquiryMail}
              >
                사업개발 문의하기 <ArrowRight className="h-5 w-5" />
              </a>
            </Reveal>
            <Reveal delay={130}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {contactItems.map(([Icon, label, desc]) => (
                  <div key={label} className="rounded-2xl bg-white p-5 ring-1 ring-ink/8">
                    <Icon className="h-6 w-6 text-forest" />
                    <p className="mt-3.5 text-[1.08rem] font-bold tracking-tight text-ink">{label}</p>
                    <p className="mt-1.5 text-[0.98rem] leading-relaxed text-ink/62">{desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {contacts.map((contact, index) => (
              <Reveal key={contact.email} delay={index * 110}>
                <article
                  className={`h-full rounded-2xl p-7 ring-1 transition-shadow duration-300 hover:shadow-soft md:p-8 ${
                    contact.primary ? "bg-white ring-forest/35" : "bg-white ring-ink/8"
                  }`}
                >
                  {contact.primary ? (
                    <p className="inline-flex rounded-full bg-forest/10 px-3.5 py-1 text-[0.88rem] font-bold text-forest">
                      사업개발 총괄 문의
                    </p>
                  ) : (
                    <p className="inline-flex rounded-full bg-ink/6 px-3.5 py-1 text-[0.88rem] font-bold text-ink/60">
                      경영 · 해외 사업
                    </p>
                  )}
                  <h3 className="mt-5 text-[1.75rem] font-bold tracking-tight text-ink">{contact.name}</h3>
                  <p className="mt-1 text-[1.08rem] font-semibold text-ink/62">{contact.role}</p>
                  <div className="mt-7 space-y-2.5">
                    {contact.phones.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="flex items-center justify-between gap-3 rounded-xl bg-paper px-5 py-3.5 transition-colors duration-200 hover:bg-forest/10"
                      >
                        <span className="flex items-center gap-2.5 text-[0.95rem] font-semibold text-ink/56">
                          <Phone className="h-5 w-5 text-forest" />
                          {phone.label}
                        </span>
                        <span className="text-[1.05rem] font-bold tracking-tight text-ink">{phone.value}</span>
                      </a>
                    ))}
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2.5 rounded-xl bg-forest px-5 py-3.5 text-white transition-colors duration-200 hover:bg-ink"
                    >
                      <Mail className="h-5 w-5 shrink-0" />
                      <span className="break-all text-[1rem] font-semibold">{contact.email}</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Image
            src="/media/cesel-logo-ci-white-transparent.png"
            alt="쎄슬프라이머스"
            width={203}
            height={50}
            className="h-auto w-44"
          />
          <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-white/64">
            수직농장에서 콜드체인까지, 식품 인프라를 플랫폼으로 전환합니다. 알파팜, 알파쿨링,
            알파이엠스, 알파서포트를 연결해 생산부터 사업화 지원까지 확장합니다.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {socialLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-white/70 ring-1 ring-white/16 transition-colors duration-200 hover:text-white hover:ring-mint"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-7 lg:items-end">
          <a
            href={businessInquiryMail}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-mint px-6 py-3.5 text-[1.02rem] font-semibold text-ink transition hover:bg-white"
          >
            사업개발 문의하기 <ArrowRight className="h-5 w-5" />
          </a>
          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-[1rem] font-medium text-white/64 lg:justify-end" aria-label="푸터 메뉴">
            <a href="#lineup" className="transition hover:text-white">라인업</a>
            <a href="#alphafarm" className="transition hover:text-white">알파팜</a>
            <a href="#ip" className="transition hover:text-white">권리·특허</a>
            <a href="#news" className="transition hover:text-white">소식</a>
            <a href="#contact" className="transition hover:text-white">연락처</a>
          </nav>
        </div>
      </Container>
      <Container className="py-12">
        <div className="grid gap-9 lg:grid-cols-[200px_1fr]">
          <div>
            <p className="text-[1.05rem] font-bold text-white">사업자 정보</p>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-white/44">사업자등록증 기준 공개 정보</p>
          </div>
          <dl className="grid gap-x-10 gap-y-5 text-[0.98rem] leading-relaxed text-white/64 md:grid-cols-2">
            {businessInfoRows.map(([label, value]) => (
              <div key={label} className={label === "사업장 소재지" || label === "종목" ? "md:col-span-2" : ""}>
                <dt className="font-semibold text-white/86">{label}</dt>
                <dd className="ml-0 mt-1 break-keep">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-[0.92rem] text-white/42 md:flex-row md:items-center md:justify-between">
          <p>저작권 2026 쎄슬프라이머스. 모든 권리 보유.</p>
          <p>공식 문의: {companyLegal.inquiryEmail}</p>
        </div>
      </Container>
    </footer>
  );
}
