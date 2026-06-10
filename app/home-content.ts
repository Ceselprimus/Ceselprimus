export type Locale = "ko" | "en";

export interface LineupItem {
  name: string;
  anchor: string;
  englishName: string;
  label: string;
  dot: string;
  image: string;
  summary: string;
  items: string[];
}

export interface HomeContent {
  locale: Locale;
  pageUrl: string;
  inquirySubject: string;
  nav: {
    items: { href: string; label: string }[];
    inquiry: string;
    langSwitch: { href: string; label: string };
    mobileContact: string;
    menuOpen: string;
    menuClose: string;
    homeAria: string;
  };
  hero: {
    eyebrow: string;
    titleLines: string[];
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
    stats: { value: string; label: string }[];
  };
  positioning: {
    eyebrow: string;
    statementPre: string;
    statementHighlight: string;
    statementPost: string;
    body: string;
  };
  problems: {
    eyebrow: string;
    titleLines: string[];
    items: { title: string; body: string }[];
  };
  lineup: {
    eyebrow: string;
    titleLines: string[];
    aside: string;
    detailLabel: string;
    items: LineupItem[];
  };
  alphafarm: {
    eyebrow: string;
    titleLines: string[];
    bodyPre: string;
    bodyStrong: string;
    bodyPost: string;
    flow: string[];
    models: [string, string][];
    imageAlt: string;
    captionTitle: string;
    captionBody: string;
  };
  cooling: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    flow: string[];
    models: [string, string][];
    imageAlt: string;
  };
  ems: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    capabilities: { title: string; body: string }[];
    models: { title: string; body: string; items: string[] }[];
  };
  energy: {
    badge: string;
    titleLines: string[];
    body: string;
    preview: [string, string][];
  };
  support: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    items: string[];
    imageAlt: string;
  };
  audience: {
    eyebrow: string;
    titleLines: string[];
    items: string[];
  };
  ip: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    names: string[];
    note?: string;
  };
  motion: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    videoFallback: string;
  };
  news: {
    eyebrow: string;
    titleLines: string[];
    socialLinks: [string, string][];
    cards: { title: string; channel: string; image: string; href: string }[];
  };
  faq: {
    label: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    cta: string;
    categories: { label: string; desc: string }[];
    contacts: {
      name: string;
      role: string;
      tag: string;
      primary: boolean;
      phones: { label: string; value: string; href: string }[];
      email: string;
      emailLabel: string;
    }[];
  };
  footer: {
    brandDesc: string;
    inquiry: string;
    navLinks: { href: string; label: string }[];
    bizTitle: string;
    bizSub: string;
    bizRows: [string, string][];
    copyright: string;
    officialInquiry: string;
  };
  seo: {
    orgDescription: string;
    webPageName: string;
    lineupListName: string;
    videoName: string;
    videoDescription: string;
    breadcrumbHome: string;
  };
}

const socialHrefs = {
  blog: "https://blog.naver.com/cesel_primus",
  facebook: "https://www.facebook.com/profile.php?id=61590596724306",
  linkedin: "https://www.linkedin.com/company/ceselprimus-agtech/?viewAsMember=true",
  instagram: "https://www.instagram.com/cesel.primus/"
};

export const companyLegal = {
  name: "주식회사 쎄슬프라이머스 농업회사법인",
  nameEn: "CESeL Primus Co., Ltd. (Agricultural corporation)",
  displayName: "쎄슬프라이머스",
  displayNameEn: "CESeL Primus",
  representative: "이관호",
  representativeEn: "Kwanho Lee (Kevin Lee)",
  businessNumber: "791-81-00425",
  address: "서울특별시 서초구 양재대로2길 18, 4층 H6호 (우면동, 호반파크 2관)",
  addressEn: "4F H6, 18 Yangjae-daero 2-gil, Seocho-gu, Seoul, Republic of Korea",
  startDate: "2016-09-01",
  inquiryPhone: "010-3341-6036",
  inquiryEmail: "rkdghtn636@gmail.com",
  representativeEmail: "kevinlee@ceslprimus.com"
};

export const koContent: HomeContent = {
  locale: "ko",
  pageUrl: "https://www.ceslprimus.com",
  inquirySubject: "쎄슬프라이머스 사업개발 문의",
  nav: {
    items: [
      { href: "#lineup", label: "라인업" },
      { href: "#alphafarm", label: "알파팜" },
      { href: "#news", label: "소식" },
      { href: "#contact", label: "연락처" }
    ],
    inquiry: "사업개발 문의",
    langSwitch: { href: "/en", label: "EN" },
    mobileContact: "강호수 프로 010-3341-6036 · 이관호 대표 +82 10-3761-7953",
    menuOpen: "메뉴 열기",
    menuClose: "메뉴 닫기",
    homeAria: "쎄슬프라이머스 홈"
  },
  hero: {
    eyebrow: "농식품 · 콜드체인 인프라 기술기업",
    titleLines: ["수직농장에서 콜드체인까지,", "식품 인프라를 플랫폼으로."],
    sub: "쎄슬프라이머스는 프리미엄 딸기 수직농장에서 출발해 냉방·제습, 에너지·운영 관리, 콜드체인, 사업화 지원까지 — 식품 생산과 저장의 전 과정을 하나의 솔루션으로 연결합니다.",
    ctaPrimary: "솔루션 라인업 보기",
    ctaSecondary: "사업개발 문의",
    imageAlt: "쎄슬프라이머스 수직농장과 콜드체인 통합 솔루션 비주얼",
    stats: [
      { value: "2016", label: "법인 설립" },
      { value: "4", label: "솔루션 라인업" },
      { value: "10건", label: "특허 · 상표 · 저작권" },
      { value: "2개국", label: "한국 · 말레이시아 거점" }
    ]
  },
  positioning: {
    eyebrow: "핵심 포지셔닝",
    statementPre: "단순한 설비 공급을 넘어, 식품 생산·저장 인프라를",
    statementHighlight: " 하나의 통합 플랫폼",
    statementPost: "으로 만듭니다.",
    body: "딸기 수직농장에서 검증한 운영 경험을 기반으로 기후제어, 에너지·운영 관리, 콜드체인, 사업화 지원으로 확장합니다. 생산 · 저장 · 공조 · 에너지 · 운영 데이터가 결합된 기술 기업, 쎄슬프라이머스입니다."
  },
  problems: {
    eyebrow: "적용 영역",
    titleLines: ["현장의 문제는 설비 하나가 아니라", "운영 전체에서 발생합니다."],
    items: [
      { title: "프리미엄 농식품 생산", body: "품질과 공급 안정성을 동시에 요구하는 연중 생산 기반" },
      { title: "고온다습 환경", body: "습도, 결로, 공급공기 상태가 품질 리스크로 이어지는 공간" },
      { title: "고소비 전력 설비", body: "냉각, 제습, 냉동·냉장 설비의 피크부하와 운전 안정성" },
      { title: "현지 사업화 실행", body: "실증, 구축, 운영, 제안까지 연결되어야 하는 해외 확장" }
    ]
  },
  lineup: {
    eyebrow: "솔루션 라인업",
    titleLines: ["알파팜에서 검증하고,", "네 개의 라인업으로 확장합니다."],
    aside: "생산, 기후, 에너지, 운영 — 각 라인업은 따로 도입할 수도, 하나의 프로젝트로 묶을 수도 있습니다.",
    detailLabel: "자세히 보기",
    items: [
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
    ]
  },
  alphafarm: {
    eyebrow: "알파팜 — 라인업 01",
    titleLines: ["투자는 한 번,", "딸기 사업은 연중 내내 돌아갑니다."],
    bodyPre: "알파팜은 설비가 아니라 ",
    bodyStrong: "연중 딸기 사업솔루션",
    bodyPost:
      "을 제공합니다. 고객이 초기 투자를 결정하면 재배, 운영, 판매까지 쎄슬프라이머스가 패키지로 책임집니다. 계약은 1년 기본, 이후 1년 단위로 연장하며 — 머리 아픈 일은 시스템과 운영팀이 대신합니다.",
    flow: ["생산 기반", "운영 관리", "판매 연결", "공간 경험", "사업화 지원"],
    models: [
      ["알파팜 코어", "대형 프리미엄 딸기 생산기지"],
      ["알파카페", "생산과 프리미엄 리테일을 연결하는 매장형 모델"],
      ["경험형 포트폴리오", "호텔, 쇼룸, 베이커리 공간을 딸기 브랜드 경험으로 전환"],
      ["알파 컨테이너팜", "40피트 하이큐브 기반의 소형 생산 · 검증형 모델"]
    ],
    imageAlt: "알파팜 프리미엄 딸기 수직농장",
    captionTitle: "생산 현장과 운영 시스템을 함께 설계합니다",
    captionBody: "재배 공간, 품질관리, 리테일 접점, 현지 사업화까지 하나의 흐름으로."
  },
  cooling: {
    eyebrow: "알파쿨링 — 라인업 02",
    titleLines: ["습도를 제어하면, 기후가 균일해지고", "품질 리스크가 줄어듭니다."],
    body: "단순 냉방이 아닙니다. 노점, 표면결로, 공급공기 상태까지 함께 관리하는 저온제습 중심의 공조 솔루션으로, 수직농장부터 식품 포장실, 저온저장시설, 콜드체인 시설까지 적용합니다.",
    flow: ["정밀 습도 제어", "균일한 기후", "품질 리스크 저감", "에너지 절감"],
    models: [
      ["알파쿨링 팜", "수직농장과 재배실의 습도, 노점, 공급공기 상태를 통합 관리해 균일한 재배 기후를 만듭니다."],
      ["알파쿨링 식품 · 포장실", "식품공정과 포장실의 결로, 곰팡이, 작업환경 리스크를 저온제습으로 줄입니다."],
      ["콜드체인 컨테이너", "철도기술연구원 기술이전 기반, 에너지저장장치를 연계한 저온물류 컨테이너입니다."]
    ],
    imageAlt: "알파쿨링 저온제습 공조 설비가 적용된 식품 작업장"
  },
  ems: {
    eyebrow: "알파이엠스 — 라인업 03",
    titleLines: ["설비 운전과 전력 사용을", "한 화면에서 관리합니다."],
    body: "알파이엠스는 에너지·운영 관리 플랫폼입니다. 냉동기와 공조기, 재배 설비의 운전상태와 전력 사용량을 통합 모니터링하고, 피크부하와 에너지 효율을 데이터로 관리합니다.",
    capabilities: [
      { title: "설비 모니터링", body: "냉동기, 공조기, 재배 설비의 운전상태를 한 화면에서 확인" },
      { title: "에너지 절감", body: "전력 사용량을 분석해 낭비 구간과 절감 포인트를 도출" },
      { title: "피크부하 관리", body: "수요 집중 시간대의 부하를 분산해 전력 비용과 리스크 관리" },
      { title: "냉동 · 냉장 설비 관리", body: "온도 이탈, 이상 운전을 조기에 감지해 제품 손실 예방" }
    ],
    models: [
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
    ]
  },
  energy: {
    badge: "개발 검토 중인 신규 라인업",
    titleLines: ["알파에너지 — 버려지는 에너지를", "다시 쓰는 기술을 준비합니다."],
    body: "폐열 회수와 냉열 저장으로 에너지 활용도를 높이는 방향으로 개발을 검토하고 있습니다. 전력·운영 관리는 알파이엠스가 담당합니다.",
    preview: [
      ["알파에너지 폐열 회수", "냉동 설비의 폐열을 회수해 재열, 세척수, 건조 공정에 다시 활용하는 모듈"],
      ["알파에너지 냉열 저장", "냉수와 브라인의 냉열을 저장해 피크 냉방과 부하 완충에 활용하는 모듈"]
    ]
  },
  support: {
    eyebrow: "알파서포트 — 라인업 04",
    titleLines: ["도입 이후가 진짜 시작입니다.", "운영과 사업화까지 함께 갑니다."],
    body: "재배 운영교육과 시설 운영 프로토콜, 데이터 기반 운영관리부터 시장 적합성 검증, 현지 실증, 해외 사업화 제안까지 — 솔루션이 실제 사업이 되도록 지원합니다.",
    items: [
      "재배 운영교육",
      "시설 운영 프로토콜",
      "데이터 기반 운영관리",
      "시장 적합성 검증",
      "현지 실증 · 구축 지원",
      "해외 사업화 제안"
    ],
    imageAlt: "알파서포트 사업개발 파트너십"
  },
  audience: {
    eyebrow: "적용 고객군",
    titleLines: ["생산 현장부터 리테일, 저온물류까지", "함께하고 있습니다."],
    items: [
      "수직농장 · 시설원예",
      "식품공장 · 포장실",
      "저온창고 · 콜드체인 시설",
      "베이커리 · 호텔 · 프리미엄 리테일",
      "연구기관 · 교육시설",
      "아세안 해외 사업화 파트너"
    ]
  },
  ip: {
    eyebrow: "권리 · 특허 포트폴리오",
    titleLines: ["10건의 등록 권리가", "기술의 깊이를 증명합니다."],
    body: "스마트팜 자동화, 생육 분석, 수직재배, 컨테이너, 데이터 분석까지 — 특허·상표·저작권 포트폴리오가 솔루션의 기반입니다.",
    names: [
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
    ]
  },
  motion: {
    eyebrow: "브랜드 모션 필름",
    titleLines: ["하나의 흐름으로 이어지는", "쎄슬프라이머스의 확장"],
    body: "수직농장에서 출발한 운영 경험이 기후제어, 에너지·운영 관리, 콜드체인, 사업화 지원으로 확장되는 방향을 담았습니다.",
    videoFallback: "쎄슬프라이머스 포트폴리오 모션 필름"
  },
  news: {
    eyebrow: "소식",
    titleLines: ["공식 채널의 최신 소식을", "한곳에서 만나보세요."],
    socialLinks: [
      ["네이버 블로그", socialHrefs.blog],
      ["페이스북", socialHrefs.facebook],
      ["링크드인", socialHrefs.linkedin],
      ["인스타그램", socialHrefs.instagram]
    ],
    cards: [
      { title: "알파 솔루션 포트폴리오", channel: "네이버 블로그", image: "/media/alpha-solution-portfolio-0610.png", href: socialHrefs.blog },
      { title: "식품공장 저온제습 솔루션", channel: "페이스북", image: "/media/sns/sns-facebook-cooling.png", href: socialHrefs.facebook },
      { title: "고온다습 환경 제어", channel: "링크드인", image: "/media/sns/sns-linkedin-cooling.png", href: socialHrefs.linkedin },
      { title: "저온제습이 필요한 이유", channel: "네이버 블로그", image: "/media/sns/sns-blog-dehumidification.png", href: socialHrefs.blog },
      { title: "식품공장 결로 문제", channel: "네이버 블로그", image: "/media/sns/sns-blog-condensation.png", href: socialHrefs.blog },
      { title: "국내 사업개발 파트너 모집", channel: "인스타그램", image: "/media/sns/lineup-support.png", href: socialHrefs.instagram }
    ]
  },
  faq: {
    label: "자주 묻는 질문",
    title: "궁금한 점에 먼저 답합니다.",
    items: [
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
    ]
  },
  contact: {
    eyebrow: "연락처",
    titleLines: ["프로젝트 목적을 알려주시면,", "맞는 조합을 설계해 드립니다."],
    body: "수직농장, 식품공장, 저온물류, 해외 실증, 프리미엄 딸기 사업화 — 어떤 단계든 사업개발 담당자가 직접 검토하고 회신드립니다.",
    cta: "사업개발 문의하기",
    categories: [
      { label: "프로젝트 문의", desc: "수직농장, 식품공장, 포장실 구축 · 개선 프로젝트" },
      { label: "파트너십 문의", desc: "국내 사업개발 파트너, 기술 협력, 공동 사업" },
      { label: "해외 실증 문의", desc: "아세안 등 해외 실증, 구축, 현지 사업화" },
      { label: "냉동 · 냉장 설비 문의", desc: "저온창고, 콜드체인 시설의 제습 · 에너지 운영" }
    ],
    contacts: [
      {
        name: "강호수",
        role: "프로 · 사업개발",
        tag: "사업개발 총괄 문의",
        primary: true,
        phones: [{ label: "휴대전화", value: "010-3341-6036", href: "tel:01033416036" }],
        email: "rkdghtn636@gmail.com",
        emailLabel: "이메일"
      },
      {
        name: "이관호",
        role: "대표",
        tag: "경영 · 해외 사업",
        primary: false,
        phones: [
          { label: "국내", value: "+82 10-3761-7953", href: "tel:+821037617953" },
          { label: "말레이시아", value: "+60 17-551-8024", href: "tel:+60175518024" }
        ],
        email: "kevinlee@ceslprimus.com",
        emailLabel: "이메일"
      }
    ]
  },
  footer: {
    brandDesc:
      "수직농장에서 콜드체인까지, 식품 인프라를 플랫폼으로 전환합니다. 알파팜, 알파쿨링, 알파이엠스, 알파서포트를 연결해 생산부터 사업화 지원까지 확장합니다.",
    inquiry: "사업개발 문의하기",
    navLinks: [
      { href: "#lineup", label: "라인업" },
      { href: "#alphafarm", label: "알파팜" },
      { href: "#ip", label: "권리·특허" },
      { href: "#news", label: "소식" },
      { href: "#contact", label: "연락처" }
    ],
    bizTitle: "사업자 정보",
    bizSub: "사업자등록증 기준 공개 정보",
    bizRows: [
      ["상호", companyLegal.name],
      ["대표자", companyLegal.representative],
      ["사업자등록번호", companyLegal.businessNumber],
      ["사업장 소재지", companyLegal.address],
      ["업태", "농업, 임업 및 어업"],
      ["종목", "종자 및 묘목 생산업 / 채소, 화훼 및 과실작물 시설재배업"],
      ["사업개발 문의", companyLegal.inquiryPhone],
      ["이메일", companyLegal.inquiryEmail]
    ],
    copyright: "저작권 2026 쎄슬프라이머스. 모든 권리 보유.",
    officialInquiry: "공식 문의"
  },
  seo: {
    orgDescription:
      "프리미엄 딸기 수직농장에서 출발해 냉방·제습, 에너지·운영 관리, 콜드체인, 사업화 지원으로 확장하는 농식품·콜드체인 인프라 기술기업입니다.",
    webPageName: "쎄슬프라이머스 | 수직농장에서 콜드체인까지, 식품 인프라 통합 솔루션",
    lineupListName: "쎄슬프라이머스 솔루션 라인업",
    videoName: "쎄슬프라이머스 포트폴리오 모션 필름",
    videoDescription:
      "프리미엄 딸기 수직농장에서 출발한 운영 경험이 기후제어, 에너지·운영 관리, 콜드체인, 사업화 지원으로 확장되는 흐름을 보여주는 브랜드 모션 필름입니다.",
    breadcrumbHome: "홈"
  }
};

export const enContent: HomeContent = {
  locale: "en",
  pageUrl: "https://www.ceslprimus.com/en",
  inquirySubject: "CESeL Primus Business Development Inquiry",
  nav: {
    items: [
      { href: "#lineup", label: "Lineup" },
      { href: "#alphafarm", label: "AlphaFarm" },
      { href: "#news", label: "News" },
      { href: "#contact", label: "Contact" }
    ],
    inquiry: "Contact us",
    langSwitch: { href: "/", label: "한국어" },
    mobileContact: "HoSoo Kang +82 10-3341-6036 · Kevin Lee +82 10-3761-7953",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    homeAria: "CESeL Primus home"
  },
  hero: {
    eyebrow: "Agri-food & cold-chain infrastructure technology",
    titleLines: ["From vertical farms to cold chain,", "food infrastructure as one platform."],
    sub: "Starting from premium strawberry vertical farming, CESeL Primus connects cooling & dehumidification, energy & operations management, cold chain, and business development support — the entire journey of food production and storage, as one solution.",
    ctaPrimary: "Explore the lineup",
    ctaSecondary: "Business inquiries",
    imageAlt: "CESeL Primus integrated vertical farm and cold-chain solution visual",
    stats: [
      { value: "2016", label: "Founded" },
      { value: "4", label: "Solution lineups" },
      { value: "10", label: "Registered IP rights" },
      { value: "2", label: "Countries — Korea · Malaysia" }
    ]
  },
  positioning: {
    eyebrow: "Positioning",
    statementPre: "Beyond equipment supply — we turn food production and storage infrastructure into",
    statementHighlight: " one integrated platform",
    statementPost: ".",
    body: "Building on operating experience proven in strawberry vertical farms, we expand into climate control, energy & operations management, cold chain, and business development support. CESeL Primus is a technology company where production, storage, HVAC, energy, and operations data come together."
  },
  problems: {
    eyebrow: "Where we apply",
    titleLines: ["Real problems come from operations", "as a whole — not a single machine."],
    items: [
      { title: "Premium agri-food production", body: "Year-round production that demands both quality and supply stability" },
      { title: "Hot & humid environments", body: "Spaces where humidity, condensation, and supply-air conditions become quality risks" },
      { title: "Power-intensive equipment", body: "Peak load and operational stability of cooling, dehumidification, and refrigeration equipment" },
      { title: "Local business execution", body: "Overseas expansion that must connect pilots, deployment, operations, and proposals" }
    ]
  },
  lineup: {
    eyebrow: "Solution lineup",
    titleLines: ["Proven at AlphaFarm,", "extended across four lineups."],
    aside: "Production, climate, energy, operations — adopt each lineup on its own, or combine them into a single project.",
    detailLabel: "Learn more",
    items: [
      {
        name: "AlphaFarm",
        anchor: "#alphafarm",
        englishName: "AlphaFarm",
        label: "Premium strawberry vertical farm system",
        dot: "bg-forest",
        image: "/media/lineup-alphafarm-clean.png",
        summary:
          "A year-round strawberry business solution delivered as a package — cultivation, operations, and sales. From vertical farms to container farms and in-store models.",
        items: ["Strawberry vertical farm", "Alpha Container Farm", "AlphaCafe", "In-space models"]
      },
      {
        name: "AlphaCooling",
        anchor: "#alphacooling",
        englishName: "AlphaCooling",
        label: "Cooling · Dehumidification · HVAC",
        dot: "bg-ice",
        image: "/media/sns/lineup-cooling.png",
        summary:
          "Precise humidity control creates a uniform climate and reduces condensation and quality risks — from vertical farms to cold-chain facilities.",
        items: ["Grow rooms", "Food packing rooms", "Cold storage", "Cold-chain facilities"]
      },
      {
        name: "AlphaEMS",
        anchor: "#alphaems",
        englishName: "AlphaEMS",
        label: "Energy & operations management platform",
        dot: "bg-energy",
        image: "/media/lineup-alphaenergy-clean.png",
        summary:
          "Integrated monitoring of equipment operation and power consumption — managing peak load and energy efficiency with data.",
        items: ["Equipment monitoring", "Power analytics", "Peak-load management", "Refrigeration management"]
      },
      {
        name: "AlphaSupport",
        anchor: "#alphasupport",
        englishName: "AlphaSupport",
        label: "Operations · Training · Business development",
        dot: "bg-amber",
        image: "/media/lineup-support-clean.png",
        summary:
          "From cultivation training, operating protocols, and data-driven management to pilots, deployment, and overseas business development.",
        items: ["Cultivation training", "Operating protocols", "Data-driven management", "Pilots · Overseas business"]
      }
    ]
  },
  alphafarm: {
    eyebrow: "AlphaFarm — Lineup 01",
    titleLines: ["One investment —", "a strawberry business that runs all year."],
    bodyPre: "AlphaFarm delivers not equipment but a ",
    bodyStrong: "year-round strawberry business solution",
    bodyPost:
      ". Once a client decides to invest, CESeL Primus takes responsibility for cultivation, operations, and sales as one package. Contracts start at one year and renew annually — the hard work is handled by the system and the operations team.",
    flow: ["Production base", "Operations", "Sales channels", "Space experience", "Business development"],
    models: [
      ["AlphaFarm Core", "A large-scale premium strawberry production base"],
      ["AlphaCafe", "An in-store model connecting production with premium retail"],
      ["Experience Portfolio", "Turns hotels, showrooms, and bakeries into strawberry brand experiences"],
      ["Alpha Container Farm", "A compact production and validation model in a 40-ft high-cube container"]
    ],
    imageAlt: "AlphaFarm premium strawberry vertical farm",
    captionTitle: "We design the production site and the operating system together",
    captionBody: "Growing space, quality control, retail touchpoints, and local business development — in one flow."
  },
  cooling: {
    eyebrow: "AlphaCooling — Lineup 02",
    titleLines: ["Control the humidity — the climate", "evens out and quality risk drops."],
    body: "This is not simple air conditioning. A dehumidification-centered HVAC solution that also manages dew point, surface condensation, and supply-air condition — applied from vertical farms to food packing rooms, cold storage, and cold-chain facilities.",
    flow: ["Precise humidity control", "Uniform climate", "Lower quality risk", "Energy savings"],
    models: [
      ["AlphaCooling Farm", "Manages humidity, dew point, and supply air in vertical farms and grow rooms for a uniform growing climate."],
      ["AlphaCooling Food & Packing", "Reduces condensation, mold, and workplace risks in food processes and packing rooms with low-temperature dehumidification."],
      ["Cold-chain Container", "A cold-chain container with energy storage, based on technology transferred from the Korea Railroad Research Institute."]
    ],
    imageAlt: "Food workspace with AlphaCooling low-temperature dehumidification HVAC"
  },
  ems: {
    eyebrow: "AlphaEMS — Lineup 03",
    titleLines: ["Equipment operation and power,", "managed on one screen."],
    body: "AlphaEMS is an energy and operations management platform. It monitors the operating status and power consumption of refrigeration, HVAC, and cultivation equipment — managing peak load and energy efficiency with data.",
    capabilities: [
      { title: "Equipment monitoring", body: "See refrigeration, HVAC, and cultivation equipment status on one screen" },
      { title: "Energy savings", body: "Analyze power consumption to find waste and savings opportunities" },
      { title: "Peak-load management", body: "Distribute load during peak hours to manage power cost and risk" },
      { title: "Refrigeration management", body: "Detect temperature deviation and abnormal operation early to prevent product loss" }
    ],
    models: [
      {
        title: "AlphaEMS Farm",
        body: "Integrates growing-environment data with equipment data to run vertical farm operations on data.",
        items: ["Growing environment monitoring", "Equipment data integration", "Operations reports"]
      },
      {
        title: "AlphaEMS Cold Chain",
        body: "Integrated monitoring of temperature, power, and alarms across refrigeration equipment and cold spaces for stable operations.",
        items: ["Temperature & alarm control", "Power analytics", "Peak-load response"]
      }
    ]
  },
  energy: {
    badge: "New lineup under development review",
    titleLines: ["AlphaEnergy — preparing technology", "to reuse wasted energy."],
    body: "We are reviewing development of heat recovery and cold thermal storage to raise energy utilization. Power and operations management remain the role of AlphaEMS.",
    preview: [
      ["AlphaEnergy Heat Recovery", "A module that recovers waste heat from refrigeration equipment for reheating, washing water, and drying processes"],
      ["AlphaEnergy Cold Thermal Storage", "A module that stores cold energy from chilled water and brine for peak cooling and load buffering"]
    ]
  },
  support: {
    eyebrow: "AlphaSupport — Lineup 04",
    titleLines: ["Deployment is just the beginning.", "We stay through operations and growth."],
    body: "From cultivation training, facility operating protocols, and data-driven management to market-fit validation, local pilots, and overseas business development — we make solutions become real businesses.",
    items: [
      "Cultivation training",
      "Facility operating protocols",
      "Data-driven operations",
      "Market-fit validation",
      "Local pilots & deployment",
      "Overseas business development"
    ],
    imageAlt: "AlphaSupport business development partnership"
  },
  audience: {
    eyebrow: "Who we serve",
    titleLines: ["From production sites to retail", "and cold logistics."],
    items: [
      "Vertical farms · Controlled-environment agriculture",
      "Food factories · Packing rooms",
      "Cold storage · Cold-chain facilities",
      "Bakeries · Hotels · Premium retail",
      "Research & education institutions",
      "ASEAN business development partners"
    ]
  },
  ip: {
    eyebrow: "IP portfolio",
    titleLines: ["Ten registered rights prove", "the depth of our technology."],
    body: "Smart farm automation, growth analytics, vertical cultivation, containers, and data analysis — a portfolio of patents, trademarks, and copyrights underpins our solutions.",
    names: [
      "Smart farm automation system using robots",
      "Smart farm system with load protection and failure prevention",
      "Plant growth monitoring and control system and method",
      "Smart edge device-based growth analysis method, apparatus, and system",
      "Vertical hydroponic cultivation system",
      "Drip irrigation, high-density cultivation frame, and LED system for high-density vertical farming",
      "Container and manufacturing method thereof",
      "Data analysis method and apparatus for improving crop productivity",
      "CESeL AlphaFarm (trademark)",
      "Deep learning-based strawberry growth analysis software using leaf color channels"
    ],
    note: "Registered in the Republic of Korea. Titles are translated from the official Korean registrations."
  },
  motion: {
    eyebrow: "Brand motion film",
    titleLines: ["One continuous flow —", "how CESeL Primus expands"],
    body: "From vertical farming origins to climate control, energy & operations management, cold chain, and business development support.",
    videoFallback: "CESeL Primus portfolio motion film"
  },
  news: {
    eyebrow: "News",
    titleLines: ["The latest from", "our official channels."],
    socialLinks: [
      ["Naver Blog", socialHrefs.blog],
      ["Facebook", socialHrefs.facebook],
      ["LinkedIn", socialHrefs.linkedin],
      ["Instagram", socialHrefs.instagram]
    ],
    cards: [
      { title: "Alpha Solution Portfolio", channel: "Naver Blog", image: "/media/alpha-solution-portfolio-0610.png", href: socialHrefs.blog },
      { title: "Low-temp dehumidification for food factories", channel: "Facebook", image: "/media/sns/sns-facebook-cooling.png", href: socialHrefs.facebook },
      { title: "Controlling hot and humid environments", channel: "LinkedIn", image: "/media/sns/sns-linkedin-cooling.png", href: socialHrefs.linkedin },
      { title: "Why low-temperature dehumidification matters", channel: "Naver Blog", image: "/media/sns/sns-blog-dehumidification.png", href: socialHrefs.blog },
      { title: "Condensation problems in food factories", channel: "Naver Blog", image: "/media/sns/sns-blog-condensation.png", href: socialHrefs.blog },
      { title: "Business development partners — Korea", channel: "Instagram", image: "/media/sns/lineup-support.png", href: socialHrefs.instagram }
    ]
  },
  faq: {
    label: "FAQ",
    title: "Answers, before you ask.",
    items: [
      {
        question: "What kind of company is CESeL Primus?",
        answer:
          "CESeL Primus is a technology company that started from premium strawberry vertical farming and expands into cooling & dehumidification, energy & operations management, cold chain, and business development support. Our goal is to turn food production and storage infrastructure into one integrated platform."
      },
      {
        question: "What is the year-round strawberry business solution?",
        answer:
          "It is the business model AlphaFarm delivers. Once a client decides to invest, CESeL Primus takes responsibility for cultivation, operations, and sales as one package — creating a strawberry business that runs all year, regardless of season. Contracts start at one year and renew annually."
      },
      {
        question: "What problems does AlphaCooling solve?",
        answer:
          "It addresses hot and humid environments, condensation, and supply-air quality issues in vertical farms, food packing rooms, cold storage, and cold-chain facilities with a dehumidification-centered HVAC solution."
      },
      {
        question: "What is AlphaEMS?",
        answer:
          "An energy and operations management platform that monitors equipment operating status and power consumption, managing peak load and energy efficiency. It comes in Farm and Cold Chain editions."
      },
      {
        question: "Is AlphaEnergy available now?",
        answer:
          "AlphaEnergy is a new lineup under development review, aimed at raising energy utilization through heat recovery and cold thermal storage. Contact us and we will guide you according to the current stage."
      },
      {
        question: "What can I inquire about?",
        answer:
          "Project inquiries, partnership inquiries, overseas pilot inquiries, and refrigeration equipment inquiries. Our business development team reviews each project and replies directly."
      }
    ]
  },
  contact: {
    eyebrow: "Contact",
    titleLines: ["Tell us your project goal —", "we will design the right combination."],
    body: "Vertical farms, food factories, cold logistics, overseas pilots, premium strawberry business — at any stage, our business development team reviews and replies directly.",
    cta: "Contact business development",
    categories: [
      { label: "Project inquiries", desc: "Building or upgrading vertical farms, food factories, and packing rooms" },
      { label: "Partnership inquiries", desc: "Business development partners in Korea, technology collaboration, joint business" },
      { label: "Overseas pilot inquiries", desc: "Pilots, deployment, and local business development in ASEAN and beyond" },
      { label: "Refrigeration inquiries", desc: "Dehumidification and energy operations for cold storage and cold-chain facilities" }
    ],
    contacts: [
      {
        name: "HoSoo Kang",
        role: "Pro · Business Development",
        tag: "Business development — primary",
        primary: true,
        phones: [{ label: "Mobile", value: "+82 10-3341-6036", href: "tel:+821033416036" }],
        email: "rkdghtn636@gmail.com",
        emailLabel: "Email"
      },
      {
        name: "Kevin Lee",
        role: "CEO",
        tag: "Management · Global business",
        primary: false,
        phones: [
          { label: "Korea", value: "+82 10-3761-7953", href: "tel:+821037617953" },
          { label: "Malaysia", value: "+60 17-551-8024", href: "tel:+60175518024" }
        ],
        email: "kevinlee@ceslprimus.com",
        emailLabel: "Email"
      }
    ]
  },
  footer: {
    brandDesc:
      "From vertical farms to cold chain — we turn food infrastructure into a platform. AlphaFarm, AlphaCooling, AlphaEMS, and AlphaSupport connect production to business development.",
    inquiry: "Contact business development",
    navLinks: [
      { href: "#lineup", label: "Lineup" },
      { href: "#alphafarm", label: "AlphaFarm" },
      { href: "#ip", label: "IP portfolio" },
      { href: "#news", label: "News" },
      { href: "#contact", label: "Contact" }
    ],
    bizTitle: "Business information",
    bizSub: "Public information based on business registration",
    bizRows: [
      ["Company", companyLegal.nameEn],
      ["CEO", companyLegal.representativeEn],
      ["Business registration no.", companyLegal.businessNumber],
      ["Address", companyLegal.addressEn],
      ["Business type", "Agriculture, forestry and fishery"],
      ["Business items", "Seed and seedling production / Greenhouse cultivation of vegetables, flowers and fruit crops"],
      ["Business development", "+82 10-3341-6036"],
      ["Email", companyLegal.inquiryEmail]
    ],
    copyright: "© 2026 CESeL Primus Co., Ltd. All rights reserved.",
    officialInquiry: "Official inquiries"
  },
  seo: {
    orgDescription:
      "CESeL Primus is an agri-food and cold-chain infrastructure technology company that started from premium strawberry vertical farming and expands into cooling & dehumidification, energy & operations management, cold chain, and business development support.",
    webPageName: "CESeL Primus | From Vertical Farms to Cold Chain — Food Infrastructure as One Platform",
    lineupListName: "CESeL Primus solution lineup",
    videoName: "CESeL Primus portfolio motion film",
    videoDescription:
      "A brand motion film showing how operating experience from vertical farming expands into climate control, energy & operations management, cold chain, and business development support.",
    breadcrumbHome: "Home"
  }
};
