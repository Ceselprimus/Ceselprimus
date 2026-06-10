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
  Factory,
  Globe2,
  Leaf,
  LineChart,
  PackageCheck,
  Snowflake,
  Sprout,
  ThermometerSnowflake,
  Truck,
  Zap
} from "lucide-react";

const portfolio = [
  {
    name: "AlphaFarm",
    label: "프리미엄 딸기 생산 · 리테일 · 공간경험",
    tone: "text-forest",
    bg: "bg-forest",
    icon: Sprout,
    summary:
      "AlphaCore, AlphaCafe, Experience Portfolio, Alpha ContainerFarm을 고객 목적에 맞춰 조합하는 사업 플랫폼입니다.",
    items: ["AlphaCore", "AlphaCafe", "Experience Portfolio", "Alpha ContainerFarm"]
  },
  {
    name: "AlphaCooling",
    label: "저온제습 · HGR · 콜드체인 컨테이너",
    tone: "text-ice",
    bg: "bg-ice",
    icon: ThermometerSnowflake,
    summary:
      "재배실, 식품공정, 포장실, 콜드체인 컨테이너까지 습도와 공급공기 상태를 함께 관리합니다.",
    items: ["AlphaCooling-Farm", "AlphaCooling-HGR", "AlphaCooling-Container"]
  },
  {
    name: "AlphaEnergy",
    label: "전력 · 제어 · 데이터 통합 관리",
    tone: "text-energy",
    bg: "bg-energy",
    icon: BatteryCharging,
    summary:
      "EMS와 PCU를 AlphaEnergy 체계 안에서 통합해 고소비 설비의 운영 안정성과 에너지 효율화를 지원합니다.",
    items: ["AlphaEnergy-EMS", "AlphaEnergy-PCU", "Alpha Power Panel", "AI Control G/W"]
  },
  {
    name: "AlphaSupport",
    label: "실증 · 구축 · 운영 · 사업화 지원",
    tone: "text-amber",
    bg: "bg-amber",
    icon: Globe2,
    summary:
      "ASEAN 시장 적합성 검증부터 현지 실증, 구축, 운영, 사업화 제안까지 실행을 지원합니다.",
    items: ["Market Fit", "PoC", "Commercialization", "Partner Support"]
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
  ["AlphaCore", "대형 프리미엄 딸기 생산기지"],
  ["AlphaCafe", "생산과 프리미엄 리테일을 연결하는 모델"],
  ["Experience Portfolio", "호텔, 쇼룸, 베이커리 공간을 브랜드 경험으로 전환"],
  ["Alpha ContainerFarm", "40ft HC 기반 소형 생산 · 검증형 엔트리 모델"]
];

const coolingModels = [
  ["Farm", "딸기 재배실 전용 저온제습 · 냉각 패키지"],
  ["HGR", "식품공정 · 포장실용 Inline HGR 제습 유닛"],
  ["Container", "철기연 기술이전 특허 기반 ESS 연계 콜드체인 컨테이너"]
];

const energyModels = [
  {
    title: "AlphaEnergy-EMS",
    items: ["Alpha Power Panel", "AI Control G/W", "Alpha Data Management System"],
    body: "전력센서, 제어 게이트웨이, 이미지·센서·에너지 데이터를 하나의 운영 레이어로 연결합니다."
  },
  {
    title: "AlphaEnergy-PCU",
    items: ["PreCooling Integrated Outdoor Unit", "쿨링 실외기 전력절감", "피크부하 안정화", "고온외기 대응"],
    body: "고온 외기와 피크부하에 대응하는 실외기 전력 안정화 방향의 에너지 효율화 솔루션입니다."
  }
];

const audiences = [
  "베이커리 · 프리미엄 카페",
  "호텔 · 쇼룸 · 리테일 공간",
  "식품공장 · 포장실",
  "냉동창고 · 저온물류 시설",
  "창고 · 건물 보유 고객",
  "ASEAN 사업화 파트너"
];

const news = [
  {
    title: "Alpha Solution Portfolio",
    channel: "Lineup",
    image: "/media/alpha-solution-portfolio-0610.png"
  },
  {
    title: "AlphaCooling 저온제습 솔루션",
    channel: "Naver Blog",
    image: "/media/alphacooling-food-factory.png"
  },
  {
    title: "Low-Temperature Dehumidification",
    channel: "LinkedIn",
    image: "/media/alphacooling-linkedin-0610.png"
  }
];

const contactItems: Array<[ComponentType<{ className?: string }>, string]> = [
  [Factory, "식품공장 · 포장실 저온제습 문의"],
  [Truck, "콜드체인 · 저온물류 인프라 문의"],
  [LineChart, "전력 · 제어 · 데이터 운영관리 문의"],
  [Database, "실증 · 구축 · 해외 사업화 문의"]
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <section className="mx-auto -mt-10 w-[min(1180px,92vw)] rounded-lg bg-white/95 p-5 shadow-soft backdrop-blur md:p-7">
        <div className="grid gap-4 md:grid-cols-[1.1fr_1.6fr] md:items-center">
          <p className="text-sm font-semibold uppercase text-forest">Alpha Solution Portfolio</p>
          <p className="text-xl font-semibold leading-snug text-ink md:text-2xl">
            AlphaFarm에서 검증된 운영 경험과 기술 기반을 토대로, 재배 · 기후 · 전력 · 제어 · 콜드체인 · 데이터 · 사업화 지원을 연결합니다.
          </p>
        </div>
      </section>
      <ProblemSection />
      <PortfolioSection />
      <LineupDepth />
      <AudienceSection />
      <ProofSection />
      <MotionSection />
      <NewsSection />
      <ContactSection />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92svh] w-full overflow-hidden bg-ink text-white">
      <Image
        src="/media/hero-integrated-solution-v2.png"
        alt="CESeL Primus integrated food infrastructure solution visual"
        fill
        priority
        className="slow-drift object-cover"
      />
      <div className="hero-mask absolute inset-0" />
      <header className="absolute inset-x-0 top-0 z-20 mx-auto flex w-[min(1180px,92vw)] items-center justify-between py-5">
        <Image
          src="/media/cesel-logo-ci-white-transparent.png"
          alt="CESeL Primus"
          width={203}
          height={50}
          className="h-auto w-40 drop-shadow-[0_2px_14px_rgba(255,255,255,0.26)] md:w-52"
        />
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/78 md:flex">
          <a href="#lineup">Lineup</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="relative z-10 mx-auto flex min-h-[92svh] w-[min(1180px,92vw)] items-center pb-20 pt-28">
        <div className="max-w-3xl">
          <p className="reveal-up text-sm font-semibold uppercase text-mint">CESeL Primus</p>
          <h1 className="reveal-up mt-5 text-5xl font-semibold leading-[1.04] tracking-normal md:text-7xl">
            Tech Intelligence Solution
          </h1>
          <p className="reveal-up-delayed mt-6 max-w-2xl text-xl leading-8 text-white/88 md:text-2xl">
            농식품·콜드체인 인프라를 위한 통합 솔루션 포트폴리오
          </p>
          <p className="reveal-up-delayed mt-5 max-w-xl text-base leading-7 text-white/72">
            AlphaFarm에서 출발해 기후제어, 에너지관리, 콜드체인, 데이터, 사업화 지원으로 확장합니다.
          </p>
          <div className="reveal-up-delayed mt-10 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-md bg-mint px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white" href="#lineup">
              라인업 보기 <ArrowRight className="h-4 w-4" />
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-white/28 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10" href="#contact">
              프로젝트 문의
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="mx-auto w-[min(1180px,92vw)] py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase text-forest">Where CESeL Works</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-5xl">
          문제는 하나의 설비가 아니라, 운영 전체에서 발생합니다.
        </h2>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {problems.map((problem) => (
          <div key={problem.title} className="group border-t border-ink/16 pt-6 transition hover:border-forest">
            <problem.icon className="h-8 w-8 text-forest transition group-hover:-translate-y-1" />
            <h3 className="mt-8 text-xl font-semibold">{problem.title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink/66">{problem.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="lineup" className="bg-ink py-24 text-white">
      <div className="mx-auto w-[min(1180px,92vw)]">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-mint">Lineup</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">Four connected operating layers.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/68">
            고객은 단일 제품이 아니라 사업 단계와 목적에 맞는 조합형 솔루션을 도입합니다. 초기 메뉴는 라인업 중심으로 단순하게 시작하고, AlphaFarm 오픈 후 독립 페이지로 확장합니다.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {portfolio.map((item) => (
            <article key={item.name} className="rounded-lg border border-white/12 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]">
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-md ${item.bg}`}>
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-7 text-2xl font-semibold">{item.name}</h3>
              <p className={`mt-2 text-sm font-semibold ${item.tone}`}>{item.label}</p>
              <p className="mt-5 text-sm leading-6 text-white/66">{item.summary}</p>
              <div className="mt-7 space-y-2">
                {item.items.map((entry) => (
                  <div key={entry} className="flex items-center gap-2 text-sm text-white/84">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    {entry}
                  </div>
                ))}
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
        eyebrow="AlphaFarm"
        title="프리미엄 딸기 생산에서 리테일과 공간경험까지 연결합니다."
        body="AlphaFarm은 시설 판매가 아니라 생산, 판매, 공간경험, 검증형 엔트리를 하나의 사업 플랫폼으로 연결하는 구조입니다."
        icon={<Sprout className="h-6 w-6" />}
        rows={alphaFarmModels}
      />
      <DepthBlock
        eyebrow="AlphaCooling"
        title="습도 제어에서 균일한 기후와 품질 리스크 저감으로 이어집니다."
        body="단순 냉방이 아니라 노점, 표면결로, 공급공기 상태까지 함께 관리하는 저온제습 중심 기후제어 제품군입니다."
        icon={<Snowflake className="h-6 w-6" />}
        rows={coolingModels}
        image="/media/alphacooling-food-factory.png"
      />
      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="sticky top-8">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-energy text-white">
            <CircuitBoard className="h-6 w-6" />
          </div>
          <p className="mt-8 text-sm font-semibold uppercase text-energy">AlphaEnergy</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            EMS와 PCU를 AlphaEnergy 체계 안에서 정리합니다.
          </h2>
          <p className="mt-5 text-base leading-7 text-ink/68">
            기존 AlphaEMS 단독 표현은 지양하고, 전력·제어·데이터 운영관리와 PCU 기반 에너지 효율화를 하나의 AlphaEnergy 라인업으로 보여줍니다.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {energyModels.map((model) => (
            <article key={model.title} className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
              <h3 className="text-2xl font-semibold">{model.title}</h3>
              <p className="mt-4 text-sm leading-6 text-ink/66">{model.body}</p>
              <div className="mt-8 space-y-3">
                {model.items.map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-medium">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy" />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="rounded-lg bg-forest p-8 text-white md:p-12">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-mint">AlphaSupport</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              실증 이후 사업화되는 구조까지 함께 설계합니다.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["ASEAN 시장 적합성 검증", "현지 실증 · 생산기반 구축 지원", "저온제습 공조 컨설팅", "현지 사업화 제안 지원", "작업환경 개선 서비스", "프리미엄 농식품 리테일 지원"].map((item) => (
              <div key={item} className="border-t border-white/18 pt-4 text-sm text-white/82">
                {item}
              </div>
            ))}
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
        <p className="mt-8 text-sm font-semibold uppercase text-forest">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
        <p className="mt-5 text-base leading-7 text-ink/68">{body}</p>
      </div>
      <div className="space-y-4">
        {image ? (
          <Image src={image} alt={`${eyebrow} reference visual`} width={900} height={900} className="aspect-[16/10] w-full rounded-lg object-cover shadow-soft" />
        ) : null}
        <div className="overflow-hidden rounded-lg border border-ink/10 bg-white">
          {rows.map(([name, desc]) => (
            <div key={name} className="grid gap-2 border-b border-ink/8 p-5 last:border-0 md:grid-cols-[220px_1fr]">
              <p className="font-semibold">{name}</p>
              <p className="text-sm leading-6 text-ink/66">{desc}</p>
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
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-forest">Applications</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            생산 현장부터 리테일, 포장실, 저온물류까지 확장합니다.
          </h2>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div key={audience} className="flex items-center gap-4 border-t border-ink/12 py-5 text-lg font-semibold">
              <PackageCheck className="h-5 w-5 shrink-0 text-forest" />
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
    <section className="mx-auto grid w-[min(1180px,92vw)] gap-10 py-24 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-sm font-semibold uppercase text-forest">IP & Technology Assets</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
          실증과 사업화로 이어질 수 있는 권리·기술 자산을 보유합니다.
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          ["10", "등록특허", "고밀도 재배·생육분석 등 생산·운영 기반"],
          ["3", "상표권", "AlphaFarm 등 브랜드 식별 자산"],
          ["1", "저작권", "운영·소프트웨어 자산"],
          ["3+", "출원 중", "Airflow·DSRP 등 연속생산 관련 기술"],
          ["4+", "출원 대기", "AlphaCooling·EMS 등 인프라 확장 기술"],
          ["1", "기술이전", "철기연 콜드체인 컨테이너 기반 사업화"]
        ].map(([value, label, desc]) => (
          <div key={label} className="rounded-lg border border-ink/10 bg-white p-6">
            <p className="text-4xl font-semibold text-forest">{value}</p>
            <p className="mt-3 font-semibold">{label}</p>
            <p className="mt-2 text-sm leading-6 text-ink/62">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MotionSection() {
  return (
    <section id="motion-film" className="bg-ink py-24 text-white">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase text-mint">Motion Film</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            한 화면에서 포트폴리오의 확장 방향을 보여줍니다.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/68">
            AlphaFarm에서 출발한 운영 경험을 기후제어, 에너지관리, 콜드체인, 데이터, 사업화 지원으로 확장하는 흐름을 시각적으로 보여줍니다.
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
            CESeL Primus portfolio motion film
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
          <p className="text-sm font-semibold uppercase text-forest">News & SNS</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">최신 콘텐츠를 검색용 자산으로 연결합니다.</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-ink/64">
          LinkedIn, 네이버 블로그, Facebook, Instagram 콘텐츠는 News 또는 Insights 섹션으로 확장합니다.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {news.map((item) => (
          <article key={item.title} className="group overflow-hidden rounded-lg bg-white shadow-soft">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase text-forest">{item.channel}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase text-forest">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            프로젝트 목적에 맞는 조합형 솔루션을 검토하세요.
          </h2>
        </div>
        <div className="rounded-lg bg-paper p-6">
          {contactItems.map(([Icon, label]) => (
            <div key={label} className="flex items-center gap-4 border-b border-ink/10 py-4 last:border-0">
              <Icon className="h-5 w-5 text-forest" />
              <span className="font-semibold">{label}</span>
            </div>
          ))}
          <a href="mailto:kevinlee@ceslprimus.com" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-forest px-5 py-4 text-sm font-semibold text-white transition hover:bg-ink">
            사업개발 문의하기 <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
