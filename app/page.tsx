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
    company: "쎄슬프라이머스 주식회사",
    phones: [{ label: "휴대전화", value: "010-3341-6036", href: "tel:01033416036" }],
    email: "rkdghtn636@gmail.com",
    primary: true
  },
  {
    name: "이관호",
    role: "대표",
    company: "쎄슬프라이머스 주식회사",
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

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <IntroBand />
      <ProblemSection />
      <PortfolioSection />
      <AlphaFarmSection />
      <LineupGallerySection />
      <LineupDepth />
      <AudienceSection />
      <ProofSection />
      <MotionSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function LineupGallerySection() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-base font-semibold text-forest">라인업 이미지</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-5xl">
              네 가지 라인업을 각각의 현장 이미지로 보여줍니다.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink/68">
            알파팜을 기준점으로 두고, 알파쿨링·알파에너지·알파서포트가 어떤 문제를 맡는지 한눈에 비교할 수 있도록 이미지 흐름을 분리했습니다.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {portfolio.map((item) => (
            <figure key={`${item.name}-gallery`} className="group overflow-hidden rounded-lg bg-white shadow-soft">
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <Image src={item.image} alt={`${item.name} 대표 이미지`} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="flex items-center justify-between gap-4 p-6">
                <div>
                  <p className="text-2xl font-semibold text-ink">{item.name}</p>
                  <p className="mt-2 text-base font-semibold text-ink/62">{item.label}</p>
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
    <section className="relative min-h-[92svh] w-full overflow-hidden bg-ink text-white">
      <Image
        src="/media/hero-integrated-solution-v2.png"
        alt="쎄슬프라이머스 통합 솔루션 비주얼"
        fill
        priority
        className="slow-drift object-cover"
      />
      <div className="hero-mask absolute inset-0" />
      <header className="absolute inset-x-0 top-0 z-20 mx-auto flex w-[min(1180px,92vw)] items-center justify-between py-5">
        <a href="#" aria-label="쎄슬프라이머스 홈" className="rounded-md bg-white/95 px-3 py-2 shadow-soft backdrop-blur">
          <Image
            src="/media/cesel-logo-ci-transparent.png"
            alt="쎄슬프라이머스"
            width={203}
            height={50}
            className="h-auto w-40 md:w-52"
          />
        </a>
        <nav className="hidden items-center gap-8 text-base font-semibold text-white/86 md:flex">
          <a href="#lineup" className="transition hover:text-white">라인업</a>
          <a href="#news" className="transition hover:text-white">소식</a>
          <a href="#contact" className="transition hover:text-white">문의</a>
        </nav>
      </header>
      <div className="relative z-10 mx-auto flex min-h-[92svh] w-[min(1180px,92vw)] items-center pb-20 pt-32">
        <div className="max-w-3xl">
          <h1 className="reveal-up text-5xl font-semibold leading-[1.06] tracking-normal md:text-7xl">
            테크 인텔리전스 솔루션
          </h1>
          <p className="reveal-up-delayed mt-7 max-w-2xl text-2xl font-semibold leading-snug text-white md:text-3xl">
            농식품·콜드체인 인프라를 위한 통합 솔루션 포트폴리오
          </p>
          <p className="reveal-up-delayed mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
            알파팜에서 검증된 운영 경험과 기술 기반을 토대로 재배, 기후, 전력, 제어, 콜드체인, 데이터, 사업화 지원을 연결합니다.
          </p>
          <div className="reveal-up-delayed mt-10 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-md bg-mint px-6 py-4 text-base font-semibold text-ink transition hover:bg-white" href="#lineup">
              라인업 보기 <ArrowRight className="h-5 w-5" />
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-white/32 px-6 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/10" href={businessInquiryMail}>
              사업개발 문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroBand() {
  return (
    <section className="mx-auto -mt-10 w-[min(1180px,92vw)] rounded-lg bg-white/96 p-6 shadow-soft backdrop-blur md:p-8">
      <div className="grid gap-5 md:grid-cols-[0.7fr_1.6fr] md:items-center">
        <p className="text-lg font-semibold text-forest md:text-xl">핵심 방향</p>
        <p className="max-w-4xl text-xl font-semibold leading-relaxed text-ink md:text-3xl">
          알파팜에서 출발한 운영 경험을 기후제어, 에너지관리, 콜드체인, 데이터, 사업화 지원으로 확장하는 구조입니다.
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
    <section className="bg-white py-24">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <p className="text-base font-semibold text-forest">알파팜</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink md:text-6xl">
            연중 딸기 사업솔루션을 하나의 운영 패키지로 제공합니다.
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink/70 md:text-xl">
            알파팜은 단순 재배 설비가 아니라 프리미엄 딸기 생산, 매장 운영, 공간 경험, 컨테이너팜 검증을 연결한 사업화 모델입니다. 고객은 재배와 운영, 판매까지 이어지는 구조를 도입하고 쎄슬프라이머스는 구축 이후 운영 지원까지 함께 설계합니다.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {alphaFarmModels.map(([name, desc]) => (
              <div key={name} className="border-t border-ink/12 pt-4">
                <p className="text-lg font-semibold text-ink">{name}</p>
                <p className="mt-2 text-base leading-7 text-ink/66">{desc}</p>
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
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="lineup" className="bg-ink py-24 text-white">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-base font-semibold text-mint">라인업</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">네 가지 솔루션이 하나의 포트폴리오로 연결됩니다.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            고객은 단일 제품이 아니라 사업 단계와 목적에 맞는 조합형 솔루션을 도입합니다. 초기 홈페이지는 라인업을 먼저 명확히 보여주고, 알파팜 오픈 이후 별도 메뉴로 확장합니다.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {portfolio.map((item) => (
            <article key={item.name} className="group overflow-hidden rounded-lg border border-white/12 bg-white/[0.04] transition hover:-translate-y-1 hover:bg-white/[0.08]">
              <div className="relative aspect-[4/3] overflow-hidden bg-white/8">
                <Image src={item.image} alt={`${item.name} 이미지`} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-md ${item.bg}`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-7 text-3xl font-semibold">{item.name}</h3>
                <p className={`mt-3 text-base font-semibold ${item.tone}`}>{item.label}</p>
                <p className="mt-5 text-base leading-7 text-white/70">{item.summary}</p>
                <div className="mt-7 space-y-3">
                  {item.items.map((entry) => (
                    <div key={entry} className="flex items-start gap-3 text-base text-white/88">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{entry}</span>
                    </div>
                  ))}
                </div>
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

function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="text-base font-semibold text-forest">문의</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            프로젝트 목적에 맞는 조합형 솔루션을 검토하세요.
          </h2>
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
                  <a key={phone.href} href={phone.href} className="flex items-center gap-3 rounded-md bg-white px-4 py-4 text-base font-semibold text-ink transition hover:text-forest">
                    <Phone className="h-5 w-5 shrink-0 text-forest" />
                    <span>{phone.label}</span>
                    <span className="ml-auto">{phone.value}</span>
                  </a>
                ))}
                <a href={`mailto:${contact.email}`} className="flex items-center justify-center gap-3 rounded-md bg-forest px-4 py-4 text-base font-semibold text-white transition hover:bg-ink">
                  <Mail className="h-5 w-5" />
                  이메일 보내기
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
    <footer className="bg-ink py-12 text-white">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-2xl font-semibold">쎄슬프라이머스 주식회사</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/66">
            농식품·콜드체인 인프라를 위한 통합 솔루션 포트폴리오 기업입니다. 알파팜, 알파쿨링, 알파에너지, 알파서포트를 연결해 생산부터 사업화 지원까지 확장합니다.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">대표 문의</p>
          <div className="mt-4 space-y-2 text-sm leading-6 text-white/68">
            <p>사업개발: 강호수</p>
            <p>대표: 이관호</p>
            <a href={businessInquiryMail} className="inline-flex items-center gap-2 pt-2 font-semibold text-mint">
              사업개발 문의하기 <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">공식 채널</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-md border border-white/14 px-3 py-2 text-sm text-white/72 transition hover:border-mint hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
