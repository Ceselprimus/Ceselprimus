import Image from "next/image";
import type { ComponentType, ReactNode } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  CircuitBoard,
  Database,
  Droplets,
  ExternalLink,
  Factory,
  Globe2,
  Leaf,
  Mail,
  PackageCheck,
  Phone,
  Snowflake,
  Sprout,
  ThermometerSnowflake,
  Truck,
  Zap
} from "lucide-react";

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

const heroHighlights = ["알파팜 운영 경험", "기후·전력·제어 통합", "콜드체인·데이터 연결", "실증·구축·사업화 지원"];

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
    label: "프리미엄 딸기 생산 · 리테일 · 공간경험",
    tone: "text-forest",
    bg: "bg-forest",
    icon: Sprout,
    image: "/media/lineup-alphafarm-clean.png",
    summary:
      "연중 딸기 사업솔루션을 중심으로 생산, 운영, 판매, 공간 경험을 하나의 사업 패키지로 연결합니다.",
    items: ["프리미엄 딸기 생산", "리테일 운영", "공간 경험 설계", "컨테이너팜 검증"]
  },
  {
    name: "알파쿨링",
    label: "저온제습 · 결로관리 · 콜드체인",
    tone: "text-ice",
    bg: "bg-ice",
    icon: ThermometerSnowflake,
    image: "/media/sns/lineup-cooling.png",
    summary:
      "재배실, 식품공정, 포장실, 콜드체인 컨테이너의 습도와 공급공기 상태를 함께 관리합니다.",
    items: ["농장 저온제습", "식품공장 결로관리", "포장실 습도 제어", "콜드체인 컨테이너"]
  },
  {
    name: "알파에너지",
    label: "전력 · 제어 · 데이터 통합 관리",
    tone: "text-energy",
    bg: "bg-energy",
    icon: BatteryCharging,
    image: "/media/lineup-alphaenergy-clean.png",
    summary:
      "에너지관리시스템과 사전냉각 통합 실외기를 하나의 체계로 묶어 설비 운전 안정성을 높입니다.",
    items: ["전력 패널", "인공지능 제어 게이트웨이", "데이터 관리", "피크부하 안정화"]
  },
  {
    name: "알파서포트",
    label: "실증 · 구축 · 운영 · 사업화 지원",
    tone: "text-amber",
    bg: "bg-amber",
    icon: Globe2,
    image: "/media/lineup-support-clean.png",
    summary:
      "국내외 프로젝트 발굴부터 실증, 구축, 운영, 파트너십까지 사업화 실행을 지원합니다.",
    items: ["시장 적합성 검증", "현지 실증", "구축 지원", "사업화 제안"]
  }
];

const problems = [
  {
    title: "프리미엄 농식품 생산",
    body: "품질과 공급 안정성을 동시에 요구하는 생산 기반",
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
  ["알파코어", "대형 프리미엄 딸기 생산기지"],
  ["알파카페", "생산과 프리미엄 리테일을 연결하는 매장형 모델"],
  ["경험형 포트폴리오", "호텔, 쇼룸, 베이커리 공간을 딸기 브랜드 경험으로 전환"],
  ["알파 컨테이너팜", "사십 피트 하이큐브 기반의 소형 생산 · 검증형 모델"]
];

const alphaFarmFlow = ["생산 기반", "운영 관리", "판매 연결", "공간 경험", "사업화 지원"];

const coolingModels = [
  ["농장 저온제습", "딸기 재배실의 습도, 노점, 공급공기 상태를 통합 관리"],
  ["식품·포장실 제습", "식품공정과 포장실의 결로, 곰팡이, 작업환경 리스크 저감"],
  ["콜드체인 컨테이너", "철도기술연구원 기술이전 기반의 에너지저장장치 연계 컨테이너"]
];

const energyModels = [
  {
    title: "에너지관리시스템",
    items: ["알파 파워 패널", "인공지능 제어 게이트웨이", "알파 데이터 관리 시스템"],
    body: "전력센서, 제어 게이트웨이, 이미지·센서·에너지 데이터를 하나의 운영 레이어로 연결합니다."
  },
  {
    title: "사전냉각 통합 실외기",
    items: ["쿨링 실외기 전력절감", "피크부하 안정화", "고온 외기 대응", "설비 운전 안정성"],
    body: "고온 외기와 피크부하에 대응해 냉방·제습 설비의 전력 안정화와 운전 효율을 지원합니다."
  }
];

const audiences = [
  "베이커리 · 프리미엄 카페",
  "호텔 · 쇼룸 · 리테일 공간",
  "식품공장 · 포장실",
  "냉동창고 · 저온물류 시설",
  "창고 · 건물 보유 고객",
  "아세안 사업화 파트너"
];

const news = [
  {
    title: "알파 솔루션 포트폴리오",
    channel: "네이버 블로그",
    image: "/media/sns/sns-portfolio.png",
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

const contactItems: Array<[ComponentType<{ className?: string }>, string]> = [
  [Factory, "식품공장 · 포장실 저온제습 문의"],
  [Truck, "콜드체인 · 저온물류 인프라 문의"],
  [BatteryCharging, "전력 · 제어 · 데이터 운영관리 문의"],
  [Database, "실증 · 구축 · 해외 사업화 문의"]
];

const contacts = [
  {
    name: "강호수",
    role: "프로 / 사업개발",
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
      { label: "국내 휴대전화", value: "+82 010-3761-7953", href: "tel:+821037617953" },
      { label: "말레이시아 휴대전화", value: "+60 017-551-8024", href: "tel:+600175518024" }
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
      "쎄슬프라이머스는 알파팜에서 검증된 운영 경험을 기반으로 재배, 기후, 전력, 제어, 콜드체인, 데이터, 사업화 지원을 연결하는 농식품·콜드체인 인프라 통합 솔루션 기업입니다."
  },
  {
    question: "알파팜은 단순 수직농장 설비와 무엇이 다른가요?",
    answer:
      "알파팜은 프리미엄 딸기 생산, 리테일 운영, 공간 경험, 컨테이너팜 검증을 하나의 사업 패키지로 연결하는 연중 딸기 사업솔루션입니다."
  },
  {
    question: "알파쿨링은 어떤 문제를 해결하나요?",
    answer:
      "알파쿨링은 농장, 식품공장, 포장실, 콜드체인 컨테이너에서 발생하는 고온다습 환경, 저온제습, 결로, 공급공기 상태 관리 문제를 다룹니다."
  },
  {
    question: "알파에너지는 어떤 체계인가요?",
    answer:
      "알파에너지는 에너지관리시스템과 사전냉각 통합 실외기를 함께 묶어 전력, 제어, 데이터, 피크부하 안정화, 고온 외기 대응을 관리하는 솔루션 체계입니다."
  },
  {
    question: "어떤 문의를 할 수 있나요?",
    answer:
      "식품공장·포장실 저온제습, 콜드체인·저온물류 인프라, 전력·제어·데이터 운영관리, 실증·구축·해외 사업화 프로젝트를 문의할 수 있습니다."
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
      "알파팜에서 검증된 운영 경험을 기반으로 재배, 기후, 전력, 제어, 콜드체인, 데이터, 사업화 지원을 연결하는 농식품·콜드체인 인프라 통합 솔루션 포트폴리오 기업입니다.",
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
      "프리미엄 딸기 생산",
      "저온제습",
      "고온다습 환경 제어",
      "콜드체인 컨테이너",
      "냉동·냉장 설비 관리",
      "에너지관리",
      "사업화 지원"
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
    name: "쎄슬프라이머스 농식품·콜드체인 인프라 통합 솔루션",
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
        alternateName: item.name === "알파팜" ? "AlphaFarm" : item.name === "알파쿨링" ? "AlphaCooling" : item.name === "알파에너지" ? "AlphaEnergy" : "AlphaSupport",
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
      "알파팜에서 출발한 운영 경험이 기후제어, 에너지관리, 콜드체인, 데이터, 사업화 지원으로 확장되는 흐름을 보여주는 브랜드 모션 필름입니다.",
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
    <main className="overflow-hidden">
      <StructuredData data={structuredData} />
      <Hero />
      <PositioningBand />
      <PortfolioSection />
      <AlphaFarmSection />
      <LineupGallerySection />
      <LineupDepth />
      <ProblemSection />
      <AudienceSection />
      <ProofSection />
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

function LineupGallerySection() {
  return (
    <section className="bg-paper py-28">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-base font-semibold text-forest">포트폴리오 이미지</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-5xl">
              네 가지 라인업을 한 화면에서 구분합니다.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink/68">
            알파팜을 기준점으로 두고, 알파쿨링·알파에너지·알파서포트가 맡는 영역을 이미지와 짧은 설명으로 빠르게 비교할 수 있게 정리했습니다.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {portfolio.map((item) => (
            <figure key={`${item.name}-gallery`} className="group overflow-hidden rounded-lg border border-ink/8 bg-white shadow-soft">
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <Image src={item.image} alt={`${item.name} 대표 이미지`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-ink/8 to-transparent opacity-80" />
                <p className="absolute bottom-5 left-5 text-3xl font-semibold text-white">{item.name}</p>
              </div>
              <figcaption className="flex items-start justify-between gap-4 p-6">
                <div>
                  <p className="text-base font-semibold text-forest">{item.label}</p>
                  <p className="mt-3 text-base leading-7 text-ink/66">{item.summary}</p>
                </div>
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md ${item.bg}`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[96svh] w-full overflow-hidden bg-ink text-white">
      <Image
        src="/media/hero-integrated-solution-v2.png"
        alt="쎄슬프라이머스 통합 솔루션 비주얼"
        fill
        priority
        className="slow-drift object-cover"
      />
      <div className="hero-mask absolute inset-0" />
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/12 bg-ink/18 backdrop-blur-md">
        <div className="mx-auto flex w-[min(1180px,92vw)] items-center justify-between py-3">
          <a href="#" aria-label="쎄슬프라이머스 홈" className="block">
            <Image
              src="/media/cesel-logo-ci-white-transparent.png"
              alt="쎄슬프라이머스"
              width={203}
              height={50}
              className="h-auto w-40 drop-shadow-[0_2px_16px_rgba(0,0,0,0.28)] md:w-52"
            />
          </a>
          <nav className="hidden items-center gap-8 text-base font-semibold text-white/86 md:flex">
            <a href="#lineup" className="transition hover:text-white">라인업</a>
            <a href="#news" className="transition hover:text-white">소식</a>
            <a href="#contact" className="transition hover:text-white">문의</a>
          </nav>
        </div>
      </header>
      <div className="relative z-10 mx-auto flex min-h-[96svh] w-[min(1180px,92vw)] items-center pb-28 pt-32">
        <div className="max-w-3xl">
          <p className="reveal-up text-lg font-semibold text-mint md:text-xl">쎄슬프라이머스</p>
          <h1 className="reveal-up mt-5 text-5xl font-semibold leading-[1.04] tracking-normal md:text-7xl">
            농식품·콜드체인 통합 솔루션
          </h1>
          <p className="reveal-up-delayed mt-7 max-w-2xl text-2xl font-semibold leading-snug text-white md:text-3xl">
            재배, 기후, 전력, 제어, 콜드체인, 데이터, 사업화 지원을 하나로 연결합니다.
          </p>
          <p className="reveal-up-delayed mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
            알파팜에서 검증된 운영 경험을 기준으로 알파쿨링, 알파에너지, 알파서포트까지 확장하는 기술 기반 포트폴리오입니다.
          </p>
          <div className="reveal-up-delayed mt-10 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-md bg-mint px-6 py-4 text-base font-semibold text-ink transition hover:bg-white" href="#lineup">
              라인업 보기 <ArrowRight className="h-5 w-5" />
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-white/32 px-6 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/10" href={businessInquiryMail}>
              사업개발 문의하기
            </a>
          </div>
          <div className="reveal-up-delayed mt-12 grid max-w-3xl grid-cols-2 gap-x-5 gap-y-3 border-t border-white/18 pt-6 md:grid-cols-4">
            {heroHighlights.map((item) => (
              <p key={item} className="text-base font-semibold leading-snug text-white/78">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PositioningBand() {
  return (
    <section className="border-y border-ink/10 bg-white">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-8 py-14 md:grid-cols-[0.76fr_1.24fr] md:items-center">
        <div>
          <p className="text-base font-semibold text-forest">핵심 포지셔닝</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink md:text-4xl">
            딸기 생산 경험에서 출발해 인프라 솔루션으로 확장합니다.
          </h2>
        </div>
        <p className="text-xl font-semibold leading-relaxed text-ink/78 md:text-3xl">
          단일 설비 판매가 아니라 생산, 운영, 기후제어, 에너지관리, 콜드체인, 현지 사업화 지원까지 이어지는 통합 포트폴리오입니다.
        </p>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="mx-auto w-[min(1180px,92vw)] py-24">
      <div className="max-w-3xl">
        <p className="text-base font-semibold text-forest">적용 영역</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-5xl">
          문제는 하나의 설비가 아니라 운영 전체에서 발생합니다.
        </h2>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-4">
        {problems.map((problem) => (
          <div key={problem.title} className="group border-t border-ink/16 pt-7 transition hover:border-forest">
            <problem.icon className="h-9 w-9 text-forest transition group-hover:-translate-y-1" />
            <h3 className="mt-8 text-2xl font-semibold leading-snug md:text-[1.65rem]">{problem.title}</h3>
            <p className="mt-4 text-base leading-7 text-ink/70 md:text-lg">{problem.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AlphaFarmSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <p className="text-base font-semibold text-forest">알파팜</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink md:text-6xl">
            연중 딸기 사업솔루션을 하나의 운영 패키지로 제공합니다.
          </h2>
          <p className="mt-7 text-lg leading-8 text-ink/70 md:text-xl">
            알파팜은 단순 재배 설비가 아니라 프리미엄 딸기 생산, 매장 운영, 공간 경험, 컨테이너팜 검증을 연결한 사업화 모델입니다. 고객은 재배와 운영, 판매까지 이어지는 구조를 도입하고 쎄슬프라이머스는 구축 이후 운영 지원까지 함께 설계합니다.
          </p>
          <div className="mt-10 grid gap-2 sm:grid-cols-5">
            {alphaFarmFlow.map((step, index) => (
              <div key={step} className="border-t border-forest/22 pt-4">
                <p className="text-sm font-semibold text-forest">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-lg font-semibold leading-snug text-ink">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {alphaFarmModels.map(([name, desc]) => (
              <div key={name} className="rounded-lg border border-ink/10 bg-paper p-5">
                <p className="text-xl font-semibold text-ink">{name}</p>
                <p className="mt-3 text-base leading-7 text-ink/66">{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ink shadow-soft md:aspect-[5/4]">
          <Image
            src="/media/lineup-alphafarm-clean.png"
            alt="알파팜과 기후제어 설비 이미지"
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/86 to-transparent p-7 text-white">
            <p className="text-2xl font-semibold leading-tight">생산 현장과 운영 시스템을 함께 설계하는 모델</p>
            <p className="mt-3 text-base leading-7 text-white/74">
              재배 공간, 품질관리, 리테일 접점, 현지 사업화까지 연결합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="lineup" className="bg-ink py-28 text-white">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <p className="text-base font-semibold text-mint">솔루션 라인업</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            알파팜에서 검증하고 인프라 솔루션으로 확장합니다.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/68">
            알파팜의 운영 경험을 기준으로 기후제어, 에너지관리, 콜드체인, 데이터, 현지 사업화 지원을 단계별로 연결합니다.
          </p>
        </div>

        <div className="border-y border-white/14">
          {portfolio.map((item, index) => (
            <article key={item.name} className="grid gap-6 border-b border-white/12 py-8 last:border-b-0 md:grid-cols-[72px_1fr_180px] md:items-center">
              <p className="text-lg font-semibold text-white/40">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <h3 className="text-3xl font-semibold leading-tight">{item.name}</h3>
                  <p className="text-base font-semibold text-mint">{item.label}</p>
                </div>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.items.map((entry) => (
                    <span key={entry} className="rounded-md border border-white/14 px-3 py-2 text-sm font-semibold text-white/78">
                      {entry}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative h-32 overflow-hidden rounded-md border border-white/12 bg-white/6 md:h-28">
                <Image src={item.image} alt={`${item.name} 이미지`} fill className="object-cover opacity-88 transition duration-500 hover:scale-105" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LineupDepth() {
  return (
    <section className="mx-auto w-[min(1180px,92vw)] space-y-24 py-24">
      <DepthBlock
        eyebrow="알파쿨링"
        title="습도 제어에서 균일한 기후와 품질 리스크 저감으로 이어집니다."
        body="단순 냉방이 아니라 노점, 표면결로, 공급공기 상태까지 함께 관리하는 저온제습 중심 기후제어 제품군입니다."
        icon={<Snowflake className="h-6 w-6" />}
        rows={coolingModels}
        image="/media/sns/lineup-cooling.png"
      />
      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="sticky top-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-energy text-white">
            <CircuitBoard className="h-6 w-6" />
          </div>
          <p className="mt-8 text-base font-semibold text-energy">알파에너지</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            전력관리와 사전냉각 설비를 하나의 에너지 체계로 정리합니다.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/68">
            기존의 단독 에너지관리 표현을 지양하고, 전력·제어·데이터 운영관리와 사전냉각 통합 실외기 기반 에너지 효율화를 하나의 알파에너지 라인업으로 보여줍니다.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {energyModels.map((model) => (
            <article key={model.title} className="rounded-lg border border-ink/10 bg-white p-7 shadow-soft">
              <h3 className="text-2xl font-semibold">{model.title}</h3>
              <p className="mt-4 text-base leading-7 text-ink/66">{model.body}</p>
              <div className="mt-8 space-y-3">
                {model.items.map((item) => (
                  <div key={item} className="flex gap-3 text-base font-medium">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-energy" />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="overflow-hidden rounded-lg bg-forest text-white">
        <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
          <div className="p-8 md:p-12">
            <p className="text-base font-semibold text-mint">알파서포트</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              실증 이후 사업화되는 구조까지 함께 설계합니다.
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {["시장 적합성 검증", "현지 실증 · 생산기반 구축", "저온제습 공조 컨설팅", "현지 사업화 제안", "작업환경 개선", "프리미엄 농식품 리테일"].map((item) => (
                <div key={item} className="border-t border-white/18 pt-4 text-base text-white/84">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <Image src="/media/lineup-support-clean.png" alt="알파서포트 사업개발 이미지" fill className="object-cover" />
          </div>
        </div>
      </section>
    </section>
  );
}

function DepthBlock({
  eyebrow,
  title,
  body,
  icon,
  rows,
  image
}: {
  eyebrow: string;
  title: string;
  body: string;
  icon: ReactNode;
  rows: string[][];
  image?: string;
}) {
  return (
    <section className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
      <div className="sticky top-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-forest text-white">{icon}</div>
        <p className="mt-8 text-base font-semibold text-forest">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
        <p className="mt-5 text-lg leading-8 text-ink/68">{body}</p>
      </div>
      <div className="space-y-5">
        {image ? (
          <Image src={image} alt={`${eyebrow} 참고 이미지`} width={900} height={900} className="aspect-[16/10] w-full rounded-lg object-cover shadow-soft" />
        ) : null}
        <div className="overflow-hidden rounded-lg border border-ink/10 bg-white">
          {rows.map(([name, desc]) => (
            <div key={name} className="grid gap-3 border-b border-ink/8 p-6 last:border-0 md:grid-cols-[230px_1fr]">
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-base leading-7 text-ink/66">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div className="max-w-3xl">
          <p className="text-base font-semibold text-forest">적용 고객군</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            생산 현장부터 리테일, 포장실, 저온물류까지 확장합니다.
          </h2>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div key={audience} className="flex min-h-20 items-center gap-4 border-t border-ink/12 py-5 text-xl font-semibold leading-snug">
              <PackageCheck className="h-6 w-6 shrink-0 text-forest" />
              {audience}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="mx-auto w-[min(1180px,92vw)] py-24">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div>
          <p className="text-base font-semibold text-forest">권리·특허 포트폴리오</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            첨부 자료 기준으로 권리명을 이름만 정리했습니다.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/66">
            상세 번호와 내부 설명은 노출하지 않고, 홈페이지에는 보유 권리의 명칭만 간결하게 표시합니다.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {ipAssetNames.map((name) => (
            <div key={name} className="flex min-h-20 items-start gap-4 rounded-lg border border-ink/10 bg-white p-5">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-forest" />
              <p className="text-lg font-semibold leading-snug text-ink">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MotionSection() {
  return (
    <section id="motion-film" className="bg-ink py-24 text-white">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-base font-semibold text-mint">모션 필름</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            한 화면에서 포트폴리오의 확장 방향을 보여줍니다.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            알파팜에서 출발한 운영 경험이 기후제어, 에너지관리, 콜드체인, 데이터, 사업화 지원으로 확장되는 흐름을 시각적으로 보여줍니다.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg border border-white/12 bg-white/6">
          <video
            className="h-full w-full object-cover"
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
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="mx-auto w-[min(1180px,92vw)] py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-base font-semibold text-forest">소식</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">공식 채널 콘텐츠를 한곳에서 보여줍니다.</h2>
        </div>
        <div className="flex max-w-xl flex-wrap gap-2">
          {socialLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink/12 bg-white px-4 py-3 text-base font-semibold text-ink transition hover:border-forest hover:text-forest"
            >
              {label} <ExternalLink className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <a
            key={`${item.channel}-${item.title}`}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-lg bg-white shadow-soft transition hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <p className="text-base font-semibold text-forest">{item.channel}</p>
              <h3 className="mt-2 text-2xl font-semibold leading-snug">{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="text-base font-semibold text-forest">핵심 질의응답</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-5xl">
            검색과 미팅에서 반복되는 질문에 먼저 답합니다.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/66">
            회사 포지셔닝, 알파팜의 차별점, 알파쿨링과 알파에너지의 역할을 짧고 명확한 문장으로 정리했습니다.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
              <summary className="cursor-pointer list-none text-xl font-semibold leading-snug text-ink marker:hidden">
                <span className="flex items-start justify-between gap-5">
                  {faq.question}
                  <span className="mt-1 text-2xl leading-none text-forest transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-5 text-lg leading-8 text-ink/68">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-white pb-20 pt-28">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="text-base font-semibold text-forest">문의</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            프로젝트 목적에 맞는 조합형 솔루션을 검토하세요.
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink/68">
            식품공장, 포장실, 저온물류, 해외 실증, 프리미엄 딸기 사업화 등 프로젝트 목적에 따라 담당자가 검토합니다.
          </p>
          <a className="mt-9 inline-flex items-center gap-2 rounded-md bg-forest px-6 py-4 text-base font-semibold text-white transition hover:bg-ink" href={businessInquiryMail}>
            사업개발 문의하기 <ArrowRight className="h-5 w-5" />
          </a>
          <div className="mt-10 rounded-lg bg-paper p-6">
            {contactItems.map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-4 border-b border-ink/10 py-4 text-lg last:border-0">
                <Icon className="h-6 w-6 shrink-0 text-forest" />
                <span className="font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {contacts.map((contact) => (
            <article key={contact.email} className={`rounded-lg border p-7 shadow-soft ${contact.primary ? "border-forest bg-paper" : "border-ink/10 bg-white"}`}>
              <p className="text-base font-semibold text-forest">{contact.company}</p>
              <h3 className="mt-5 text-3xl font-semibold text-ink">{contact.name}</h3>
              <p className="mt-2 text-xl font-semibold text-ink/70">{contact.role}</p>
              <div className="mt-8 space-y-3">
                {contact.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="grid gap-1 rounded-md bg-white px-4 py-4 text-base font-semibold text-ink transition hover:text-forest">
                    <span className="flex items-center gap-3 text-ink/62">
                    <Phone className="h-5 w-5 shrink-0 text-forest" />
                      {phone.label}
                    </span>
                    <span className="text-xl leading-snug">{phone.value}</span>
                  </a>
                ))}
                <a href={`mailto:${contact.email}`} className="grid gap-1 rounded-md bg-forest px-4 py-4 text-base font-semibold text-white transition hover:bg-ink">
                  <span className="flex items-center gap-3 text-white/74">
                  <Mail className="h-5 w-5" />
                    이메일
                  </span>
                  <span className="break-all text-lg leading-snug">{contact.email}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 border-b border-white/10 py-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-3xl font-semibold leading-tight">{companyLegal.displayName}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
            농식품·콜드체인 인프라를 위한 통합 솔루션 포트폴리오 기업입니다. 알파팜, 알파쿨링, 알파에너지, 알파서포트를 연결해 생산부터 사업화 지원까지 확장합니다.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-[0.8fr_1.2fr] sm:items-start">
          <a href={businessInquiryMail} className="inline-flex w-fit items-center gap-2 rounded-md border border-mint/40 px-5 py-4 text-base font-semibold text-mint transition hover:border-white hover:text-white">
            사업개발 문의하기 <ArrowRight className="h-4 w-4" />
          </a>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-md border border-white/14 px-3 py-2 text-sm text-white/72 transition hover:border-mint hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto w-[min(1180px,92vw)] py-10">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <div>
            <p className="text-base font-semibold text-white">사업자 정보</p>
            <p className="mt-2 text-sm leading-6 text-white/48">
              사업자등록증 기준 공개 정보
            </p>
          </div>
          <dl className="grid gap-x-8 gap-y-5 text-sm leading-6 text-white/66 md:grid-cols-2">
            {businessInfoRows.map(([label, value]) => (
              <div key={label} className={label === "사업장 소재지" || label === "종목" ? "md:col-span-2" : ""}>
                <dt className="font-semibold text-white/88">{label}</dt>
                <dd className="mt-1 break-keep">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>저작권 2026 쎄슬프라이머스. 모든 권리 보유.</p>
          <p>공식 문의: {companyLegal.inquiryEmail}</p>
        </div>
      </div>
    </footer>
  );
}
