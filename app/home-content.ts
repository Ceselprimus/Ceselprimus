// 홈페이지 한/영 콘텐츠 사전
export type Locale = "ko" | "en";

export type Accent = "forest" | "ice" | "energy" | "amber";

export interface LineupSubItem {
  name: string;
  desc?: string;
}

export interface LineupCategory {
  name: string;
  tagline: string;
  body?: string;
  accent: Accent;
  image: string;
  imageAlt: string;
  anchor: string;
  englishName: string;
  subItems: LineupSubItem[];
}

export interface HomeContent {
  locale: Locale;
  pageUrl: string;
  inquirySubject: string;
  whatsapp: { number: string; prefill: string; aria: string };
  nav: {
    items: { href: string; label: string }[];
    inquiry: string;
    langSwitch: { href: string; label: string };
    mobileContact: string;
    menuOpen: string;
    menuClose: string;
    homeAria: string;
    homeHref: string;
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
    lineupLabel: string;
    categories: LineupCategory[];
    statementPre: string;
    statementHighlight: string;
    statementPost: string;
  };
  alphafarm: {
    eyebrow: string;
    titleLines: string[];
    bodyPre: string;
    bodyStrong: string;
    bodyPost: string;
    flow: string[];
    models: { name: string; desc: string; image: string }[];
    imageAlt: string;
    captionTitle: string;
    captionBody: string;
    core: {
      eyebrow: string;
      name: string;
      lead: string;
      body: string;
      tags: string[];
      features: { title: string; desc: string }[];
      image: string;
      imageAlt: string;
      sofcLabel: string;
      sofcNote: string;
      sofcImage: string;
      sofcImageAlt: string;
    };
  };
  cooling: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    flow: string[];
    models: [string, string][];
    imageAlt: string;
  };
  energy: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    products: { name: string; desc: string }[];
    futureTitle: string;
    futureBody: string;
  };
  engineering: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    paras: string[];
    applicationsLabel: string;
    applications: string[];
    areasLabel: string;
    areas: { title: string; paras: string[] }[];
    deliveryTitle: string;
    deliveryParas: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    image: string;
    imageAlt: string;
  };
  cases: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    note: string;
    closeLabel: string;
    items: { image: string; title: string; site: string; tag: string; youtubeId?: string }[];
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
  news: {
    eyebrow: string;
    titleLines: string[];
    socialLinks: [string, string][];
    modelsLabel: string;
    models: { label: string; slug: string }[];
  };
  insights: {
    eyebrow: string;
    titleLines: string[];
    viewAllLabel: string;
  };
  faq: {
    label: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  chat: {
    launcher: string;
    teaserTitle: string;
    teaserBody: string;
    title: string;
    statusLabel: string;
    timeLabel: string;
    greeting: string;
    greeting2: string;
    chipsLabel: string;
    followUps: string[];
    inquiryChip: string;
    inquiryLead: string;
    casesChip: string;
    footnote: string;
    form: {
      intro: string;
      name: string;
      age: string;
      company: string;
      route: string;
      phone: string;
      submit: string;
      skip: string;
      thanks: string;
    };
  };
  contact: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    modalTitle: string;
    modalBody: string;
    form: {
      intro: string;
      name: string;
      contact: string;
      company: string;
      region: string;
      submit: string;
      sent: string;
      orLabel: string;
    };
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
    navLinks: { href: string; label: string }[];
    bizLines: string[];
    copyright: string;
  };
  seo: {
    orgDescription: string;
    webPageName: string;
    lineupListName: string;
    breadcrumbHome: string;
    knowsAbout: string[];
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

const caseImages = {
  suw1: "/media/cases/case-suwon-urban-01.webp",
  suw2: "/media/cases/case-suwon-urban-02.webp",
  mal1: "/media/cases/case-malaysia-exterior.webp",
  mal2: "/media/cases/case-malaysia-growroom.webp",
  ich2: "/media/cases/case-icheon-rack.webp",
  naj1: "/media/cases/case-naju-growroom-01.webp",
  naj2: "/media/cases/case-naju-growroom-02.webp",
  njl1: "/media/cases/case-naju-lab-01.webp",
  njl2: "/media/cases/case-naju-lab-02.webp",
  jn1: "/media/cases/case-jeonnam-container.webp",
  ptv: "/media/cases/case-pyeongtaek-plantyfarm.webp"
};

export const koContent: HomeContent = {
  locale: "ko",
  pageUrl: "https://www.ceslprimus.com",
  inquirySubject: "쎄슬프라이머스 사업개발 문의",
  whatsapp: {
    number: "821037617953",
    prefill: "안녕하세요, 쎄슬프라이머스에 문의드립니다.",
    aria: "왓츠앱으로 문의하기"
  },
  nav: {
    items: [
      { href: "/#lineup", label: "라인업" },
      { href: "/#alphafarm", label: "알파팜" },
      { href: "/#cases", label: "구축 사례" },
      { href: "/#news", label: "소식" },
      { href: "/insights", label: "인사이트" },
      { href: "/#contact", label: "연락처" }
    ],
    inquiry: "사업개발 문의",
    langSwitch: { href: "/en", label: "EN" },
    mobileContact: "사업개발 문의 010-3341-6036 · 해외사업 왓츠앱 +82 10-3761-7953",
    menuOpen: "메뉴 열기",
    menuClose: "메뉴 닫기",
    homeAria: "쎄슬프라이머스 홈",
    homeHref: "/"
  },
  hero: {
    eyebrow: "프리미엄 딸기수직농장 · 콜드체인 인프라 기술기업",
    titleLines: ["딸기수직농장에서 콜드체인까지,", "식품 인프라를 플랫폼으로."],
    sub: "딸기수직농장을 중심으로 작물재배, 냉방·제습, 전력·제어·데이터, 스마트 시스템 엔지니어링을 연결해 식품 생산·저장·작업공간 전반의 운영 효율을 높이는 통합 스마트 식품 인프라 솔루션을 제공합니다.",
    ctaPrimary: "솔루션 라인업 보기",
    ctaSecondary: "사업개발 문의",
    imageAlt: "쎄슬프라이머스 딸기수직농장·콜드체인 통합 솔루션 / CESeL Primus strawberry vertical farm and cold chain solution",
    stats: [
      { value: "2016", label: "법인 설립" },
      { value: "4", label: "솔루션 라인업" },
      { value: "10건+", label: "특허 · 상표 · 저작권" },
      { value: "6곳+", label: "국내외 구축 현장" }
    ]
  },
  positioning: {
    eyebrow: "핵심 포지셔닝",
    statementPre: "단순한 설비 공급을 넘어, 식품 생산·저장 인프라를",
    statementHighlight: " 하나의 통합 플랫폼",
    statementPost: "으로 만듭니다.",
    body: "딸기 수직농장에서 검증한 운영 경험을 기반으로 기후제어, 전력·제어·데이터 관리, 콜드체인, 스마트 시스템 엔지니어링으로 확장합니다. 생산 · 저장 · 공조 · 에너지 · 운영 데이터가 결합된 기술 기업, 쎄슬프라이머스입니다."
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
    eyebrow: "알파 솔루션 포트폴리오",
    titleLines: ["네 개의 라인업,", "하나의 포트폴리오."],
    aside: "각 라인업은 따로 도입할 수도, 사업 단계와 목적에 맞춰 하나의 프로젝트로 묶을 수도 있습니다.",
    detailLabel: "상세보기",
    lineupLabel: "라인업",
    categories: [
      {
        name: "알파팜",
        tagline: "프리미엄 딸기 생산 · 리테일 · 공간경험 솔루션",
        accent: "forest",
        image: "/media/cases/case-suwon-urban-01.webp",
        imageAlt: "알파팜 도심형 딸기수직농장 재배랙 / AlphaFarm urban strawberry vertical farm rack",
        anchor: "#alphafarm",
        englishName: "AlphaFarm",
        subItems: [
          { name: "알파코어", desc: "대형 프리미엄 딸기 생산기지" },
          { name: "알파카페", desc: "생산과 프리미엄 리테일을 연결하는 매장형 모델" },
          { name: "경험형 포트폴리오", desc: "호텔 · 쇼룸 · 베이커리 공간경험 설계" },
          { name: "알파 컨테이너팜", desc: "소형 생산 · 검증형 모델" }
        ]
      },
      {
        name: "알파쿨링",
        tagline: "팜 · 식품공정 · 콜드체인 컨테이너 냉각제습 솔루션",
        accent: "ice",
        image: "/media/concepts/alphacooling-farm-concept-2.webp",
        imageAlt: "알파쿨링 저온제습 쿨링시스템 / AlphaCooling low-temperature dehumidification cooling system",
        anchor: "#alphacooling",
        englishName: "AlphaCooling",
        subItems: [
          { name: "알파쿨링 팜", desc: "딸기 재배실 전용 저온제습 · 냉각 패키지" },
          { name: "알파쿨링 식품 · 포장실", desc: "식품공정 · 포장실용 인라인 핫가스 재열 제습 유닛" },
          { name: "알파쿨링 컨테이너", desc: "철도기술연구원 기술이전 특허 기반 에너지저장장치 연계 콜드체인 컨테이너" }
        ]
      },
      {
        name: "알파에너지",
        tagline: "전력 · 제어 · 데이터 통합 관리 시스템",
        accent: "energy",
        image: "/media/concepts/alphaenergy-concept.webp",
        imageAlt: "알파에너지 전력·제어·데이터 통합 관리 / AlphaEnergy power, control and data management",
        anchor: "#alphaenergy",
        englishName: "AlphaEnergy",
        subItems: [
          { name: "알파 파워 패널", desc: "전력센서 · 분전 · 제어" },
          { name: "인공지능 컨트롤 게이트웨이", desc: "센서 · 제어반 · 장비 연결" },
          { name: "알파 데이터 관리 시스템", desc: "이미지 · 센서 · 에너지 데이터 통합" },
          { name: "알파 사전냉각 통합 실외기", desc: "쿨링 실외기 전력절감 · 피크부하 안정화 · 고온외기 대응" }
        ]
      },
      {
        name: "알파엔지니어링",
        tagline: "스마트 식품 인프라 엔지니어링",
        body: "재배랙, 양액기, 환경제어기, 양액·관수 배관, 냉방·제습·환기 설비를 현장 조건에 맞춰 설계·구성하고, 공급·설치·연동·시운전까지 연결합니다.",
        accent: "amber",
        image: "/media/concepts/alphaengineering-card.webp",
        imageAlt: "알파엔지니어링 스마트 식품 인프라 엔지니어링 — 수직농장 설비 설계·구성 현장 / AlphaEngineering smart food infrastructure engineering",
        anchor: "#alphaengineering",
        englishName: "AlphaEngineering",
        subItems: [
          { name: "재배랙 설계·공급·설치" },
          { name: "양액 도징 시스템 설계·공급" },
          { name: "환경제어기 및 센서 연동" },
          { name: "양액·관수 배관 설계·시공" },
          { name: "냉방·제습·환기 설비 구성·시운전" }
        ]
      }
    ],
    statementPre: "알파팜에서 검증된 운영 경험과 기술 기반을 토대로, ",
    statementHighlight: "재배 · 기후 · 전력 · 콜드체인 · 데이터 · 엔지니어링",
    statementPost: "을 연결한 통합 솔루션 포트폴리오를 제공합니다."
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
      { name: "알파코어", desc: "안정적인 생산과 품질관리, 운영 지속성을 위한 대형 프리미엄 딸기 생산기지", image: "/media/concepts/alphacore-concept-2.webp" },
      { name: "알파카페", desc: "생산한 딸기를 케이크 · 생과팩 · 음료 등 프리미엄 상품으로 판매하는 매장형 모델", image: "/media/concepts/alphacafe-concept-2.webp" },
      { name: "경험형 포트폴리오", desc: "호텔 · 오피스 · 쇼룸 · 베이커리 공간을 살아있는 브랜드 경험으로 전환", image: "/media/concepts/alphaexperience-concept.webp" },
      { name: "알파 컨테이너팜", desc: "40피트 하이큐브 기반의 소형 생산 · 검증형 모델", image: "/media/concepts/containerfarm-concept.webp" }
    ],
    imageAlt: "알파팜 도심형 딸기수직농장 운영 사례",
    captionTitle: "생산 현장과 운영 시스템을 함께 설계합니다",
    captionBody: "재배 공간, 품질관리, 리테일 접점, 현지 사업화까지 하나의 흐름으로.",
    core: {
      eyebrow: "알파팜 핵심 유닛 · AlphaCore",
      name: "알파코어 (AlphaCore)",
      lead: "프리미엄 딸기 생산을 위한 모듈형 수직농장 생산 유닛",
      body:
        "코어-1(Core-1)은 재배실 약 165㎡(약 50평) 규모에서 연간 약 10~12톤의 프리미엄 딸기 생산을 목표로 하며, 코어-2 · 코어-3처럼 유닛을 반복 증설해 단계적으로 확장합니다. 대형 모델 Core-20은 데이터센터 · SOFC(고체산화물연료전지) 현장 발전 시스템과 연계해 폐열 · CO₂ · 전력을 프리미엄 딸기 생산 자원으로 전환합니다. 알파코어는 단순 재배랙이 아니라 고밀도 재배 · 연중생산 · 저온제습 · 에너지 절감 · 물 생산 · 데이터센터 연계까지 통합한 모듈형 수직농장 생산 시스템입니다.",
      tags: [
        "Core-1 · 약 165㎡ / 연 10~12톤",
        "Core-2 · Core-3 모듈 증설",
        "Core-20 · 순환 인프라 모델",
        "SOFC 고체산화물연료전지 연계",
        "폐열 · CO₂ 자원화"
      ],
      features: [
        { title: "고밀도 재배랙 기술", desc: "광폭 설계 기반 — 기본형 7단 224주, 밀식형 14단 448주까지. 제한된 면적에서도 높은 공간 생산성을 확보합니다." },
        { title: "연중생산 프로토콜", desc: "휴지기 없는 연중 생산. 분기별 예비모 교체와 안정적 수확 유지로 생산 단절을 줄여 균일한 공급과 수익성을 확보합니다." },
        { title: "저온제습 알파쿨링", desc: "15℃ / 50% RH 수준의 정밀 환경제어. 냉방과 제습을 통합 운전해 프리미엄 딸기 재배 환경을 만듭니다." },
        { title: "에너지 절감 알파에너지", desc: "저온제습·최적 환기로 냉방 부하와 전력소비를 절감. 고온다습·고전기요금 지역에서 특히 강한 경쟁력이 됩니다." },
        { title: "고순도에 가까운 물 생산", desc: "식물 증산·저온제습 과정의 저TDS 응축수를 회수·재이용. 수질 확보 시 유틸리티수·전처리수 활용까지 검토할 수 있습니다." },
        { title: "폐열·CO₂ 연계 데이터센터 모델", desc: "Core-20은 데이터센터·SOFC 발전·산업단지와 연계해 폐열·CO₂·전력을 딸기 생산 자원으로 전환하는 자원순환 인프라입니다." }
      ],
      image: "/media/concepts/alphacore-hero.webp",
      imageAlt: "알파코어(AlphaCore) — 프리미엄 딸기 생산을 위한 모듈형 수직농장 생산 유닛 6대 특징 인포그래픽",
      sofcLabel: "SOFC란? · 고체산화물연료전지 (Solid Oxide Fuel Cell)",
      sofcNote:
        "SOFC는 고온 전기화학 반응으로 전기를 생산하는 고효율 연료전지입니다. 저소음·저배출·연속운전과 연료 선택 유연성을 갖춰, 안정 전원이 필요한 데이터센터 현장발전 기술로 주목받고 있습니다.",
      sofcImage: "/media/concepts/sofc-infographic.webp",
      sofcImageAlt:
        "SOFC 고체산화물연료전지 작동 인포그래픽 — 연료(천연가스·바이오가스)로 고효율 전기를 생산해 데이터센터에 공급하고, 폐열과 CO₂를 수직농장 작물 재배에 재사용하는 순환 인프라"
    }
  },
  cooling: {
    eyebrow: "알파쿨링 — 라인업 02",
    titleLines: ["습도를 제어하면, 기후가 균일해지고", "품질 리스크가 줄어듭니다."],
    body: "단순 냉방이 아닙니다. 노점, 표면결로, 공급공기 상태까지 함께 관리하는 저온제습 중심의 공조 솔루션으로, 수직농장부터 식품 포장실, 저온저장시설, 콜드체인 시설까지 적용합니다.",
    flow: ["정밀 습도 제어", "균일한 기후", "품질 리스크 저감", "에너지 절감"],
    models: [
      ["알파쿨링 팜", "딸기 재배실 전용 저온제습 · 냉각 패키지. 저온재배 조건의 습도와 결로를 냉각기 · 순환팬 · 기류 · 센서 통합 설계로 관리합니다."],
      ["알파쿨링 식품 · 포장실", "식품공정과 포장실의 결로, 고습, 포장재 젖음 문제에 대응하는 인라인 핫가스 재열 제습 유닛입니다."],
      ["알파쿨링 컨테이너", "철도기술연구원 기술이전 특허 기반, 에너지저장장치를 연계한 콜드체인 컨테이너입니다."]
    ],
    imageAlt: "식품공장·저온저장고 저온제습 쿨링시스템 / Food factory and cold storage low-temperature dehumidification cooling system"
  },
  energy: {
    eyebrow: "알파에너지 — 라인업 03",
    titleLines: ["전력 · 제어 · 데이터를", "하나의 운영 레이어로 묶습니다."],
    body: "알파에너지는 전력 · 제어 · 데이터 통합 관리 시스템입니다. 현장 설비의 전력, 센서, 제어기, 이미지 데이터를 하나의 운영 판단 구조로 연결해 에너지 효율과 운전 안정성을 함께 높입니다.",
    products: [
      { name: "알파 파워 패널", desc: "삼상 전력센서와 분전 · 제어 시스템으로 주요 설비의 운전 상태를 수집하고 관리합니다." },
      { name: "인공지능 컨트롤 게이트웨이", desc: "센서, 릴레이, 제어반, 장비를 연결해 현장 운전 로직과 데이터 기반 제어를 적용합니다." },
      { name: "알파 데이터 관리 시스템", desc: "온습도 · 이산화탄소 · 이미지 · 에너지 데이터를 통합해 운영 판단의 근거를 만듭니다." },
      { name: "알파 사전냉각 통합 실외기", desc: "쿨링 실외기의 전력 절감, 피크부하 안정화, 고온 외기 대응을 담당합니다." }
    ],
    futureTitle: "다음 단계",
    futureBody: "태양광 · 에너지저장장치 연계로 고소비 전력 시설에 맞춘 최적 전력 생산 솔루션으로 확장을 준비하고 있습니다."
  },
  engineering: {
    eyebrow: "알파엔지니어링 — 라인업 04",
    titleLines: ["스마트 식품 인프라 엔지니어링"],
    lead: "현장 조건에 맞게 설계·구성하고, 실제 운영 가능한 시스템으로 완성합니다.",
    paras: [
      "알파엔지니어링(AlphaEngineering)은 작물재배 공간과 식품산업 현장에 필요한 스마트 시스템을 설계·구성하고, 장비 공급부터 설치·연동·시운전까지 연결하는 엔지니어링 서비스입니다.",
      "적용 대상은 수직농장에 한정되지 않습니다. 작물재배 시설, 육묘실, 식품저장고, 식품작업공간, 포장실, 저온저장시설 등 온도·습도·양액·관수·환기·전력·데이터 관리가 필요한 다양한 식품산업 인프라에 적용할 수 있습니다.",
      "현장 조건과 운영 목적을 먼저 검토한 후 재배랙, 양액 도징 시스템, 환경제어기, 양액·관수 배관, 냉방·제습·환기 설비를 적합하게 설계·구성합니다. 이후 고객 요구에 따라 장비 공급, 제작, 설치, 제어 연동, 시운전까지 수행하여 실제 운영 가능한 시스템으로 완성합니다.",
      "각 분야는 하나의 통합 시스템으로 구성할 수 있으며, 필요한 분야만 항목별 엔지니어링 서비스로도 제공할 수 있습니다."
    ],
    applicationsLabel: "적용 분야",
    applications: [
      "작물재배 시설",
      "수직농장",
      "육묘실",
      "식품저장고",
      "식품작업공간",
      "식품 포장실",
      "저온저장시설",
      "식품산업 관련 스마트 인프라"
    ],
    areasLabel: "AlphaEngineering 제공 분야",
    areas: [
      {
        title: "재배랙 설계·공급·설치",
        paras: [
          "고밀도 수직다단식 딸기재배랙, 수직다단식 개화묘 재배랙, 딸기육묘 재배랙 등 작물재배 목적에 맞는 재배랙을 설계·공급·설치합니다.",
          "재배 방식, 작물 특성, 작업 동선, 조명 배치, 관수·배액 구조, 유지관리 조건을 함께 검토하여 현장에 적합한 재배 구조로 구성합니다."
        ]
      },
      {
        title: "양액 도징 시스템 설계·공급",
        paras: [
          "작물 종류, 재배 규모, 관수 존, 공급량, 배액 방식에 따라 EC/pH 기반 양액 도징 시스템을 설계·구성합니다.",
          "혼합탱크, 도징펌프, EC/pH·수온·수위 센서, 관수제어, 자동 도징 시스템을 현장 조건에 맞게 구성하고, 장비 공급과 시운전까지 지원합니다."
        ]
      },
      {
        title: "환경제어기 및 센서 연동",
        paras: [
          "온도, 습도, CO₂, 양액, 전력, 장비 운전 데이터를 통합 관리할 수 있도록 환경제어기와 센서 게이트웨이를 설계·구성합니다.",
          "냉방기, 제습기, 환기팬, 순환팬, 펌프, 밸브, 센서, 제어반과의 연동 구조를 검토하여 실제 운영 가능한 환경제어 시스템으로 연결합니다."
        ]
      },
      {
        title: "양액·관수 배관 설계·시공",
        paras: [
          "재배 방식, 존 구성, 유량, 압력, 배액 조건을 기준으로 양액·관수 배관을 설계하고 시공합니다.",
          "양액 공급 배관, 순환 배관, 관수 배관, 배액 배관, 밸브, 여과기, 압력계 등 현장 운영에 필요한 배관 시스템을 설계·구성하고, 자재 공급과 현장 시공까지 수행합니다."
        ]
      },
      {
        title: "냉방·제습·환기 설비 구성·시운전",
        paras: [
          "작물재배 공간, 식품저장고, 식품작업공간, 포장실, 저온저장시설의 목적과 온도·습도 조건에 맞춰 냉방·제습·환기 설비를 설계·구성합니다.",
          "냉방기, 제습기, 환기팬, 순환팬, 센서, 제어반의 용량과 배치, 제어 연동을 검토하고 설치·시운전까지 수행합니다."
        ]
      }
    ],
    deliveryTitle: "제공 방식",
    deliveryParas: [
      "AlphaEngineering은 현장 조건과 고객 요구에 따라 통합 시스템 엔지니어링 또는 항목별 엔지니어링 서비스로 제공됩니다.",
      "단순 장비 판매나 설치에 그치지 않고, 현장의 목적과 운영 조건에 맞는 시스템을 설계·구성하고 필요한 장비와 공사를 연결하여 실제 운영 가능한 스마트 식품 인프라로 완성합니다."
    ],
    ctaTitle: "AlphaEngineering 프로젝트 및 견적 문의",
    ctaBody: "재배랙, 양액 도징 시스템, 환경제어기, 양액·관수 배관, 냉방·제습·환기 설비의 통합 시스템 또는 항목별 엔지니어링에 대해 문의해 주세요. 현장 조건과 적용 목적을 검토하여 적합한 시스템 구성과 추진방안을 제안합니다.",
    ctaButton: "AlphaEngineering 프로젝트 문의",
    image: "/media/concepts/alphaengineering-detail.webp",
    imageAlt: "알파엔지니어링 — 설계부터 공급, 설치, 시운전까지. 재배랙·양액 도징·환경제어기·배관·냉방제습환기 설비 스마트 식품 인프라 엔지니어링 인포그래픽"
  },
  cases: {
    eyebrow: "구축 사례",
    titleLines: ["현장이 증명합니다.", "국내외 6곳+ 구축 현장."],
    body: "수원 도심형 운영 사례부터 이천 · 나주 · 전남 구축 현장, 오픈을 준비 중인 말레이시아 알파팜까지 — 모두 실제 현장에서 촬영한 사진과 영상입니다.",
    note: "※ 말레이시아 알파팜은 공조시스템 설치 마무리 후 7월 초 정식을 목표로 하는 오픈 준비 현장입니다.",
    closeLabel: "닫기",
    items: [
      { image: caseImages.suw1, title: "도심형 딸기수직농장", site: "수원", tag: "운영 사례" },
      { image: caseImages.ptv, title: "딸기수직농장 재배 영상", site: "평택", tag: "재배 영상사례", youtubeId: "6qe910dslRg" },
      { image: caseImages.mal1, title: "알파팜 말레이시아 전경", site: "말레이시아", tag: "오픈 준비" },
      { image: caseImages.ich2, title: "딸기수직농장 재배랙", site: "이천", tag: "구축 사례" },
      { image: caseImages.naj1, title: "딸기수직농장 재배실", site: "나주", tag: "구축 사례" },
      { image: caseImages.mal2, title: "알파팜 말레이시아 재배실", site: "말레이시아", tag: "오픈 준비" },
      { image: caseImages.jn1, title: "딸기 컨테이너팜", site: "전남", tag: "구축 사례" },
      { image: caseImages.njl1, title: "수직농업연구실 구축", site: "나주", tag: "구축 사례" },
      { image: caseImages.suw2, title: "도심형 딸기수직농장 재배실", site: "수원", tag: "운영 사례" },
      { image: caseImages.naj2, title: "딸기수직농장 재배실 전경", site: "나주", tag: "구축 사례" },
      { image: caseImages.njl2, title: "수직농업연구실 재배랙", site: "나주", tag: "구축 사례" }
    ]
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
    titleLines: ["10건+의 등록 권리가", "기술의 깊이를 증명합니다."],
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
  news: {
    eyebrow: "소식",
    titleLines: ["사업 모델 제안을", "만나보세요."],
    socialLinks: [
      ["네이버 블로그", socialHrefs.blog],
      ["페이스북", socialHrefs.facebook],
      ["링크드인", socialHrefs.linkedin],
      ["인스타그램", socialHrefs.instagram]
    ],
    modelsLabel: "사업 모델 제안",
    models: [
      { label: "지식산업센터 재생 모델", slug: "knowledge-center-chp-strawberry-farm" },
      { label: "발효 공장 연계 모델", slug: "alphafarm-core-brewery-fermentation" },
      { label: "발전소 연계 모델", slug: "alphafarm-core-power-plant" },
      { label: "석유화학·수소 연계 모델", slug: "alphafarm-core-petrochem-hydrogen" },
      { label: "팜투리테일 모델", slug: "alphacafe-farm-to-retail" },
      { label: "알파팜 코어-20", slug: "alphafarm-core20-sofc-datacenter" }
    ]
  },
  insights: {
    eyebrow: "인사이트",
    titleLines: ["최신 인사이트"],
    viewAllLabel: "전체 보기"
  },
  faq: {
    label: "자주 묻는 질문",
    title: "궁금한 점에 먼저 답합니다.",
    items: [
      {
        question: "쎄슬프라이머스는 어떤 회사인가요?",
        answer:
          "쎄슬프라이머스는 프리미엄 딸기 수직농장에서 출발해 냉방·제습, 전력·제어·데이터 관리, 콜드체인, 스마트 시스템 엔지니어링으로 확장하는 기술기업입니다. 식품 생산과 저장 인프라를 하나의 통합 플랫폼으로 만드는 것을 목표로 합니다."
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
        question: "알파에너지는 어떤 시스템인가요?",
        answer:
          "전력 · 제어 · 데이터 통합 관리 시스템입니다. 알파 파워 패널, 인공지능 컨트롤 게이트웨이, 알파 데이터 관리 시스템, 알파 사전냉각 통합 실외기로 구성되어 설비 운전과 피크부하, 에너지 효율을 데이터로 관리합니다."
      },
      {
        question: "실제 구축 사례가 있나요?",
        answer:
          "수원 도심형 딸기수직농장 운영 사례를 비롯해 이천 · 나주 · 전남 구축 사례, 오픈을 준비 중인 말레이시아 알파팜 구축 레퍼런스까지 국내외 6곳 이상의 현장 사례를 보유하고 있습니다."
      },
      {
        question: "어떤 문의를 할 수 있나요?",
        answer:
          "프로젝트 문의, 파트너십 문의, 해외 실증 문의, 냉동·냉장 설비 문의를 받고 있습니다. 사업개발 담당자가 프로젝트 목적에 맞춰 검토 후 회신드립니다."
      }
    ]
  },
  chat: {
    launcher: "궁금한 점, 바로 답해드려요",
    teaserTitle: "무엇이 궁금하신가요? 🍓",
    teaserBody: "결로 해결부터 연중 딸기 사업까지 — 클릭 한 번이면 바로 답해드려요.",
    title: "쎄슬 도우미",
    statusLabel: "지금 바로 응답",
    timeLabel: "방금",
    greeting: "안녕하세요! 👋 쎄슬프라이머스 도우미입니다.",
    greeting2: "수직농장부터 콜드체인까지, 무엇이든 도와드릴게요 ⚡\n아래에 간단히 정보를 남기시거나, 건너뛰고 바로 질문하셔도 좋아요.",
    chipsLabel: "자주 묻는 질문",
    followUps: [
      "도움이 되셨나요? 다른 질문도 골라보세요 🙂",
      "더 깊은 이야기는 담당자가 직접 들려드릴 수 있어요 📞",
      "백문이 불여일견 — 현장 사진으로 직접 확인해 보세요 📷"
    ],
    inquiryChip: "📞 담당자에게 직접 문의할래요",
    inquiryLead: "정보를 남겨주시면 담당자가 먼저 연락드릴게요. (모두 선택 입력이에요 😊)",
    casesChip: "📷 구축 현장 사진 먼저 볼래요",
    footnote: "자동 안내입니다 · 상세 상담은 담당자 직접 문의를 이용해 주세요",
    form: {
      intro: "간단한 정보를 남겨주시면 담당자가 먼저 연락드려요. (모두 선택 입력)",
      name: "이름",
      age: "나이",
      company: "회사 · 기관 (선택)",
      route: "방문 경로 (검색 · SNS · 지인 등)",
      phone: "전화번호 (선택)",
      submit: "남기기",
      skip: "질문 먼저 볼게요",
      thanks: "감사합니다! 담당자가 곧 연락드릴게요 😊 궁금한 점은 아래에서 골라보세요."
    }
  },
  contact: {
    eyebrow: "연락처",
    titleLines: ["프로젝트 및 솔루션 문의"],
    body: "AlphaFarm, AlphaCooling, AlphaEnergy, AlphaEngineering의 도입, 설계, 장비 공급, 설치, 시운전 및 사업협력에 대해 문의해 주세요. 수직농장 구축, 냉방·제습, 전력·제어·데이터 관리, 재배랙, 양액 시스템, 배관 및 식품산업 인프라 엔지니어링까지 프로젝트 조건에 맞는 솔루션을 제안합니다.",
    modalTitle: "사업개발 문의",
    modalBody: "연락처를 남겨주시면 담당자가 먼저 연락드립니다. 바로 연락도 가능합니다.",
    form: {
      intro: "성함과 연락처를 남겨주세요. (모두 선택 입력)",
      name: "이름",
      contact: "연락처 (전화 또는 이메일)",
      company: "회사 · 기관명",
      region: "지역 · 국가",
      submit: "프로젝트 및 견적 문의",
      sent: "접수되었습니다! 담당자가 곧 연락드리겠습니다 😊",
      orLabel: "또는 바로 연락하기"
    },
    categories: [
      { label: "AlphaFarm", desc: "수직농장 구축, 재배시스템, 재배랙 및 운영모델" },
      { label: "AlphaCooling", desc: "작물재배 시설, 식품저장고 및 작업공간의 냉방·제습" },
      { label: "AlphaEnergy", desc: "전력 모니터링, 환경제어, 데이터 관리 및 에너지 절감" },
      { label: "AlphaEngineering", desc: "양액기, 환경제어기, 배관, 재배랙 및 환경제어 설비 엔지니어링" },
      { label: "사업협력 및 해외 프로젝트", desc: "파트너십, 현지 실증, 수출 및 공동사업" }
    ],
    contacts: [
      {
        name: "사업개발 문의",
        role: "프로젝트 · 파트너십 · 국내 사업개발",
        tag: "국내 · 사업개발",
        primary: true,
        phones: [{ label: "휴대전화", value: "010-3341-6036", href: "tel:01033416036" }],
        email: "rkdghtn636@gmail.com",
        emailLabel: "이메일"
      },
      {
        name: "해외사업 문의",
        role: "해외 실증 · 사업화",
        tag: "해외 · 경영",
        primary: false,
        phones: [{ label: "왓츠앱", value: "+82 10-3761-7953", href: "https://wa.me/821037617953" }],
        email: "kevinlee@ceslprimus.com",
        emailLabel: "이메일"
      }
    ]
  },
  footer: {
    brandDesc: "수직농장에서 콜드체인까지, 식품 인프라를 플랫폼으로.",
    navLinks: [
      { href: "/#lineup", label: "라인업" },
      { href: "/#alphafarm", label: "알파팜" },
      { href: "/#cases", label: "구축 사례" },
      { href: "/#ip", label: "권리·특허" },
      { href: "/#news", label: "소식" },
      { href: "/insights", label: "인사이트" },
      { href: "/#contact", label: "연락처" }
    ],
    bizLines: [
      "주식회사 쎄슬프라이머스 농업회사법인  ·  대표자 이관호  ·  사업자등록번호 791-81-00425",
      "본사  ·  서울특별시 서초구 양재대로2길 18, 4층 H6호 (우면동, 호반파크 2관)",
      "공장  ·  전라남도 함평군 나산면 삼축리 616-13",
      "사업개발 문의 010-3341-6036  ·  이메일 rkdghtn636@gmail.com"
    ],
    copyright: "저작권 2026 쎄슬프라이머스. 모든 권리 보유."
  },
  seo: {
    orgDescription:
      "프리미엄 딸기 수직농장에서 출발해 냉방·제습, 전력·제어·데이터 관리, 콜드체인, 스마트 시스템 엔지니어링으로 확장하는 농식품·콜드체인 인프라 기술기업입니다. 알파팜, 알파쿨링, 알파에너지, 알파엔지니어링 네 개 라인업을 제공합니다.",
    webPageName: "쎄슬프라이머스 | 수직농장에서 콜드체인까지, 식품 인프라 통합 솔루션",
    lineupListName: "쎄슬프라이머스 알파 솔루션 포트폴리오",
    breadcrumbHome: "홈",
    knowsAbout: [
      "딸기수직농장",
      "수직농장",
      "스마트팜",
      "쿨링시스템",
      "저온제습 공조",
      "콜드체인",
      "식품창고",
      "저온저장고",
      "식품공장 결로",
      "에너지 관리 시스템",
      "해외진출",
      "아세안 사업화",
      "농식품 컨설팅",
      "스마트 식품 인프라 엔지니어링",
      "재배랙 설계·공급·설치",
      "양액 도징 시스템",
      "연중 딸기 사업솔루션",
      "알파코어 모듈형 수직농장",
      "SOFC 고체산화물연료전지",
      "Solid Oxide Fuel Cell",
      "SOFC 데이터센터 연계 순환 인프라",
      "폐열·CO2 자원화"
    ]
  }
};

export const enContent: HomeContent = {
  locale: "en",
  pageUrl: "https://www.ceslprimus.com/en",
  inquirySubject: "CESeL Primus Business Development Inquiry",
  whatsapp: {
    number: "821037617953",
    prefill: "Hello, I'd like to ask about CESeL Primus.",
    aria: "Chat with us on WhatsApp"
  },
  nav: {
    items: [
      { href: "/en#lineup", label: "Lineup" },
      { href: "/en#alphafarm", label: "AlphaFarm" },
      { href: "/en#cases", label: "Cases" },
      { href: "/en#news", label: "News" },
      { href: "/en/insights", label: "Insights" },
      { href: "/en#contact", label: "Contact" }
    ],
    inquiry: "Contact us",
    langSwitch: { href: "/", label: "한국어" },
    mobileContact: "Business development +82 10-3341-6036 · Global business WhatsApp +82 10-3761-7953",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    homeAria: "CESeL Primus home",
    homeHref: "/en"
  },
  hero: {
    eyebrow: "Premium strawberry vertical farm · cold-chain infrastructure",
    titleLines: ["From strawberry vertical farms to cold chain,", "food infrastructure as one platform."],
    sub: "Starting with strawberry vertical farms, we integrate crop cultivation, cooling and dehumidification, power, control, data, and smart-system engineering to improve operational efficiency across food production, storage, and workspaces.",
    ctaPrimary: "Explore the lineup",
    ctaSecondary: "Business inquiries",
    imageAlt: "CESeL Primus integrated vertical farm and cold-chain solution visual",
    stats: [
      { value: "2016", label: "Founded" },
      { value: "4", label: "Solution lineups" },
      { value: "10+", label: "Registered IP rights" },
      { value: "6+", label: "Deployment sites — KR · MY" }
    ]
  },
  positioning: {
    eyebrow: "Positioning",
    statementPre: "Beyond equipment supply — we turn food production and storage infrastructure into",
    statementHighlight: " one integrated platform",
    statementPost: ".",
    body: "Building on operating experience proven in strawberry vertical farms, we expand into climate control, power · control · data management, cold chain, and smart-system engineering. CESeL Primus is a technology company where production, storage, HVAC, energy, and operations data come together."
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
    eyebrow: "Alpha Solution Portfolio",
    titleLines: ["Four lineups,", "one portfolio."],
    aside: "Adopt each lineup on its own, or combine them into a single project to match your business stage and goals.",
    detailLabel: "Learn more",
    lineupLabel: "Lineup",
    categories: [
      {
        name: "AlphaFarm",
        tagline: "Premium strawberry production · retail · space experience",
        accent: "forest",
        image: "/media/cases/case-suwon-urban-01.webp",
        imageAlt: "AlphaFarm urban strawberry vertical farm racks",
        anchor: "#alphafarm",
        englishName: "AlphaFarm",
        subItems: [
          { name: "AlphaCore", desc: "Large-scale premium strawberry production base" },
          { name: "AlphaCafe", desc: "In-store model connecting production with premium retail" },
          { name: "Experience Portfolio", desc: "Space experience design for hotels, showrooms, and bakeries" },
          { name: "Alpha ContainerFarm", desc: "Compact production and validation model" }
        ]
      },
      {
        name: "AlphaCooling",
        tagline: "Cooling & dehumidification for farms, food processes, and cold chain",
        accent: "ice",
        image: "/media/concepts/alphacooling-farm-concept-2.webp",
        imageAlt: "AlphaCooling low-temperature dehumidification HVAC",
        anchor: "#alphacooling",
        englishName: "AlphaCooling",
        subItems: [
          { name: "AlphaCooling Farm", desc: "Low-temp dehumidification & cooling package for strawberry grow rooms" },
          { name: "AlphaCooling HGR", desc: "Inline hot-gas-reheat dehumidification unit for food processes and packing rooms" },
          { name: "AlphaCooling Container", desc: "ESS-linked cold-chain container based on patented technology transferred from KRRI" }
        ]
      },
      {
        name: "AlphaEnergy",
        tagline: "Integrated power · control · data management system",
        accent: "energy",
        image: "/media/concepts/alphaenergy-concept.webp",
        imageAlt: "AlphaEnergy integrated power, control and data management",
        anchor: "#alphaenergy",
        englishName: "AlphaEnergy",
        subItems: [
          { name: "Alpha Power Panel", desc: "Power sensing · distribution · control" },
          { name: "AI Control Gateway", desc: "Connecting sensors, control panels, and equipment" },
          { name: "Alpha Data Management System", desc: "Integrating image, sensor, and energy data" },
          { name: "Alpha PCU", desc: "PreCooling integrated outdoor unit — power savings, peak-load stability, hot-climate response" }
        ]
      },
      {
        name: "AlphaEngineering",
        tagline: "Smart Food Infrastructure Engineering",
        body: "We design and configure cultivation racks, nutrient dosing systems, environmental controls, nutrient and irrigation piping, and climate-control systems according to site conditions, and connect them through supply, installation, integration, and commissioning.",
        accent: "amber",
        image: "/media/concepts/alphaengineering-card.webp",
        imageAlt: "AlphaEngineering smart food infrastructure engineering — vertical farm system design and configuration",
        anchor: "#alphaengineering",
        englishName: "AlphaEngineering",
        subItems: [
          { name: "Rack design, supply & installation" },
          { name: "Nutrient dosing system design & supply" },
          { name: "Environmental controllers & sensor integration" },
          { name: "Nutrient & irrigation piping design & works" },
          { name: "Cooling, dehumidification & ventilation systems" }
        ]
      }
    ],
    statementPre: "Built on operating experience proven at AlphaFarm, we deliver an integrated solution portfolio connecting ",
    statementHighlight: "cultivation · climate · power · cold chain · data · engineering",
    statementPost: "."
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
      { name: "AlphaCore", desc: "A large-scale premium strawberry production base for stable output and quality control", image: "/media/concepts/alphacore-concept-2.webp" },
      { name: "AlphaCafe", desc: "An in-store model selling strawberries as cakes, fresh packs, and beverages", image: "/media/concepts/alphacafe-concept-2.webp" },
      { name: "Experience Portfolio", desc: "Turns hotels, offices, showrooms, and bakeries into living brand experiences", image: "/media/concepts/alphaexperience-concept.webp" },
      { name: "Alpha ContainerFarm", desc: "A compact production and validation model in a 40-ft high-cube container", image: "/media/concepts/containerfarm-concept.webp" }
    ],
    imageAlt: "AlphaFarm urban strawberry vertical farm in operation",
    captionTitle: "We design the production site and the operating system together",
    captionBody: "Growing space, quality control, retail touchpoints, and local business development — in one flow.",
    core: {
      eyebrow: "AlphaFarm core unit · AlphaCore",
      name: "AlphaCore",
      lead: "A modular vertical-farm production unit for premium strawberries",
      body:
        "Core-1 targets roughly 10–12 tons of premium strawberries a year from a ~165 ㎡ cultivation room and scales step by step by repeatedly adding units such as Core-2 and Core-3. The large-scale Core-20 links with data centers and SOFC (solid oxide fuel cell) on-site power systems, converting waste heat, CO₂, and power into productive resources for premium strawberry farming. AlphaCore is not simply a cultivation rack — it is an integrated modular vertical-farm system combining high-density cultivation, year-round production, low-temperature dehumidification, energy efficiency, water production, and data-center linkage.",
      tags: [
        "Core-1 · ~165 ㎡ / 10–12 t per year",
        "Core-2 · Core-3 modular scaling",
        "Core-20 · circular infrastructure",
        "SOFC (solid oxide fuel cell) linkage",
        "Waste heat · CO₂ to resources"
      ],
      features: [
        { title: "High-density cultivation rack", desc: "Wide-format design — 7 tiers / 224 plants (standard) up to 14 tiers / 448 plants (high-density). Stable, high productivity within a limited footprint." },
        { title: "Year-round production protocol", desc: "Continuous production with no seasonal downtime. Scheduled mother-plant replacement and stable harvest management for uniform supply and profitability." },
        { title: "AlphaCooling low-temp dehumidification", desc: "Precise control at ~15°C / 50% RH, integrating cooling and dehumidification to create the foundation for premium strawberry cultivation." },
        { title: "AlphaEnergy efficiency", desc: "Low-temp dehumidification and optimized ventilation cut cooling load and power use — a key advantage in hot-humid or high-electricity-cost markets." },
        { title: "Water production near high-purity", desc: "Recovers low-TDS condensate from transpiration and dehumidification for internal reuse, with potential utility/pretreatment-water use after simple post-treatment." },
        { title: "Waste-heat & CO₂ data-center model", desc: "Core-20 links with data centers, SOFC power, and industrial complexes to convert waste heat, CO₂, and power into strawberry-production resources." }
      ],
      image: "/media/concepts/alphacore-hero-en.webp",
      imageAlt: "AlphaCore — modular vertical farming production unit for premium strawberry production, six key features infographic",
      sofcLabel: "What is SOFC? · Solid Oxide Fuel Cell",
      sofcNote:
        "SOFC delivers efficient, low-noise, low-emission continuous power via high-temperature electrochemical reactions — on-site generation well suited to data centers that need stable power.",
      sofcImage: "/media/concepts/sofc-infographic.webp",
      sofcImageAlt:
        "SOFC solid oxide fuel cell infographic — fuel such as natural gas or biogas generates efficient electricity for data centers, while waste heat and CO₂ are reused for vertical-farm cultivation as circular infrastructure"
    }
  },
  cooling: {
    eyebrow: "AlphaCooling — Lineup 02",
    titleLines: ["Control the humidity — the climate", "evens out and quality risk drops."],
    body: "This is not simple air conditioning. A dehumidification-centered HVAC solution that also manages dew point, surface condensation, and supply-air condition — applied from vertical farms to food packing rooms, cold storage, and cold-chain facilities.",
    flow: ["Precise humidity control", "Uniform climate", "Lower quality risk", "Energy savings"],
    models: [
      ["AlphaCooling Farm", "A low-temp dehumidification & cooling package for strawberry grow rooms — coolers, circulation fans, airflow, and sensors designed as one."],
      ["AlphaCooling HGR", "An inline hot-gas-reheat dehumidification unit for condensation, high humidity, and wet-packaging problems in food processes and packing rooms."],
      ["AlphaCooling Container", "An ESS-linked cold-chain container based on patented technology transferred from the Korea Railroad Research Institute."]
    ],
    imageAlt: "Food workspace with AlphaCooling low-temperature dehumidification HVAC"
  },
  energy: {
    eyebrow: "AlphaEnergy — Lineup 03",
    titleLines: ["Power, control, and data —", "bound into one operations layer."],
    body: "AlphaEnergy is an integrated power · control · data management system. It connects equipment power, sensors, controllers, and image data into a single operational decision structure — raising energy efficiency and operational stability together.",
    products: [
      { name: "Alpha Power Panel", desc: "Collects and manages equipment operating status through three-phase power sensing, distribution, and control." },
      { name: "AI Control Gateway", desc: "Connects sensors, relays, control panels, and equipment to apply on-site logic and data-driven control." },
      { name: "Alpha Data Management System", desc: "Integrates temperature, humidity, CO2, image, and energy data as the basis for operational decisions." },
      { name: "Alpha PCU", desc: "PreCooling integrated outdoor unit — outdoor-unit power savings, peak-load stabilization, and hot-climate response." }
    ],
    futureTitle: "Next step",
    futureBody: "We are preparing an optimal power generation solution for power-intensive facilities, linking PV and energy storage systems."
  },
  engineering: {
    eyebrow: "AlphaEngineering — Lineup 04",
    titleLines: ["Smart Food Infrastructure Engineering"],
    lead: "Designed and configured for each site, then delivered as a fully operational system.",
    paras: [
      "AlphaEngineering designs and configures smart systems for crop cultivation facilities and food-industry sites, connecting equipment supply, installation, integration, and commissioning into practical engineering solutions.",
      "Its application is not limited to vertical farms. AlphaEngineering can be applied to crop cultivation facilities, nurseries, food storage rooms, food workspaces, packing rooms, cold-storage facilities, and other food-industry infrastructure requiring the management of temperature, humidity, nutrients, irrigation, ventilation, power, and operational data.",
      "We first review the site conditions and operating requirements, then design and configure cultivation racks, nutrient dosing systems, environmental controllers, nutrient and irrigation piping, and cooling, dehumidification, and ventilation systems. Depending on customer requirements, we also provide equipment supply, fabrication, installation, control integration, and commissioning to complete a practical operating system.",
      "Each area can be delivered as part of an integrated system or as an item-specific engineering service."
    ],
    applicationsLabel: "Applications",
    applications: [
      "Crop cultivation facilities",
      "Vertical farms",
      "Nurseries",
      "Food storage rooms",
      "Food workspaces",
      "Food packing rooms",
      "Cold-storage facilities",
      "Smart infrastructure for the food industry"
    ],
    areasLabel: "AlphaEngineering Service Areas",
    areas: [
      {
        title: "Rack Design, Supply & Installation",
        paras: [
          "We design, supply, and install high-density vertical multi-layer strawberry racks, vertical multi-layer flowering-seedling racks, and strawberry nursery racks according to cultivation objectives.",
          "Rack systems are configured with crop characteristics, working flow, lighting arrangement, irrigation and drainage structures, and maintenance requirements in mind."
        ]
      },
      {
        title: "Nutrient Dosing System Design & Supply",
        paras: [
          "We design and configure EC/pH-based nutrient dosing systems according to crop type, cultivation scale, irrigation zones, supply volume, and drainage method.",
          "Mixing tanks, dosing pumps, EC/pH, water-temperature and water-level sensors, irrigation control, and automatic dosing systems are configured according to site requirements, with equipment supply and commissioning support."
        ]
      },
      {
        title: "Environmental Controllers & Sensor Integration",
        paras: [
          "We design and configure environmental controllers and sensor gateways for integrated management of temperature, humidity, CO₂, nutrients, power, and equipment-operation data.",
          "Integration with cooling units, dehumidifiers, ventilation and circulation fans, pumps, valves, sensors, and control panels is reviewed to create a practical environmental-control system."
        ]
      },
      {
        title: "Nutrient & Irrigation Piping Design & Works",
        paras: [
          "We design and install nutrient and irrigation piping based on crop layout, zone structure, flow rate, pressure, and drainage conditions.",
          "Nutrient supply piping, recirculation piping, irrigation lines, drainage piping, valves, filters, pressure gauges, and related components are designed and configured, followed by material supply and on-site works."
        ]
      },
      {
        title: "Cooling, Dehumidification & Ventilation Systems",
        paras: [
          "We design and configure cooling, dehumidification, and ventilation systems according to the operating purpose and temperature and humidity requirements of crop cultivation areas, food storage rooms, food workspaces, packing rooms, and cold-storage facilities.",
          "Cooling units, dehumidifiers, ventilation fans, circulation fans, sensors, and control panels are reviewed for capacity, layout, and control integration, followed by installation and commissioning."
        ]
      }
    ],
    deliveryTitle: "Delivery Options",
    deliveryParas: [
      "AlphaEngineering is available as an integrated system engineering service or as item-specific engineering services, depending on site conditions and customer requirements.",
      "The service goes beyond simple equipment sales or installation. We design and configure the right system for each site, connect the required equipment and works, and complete it as practical smart food infrastructure."
    ],
    ctaTitle: "AlphaEngineering Project & Quotation Inquiries",
    ctaBody: "Contact us regarding integrated systems or item-specific engineering for cultivation racks, nutrient dosing systems, environmental controllers, nutrient and irrigation piping, and cooling, dehumidification, and ventilation systems. We review your site conditions and application requirements to propose an appropriate system configuration and implementation approach.",
    ctaButton: "AlphaEngineering Project Inquiry",
    image: "/media/concepts/alphaengineering-detail-en.webp",
    imageAlt: "AlphaEngineering — from design to supply, installation, and commissioning. Smart food infrastructure engineering infographic covering racks, nutrient dosing, environmental controllers, piping, and climate systems"
  },
  cases: {
    eyebrow: "Deployment cases",
    titleLines: ["Proven in the field —", "6+ sites in Korea and Malaysia."],
    body: "From an urban farm in operation in Suwon to deployments in Icheon, Naju, and Jeonnam, and AlphaFarm Malaysia preparing to open — all photos and video were captured on site.",
    note: "AlphaFarm Malaysia is an opening-preparation site, targeting first planting in early July after HVAC installation.",
    closeLabel: "Close",
    items: [
      { image: caseImages.suw1, title: "Urban strawberry vertical farm", site: "Suwon", tag: "In operation" },
      { image: caseImages.ptv, title: "Strawberry cultivation video", site: "Pyeongtaek", tag: "Cultivation video", youtubeId: "6qe910dslRg" },
      { image: caseImages.mal1, title: "AlphaFarm Malaysia exterior", site: "Malaysia", tag: "Opening soon" },
      { image: caseImages.ich2, title: "Cultivation racks", site: "Icheon", tag: "Deployment" },
      { image: caseImages.naj1, title: "Vertical farm grow room", site: "Naju", tag: "Deployment" },
      { image: caseImages.mal2, title: "AlphaFarm Malaysia grow room", site: "Malaysia", tag: "Opening soon" },
      { image: caseImages.jn1, title: "Strawberry container farm", site: "Jeonnam", tag: "Deployment" },
      { image: caseImages.njl1, title: "Vertical farming research lab", site: "Naju", tag: "Deployment" },
      { image: caseImages.suw2, title: "Urban vertical farm grow room", site: "Suwon", tag: "In operation" },
      { image: caseImages.naj2, title: "Grow room overview", site: "Naju", tag: "Deployment" },
      { image: caseImages.njl2, title: "Research lab cultivation racks", site: "Naju", tag: "Deployment" }
    ]
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
    titleLines: ["10+ registered rights prove", "the depth of our technology."],
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
  news: {
    eyebrow: "News",
    titleLines: ["Business model", "proposals to explore."],
    socialLinks: [
      ["Naver Blog", socialHrefs.blog],
      ["Facebook", socialHrefs.facebook],
      ["LinkedIn", socialHrefs.linkedin],
      ["Instagram", socialHrefs.instagram]
    ],
    modelsLabel: "Business Model Proposals",
    models: [
      { label: "Underutilized Space Regeneration Model", slug: "knowledge-center-chp-strawberry-farm" },
      { label: "Fermentation Plant Integration Model", slug: "alphafarm-core-brewery-fermentation" },
      { label: "Power Plant Integration Model", slug: "alphafarm-core-power-plant" },
      { label: "Petrochemical / Hydrogen Integration Model", slug: "alphafarm-core-petrochem-hydrogen" },
      { label: "Farm-to-Retail Model", slug: "alphacafe-farm-to-retail" },
      { label: "AlphaFarm Core-20", slug: "alphafarm-core20-sofc-datacenter" }
    ]
  },
  insights: {
    eyebrow: "Insights",
    titleLines: ["Latest insights"],
    viewAllLabel: "View all"
  },
  faq: {
    label: "FAQ",
    title: "Answers, before you ask.",
    items: [
      {
        question: "What kind of company is CESeL Primus?",
        answer:
          "CESeL Primus is a technology company that started from premium strawberry vertical farming and expands into cooling & dehumidification, power · control · data management, cold chain, and smart-system engineering. Our goal is to turn food production and storage infrastructure into one integrated platform."
      },
      {
        question: "What is the year-round strawberry business solution?",
        answer:
          "It is the business model AlphaFarm delivers. Once a client decides to invest, CESeL Primus takes responsibility for cultivation, operations, and sales as one package — creating a strawberry business that runs all year. Contracts start at one year and renew annually."
      },
      {
        question: "What problems does AlphaCooling solve?",
        answer:
          "It addresses hot and humid environments, condensation, and supply-air quality issues in vertical farms, food packing rooms, cold storage, and cold-chain facilities with a dehumidification-centered HVAC solution."
      },
      {
        question: "What is AlphaEnergy?",
        answer:
          "An integrated power · control · data management system composed of the Alpha Power Panel, AI Control Gateway, Alpha Data Management System, and Alpha PCU — managing equipment operation, peak load, and energy efficiency with data."
      },
      {
        question: "Do you have real deployment cases?",
        answer:
          "Yes — an urban strawberry vertical farm in operation in Suwon, deployments in Icheon, Naju, and Jeonnam, and AlphaFarm Malaysia preparing to open — 6+ sites across Korea and Malaysia."
      },
      {
        question: "What can I inquire about?",
        answer:
          "Project inquiries, partnership inquiries, overseas pilot inquiries, and refrigeration equipment inquiries. Our business development team reviews each project and replies directly."
      }
    ]
  },
  chat: {
    launcher: "Questions? Instant answers",
    teaserTitle: "What brings you here? 🍓",
    teaserBody: "From condensation control to a year-round strawberry business — one click for instant answers.",
    title: "CESeL Assistant",
    statusLabel: "Replies instantly",
    timeLabel: "Just now",
    greeting: "Hi there! 👋 I am the CESeL Primus assistant.",
    greeting2: "From vertical farms to cold chain — happy to help ⚡\nLeave a few details below, or skip and ask a question.",
    chipsLabel: "Frequently asked",
    followUps: [
      "Was that helpful? Pick another question 🙂",
      "For the full story, our team is one tap away 📞",
      "Seeing is believing — check the real site photos 📷"
    ],
    inquiryChip: "📞 Talk to our team directly",
    inquiryLead: "Leave your details and our team will reach out first. (All optional 😊)",
    casesChip: "📷 Show me real site photos first",
    footnote: "Automated guide · For details, contact our team directly",
    form: {
      intro: "Leave a few details and our team will reach out. (All optional)",
      name: "Name",
      age: "Age",
      company: "Company (optional)",
      route: "How did you find us? (search, SNS, referral)",
      phone: "Phone (optional)",
      submit: "Submit",
      skip: "Browse questions first",
      thanks: "Thank you! Our team will reach out soon 😊 Pick a question below anytime."
    }
  },
  contact: {
    eyebrow: "Contact",
    titleLines: ["Project & Solution Inquiries"],
    body: "Contact us regarding the deployment, design, equipment supply, installation, commissioning, and business collaboration of AlphaFarm, AlphaCooling, AlphaEnergy, and AlphaEngineering. From vertical farms, cooling and dehumidification, power and control, and data management to cultivation racks, nutrient systems, piping, and food-industry infrastructure engineering, we propose solutions tailored to each project.",
    modalTitle: "Business inquiries",
    modalBody: "Leave your details and our team will reach out first — or contact us directly.",
    form: {
      intro: "Leave your name and contact. (All optional)",
      name: "Name",
      contact: "Phone or email",
      company: "Company · organization",
      region: "Region · country",
      submit: "Project & Quotation Inquiry",
      sent: "Received! Our team will reach out soon 😊",
      orLabel: "Or reach us directly"
    },
    categories: [
      { label: "AlphaFarm", desc: "Vertical farm development, cultivation systems, racks, and operating models" },
      { label: "AlphaCooling", desc: "Cooling and dehumidification for cultivation facilities, food storage, and workspaces" },
      { label: "AlphaEnergy", desc: "Power monitoring, environmental control, data management, and energy optimization" },
      { label: "AlphaEngineering", desc: "Nutrient dosing, environmental controllers, piping, cultivation racks, and climate-system engineering" },
      { label: "Partnerships & Overseas Projects", desc: "Local pilots, exports, partnerships, and joint projects" }
    ],
    contacts: [
      {
        name: "Business Development",
        role: "Projects · Partnerships · Korea",
        tag: "Korea · BD",
        primary: true,
        phones: [{ label: "Mobile", value: "+82 10-3341-6036", href: "tel:+821033416036" }],
        email: "rkdghtn636@gmail.com",
        emailLabel: "Email"
      },
      {
        name: "Global Business",
        role: "Overseas pilots · Commercialization",
        tag: "Global · Management",
        primary: false,
        phones: [{ label: "WhatsApp", value: "+82 10-3761-7953", href: "https://wa.me/821037617953" }],
        email: "kevinlee@ceslprimus.com",
        emailLabel: "Email"
      }
    ]
  },
  footer: {
    brandDesc: "From vertical farms to cold chain — food infrastructure as one platform.",
    navLinks: [
      { href: "/en#lineup", label: "Lineup" },
      { href: "/en#alphafarm", label: "AlphaFarm" },
      { href: "/en#cases", label: "Cases" },
      { href: "/en#ip", label: "IP portfolio" },
      { href: "/en#news", label: "News" },
      { href: "/en/insights", label: "Insights" },
      { href: "/en#contact", label: "Contact" }
    ],
    bizLines: [
      "CESeL Primus Co., Ltd. (Agricultural corporation)  ·  CEO Kwanho Lee (Kevin Lee)  ·  Business registration no. 791-81-00425",
      "HQ  ·  4F H6, 18 Yangjae-daero 2-gil, Seocho-gu, Seoul, Republic of Korea",
      "Factory  ·  616-13 Samchuk-ri, Nasan-myeon, Hampyeong-gun, Jeollanam-do, Republic of Korea",
      "Business development +82 10-3341-6036  ·  Email rkdghtn636@gmail.com"
    ],
    copyright: "© 2026 CESeL Primus Co., Ltd. All rights reserved."
  },
  seo: {
    orgDescription:
      "CESeL Primus is an agri-food and cold-chain infrastructure technology company. Starting from premium strawberry vertical farming, it expands into cooling & dehumidification, power · control · data management, cold chain, and smart-system engineering — with the AlphaFarm, AlphaCooling, AlphaEnergy, and AlphaEngineering lineups.",
    webPageName: "CESeL Primus | From Vertical Farms to Cold Chain — Food Infrastructure as One Platform",
    lineupListName: "CESeL Primus Alpha Solution Portfolio",
    breadcrumbHome: "Home",
    knowsAbout: [
      "Strawberry vertical farming",
      "Vertical farm",
      "Smart farm",
      "Cooling system",
      "Low-temperature dehumidification HVAC",
      "Cold chain",
      "Food warehouse",
      "Cold storage",
      "Food factory condensation",
      "Energy management system",
      "Overseas expansion",
      "ASEAN commercialization",
      "Agri-food consulting",
      "Smart food infrastructure engineering",
      "Cultivation rack design and supply",
      "Nutrient dosing systems",
      "Year-round strawberry business solution",
      "AlphaCore modular vertical farm",
      "SOFC solid oxide fuel cell",
      "SOFC-powered data center",
      "Circular infrastructure converting waste heat and CO2",
      "Core-20"
    ]
  }
};
