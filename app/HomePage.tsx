import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Cpu,
  Database,
  Droplets,
  Factory,
  Fan,
  Globe2,
  Handshake,
  Leaf,
  Mail,
  PackageCheck,
  Phone,
  PlugZap,
  Snowflake,
  Sprout,
  ThermometerSnowflake,
  TrendingUp,
  Zap
} from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import HashScroll from "./components/HashScroll";
import { articles } from "./insights/articles";
import Reveal from "./components/Reveal";
import CasesGallery from "./components/CasesGallery";
import FarmModels from "./components/FarmModels";
import InquiryButton from "./components/InquiryButton";
import HeroMedia from "./components/HeroMedia";
import ChatWidget from "./components/ChatWidget";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { companyLegal, type Accent, type HomeContent } from "./home-content";

const baseUrl = "https://www.ceslprimus.com";

const problemIcons = [Leaf, Droplets, Zap, Building2];
const contactIcons = [Factory, Handshake, Globe2, Snowflake];
const energyIcons = [PlugZap, Cpu, Database, Fan];
const categoryIcons: Record<Accent, typeof Sprout> = {
  forest: Sprout,
  ice: ThermometerSnowflake,
  energy: Zap,
  amber: Globe2
};

const accentStyles: Record<Accent, { text: string; dot: string; bgSoft: string }> = {
  forest: { text: "text-forest", dot: "bg-forest", bgSoft: "bg-forest/10" },
  ice: { text: "text-ice", dot: "bg-ice", bgSoft: "bg-ice/10" },
  energy: { text: "text-energy", dot: "bg-energy", bgSoft: "bg-energy/10" },
  amber: { text: "text-amber", dot: "bg-amber", bgSoft: "bg-amber/10" }
};

function buildStructuredData(content: HomeContent) {
  const lang = content.locale === "ko" ? "ko-KR" : "en";
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: content.locale === "ko" ? companyLegal.displayName : companyLegal.displayNameEn,
      legalName: companyLegal.name,
      alternateName: ["쎄슬프라이머스", "CESeL Primus", "CESeL Primus Co., Ltd."],
      url: baseUrl,
      logo: `${baseUrl}/media/cesel-logo-ci-transparent.png`,
      image: `${baseUrl}/media/og-image.jpg`,
      taxID: companyLegal.businessNumber,
      foundingDate: companyLegal.startDate,
      address: {
        "@type": "PostalAddress",
        streetAddress: content.locale === "ko" ? companyLegal.address : companyLegal.addressEn,
        addressCountry: "KR"
      },
      description: content.seo.orgDescription,
      knowsAbout: content.seo.knowsAbout,
      sameAs: content.news.socialLinks.map(([, href]) => href),
      contactPoint: content.contact.contacts.flatMap((contact) =>
        contact.phones.map((phone) => ({
          "@type": "ContactPoint",
          name: contact.name,
          contactType: contact.role,
          telephone: phone.value,
          email: contact.email,
          areaServed: ["KR", "MY", "ASEAN"],
          availableLanguage: ["ko", "en"]
        }))
      )
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: content.locale === "ko" ? companyLegal.displayName : companyLegal.displayNameEn,
      inLanguage: lang,
      publisher: { "@id": `${baseUrl}/#organization` }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${content.pageUrl}/#webpage`,
      url: content.pageUrl,
      name: content.seo.webPageName,
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: { "@id": `${baseUrl}/#organization` },
      primaryImageOfPage: `${baseUrl}/media/og-image.jpg`,
      dateModified: "2026-06-11",
      inLanguage: lang
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${content.pageUrl}/#solution-list`,
      name: content.seo.lineupListName,
      itemListElement: content.lineup.categories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: category.name,
          alternateName: category.englishName,
          serviceType: category.tagline,
          description: category.subItems.map((item) => item.name).join(" · "),
          provider: { "@id": `${baseUrl}/#organization` },
          areaServed: ["KR", "MY", "ASEAN"]
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${content.pageUrl}/#faq`,
      mainEntity: content.faq.items.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${content.pageUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: content.seo.breadcrumbHome, item: content.pageUrl }
      ]
    }
  ];
}

export default function HomePage({ content }: { content: HomeContent }) {
  return (
    <main id="top" className="overflow-hidden">
      <HashScroll />
      <StructuredData data={buildStructuredData(content)} />
      <SiteHeader nav={content.nav} contact={content.contact} />
      <Hero content={content} />
      <PositioningSection content={content} />
      <ProblemSection content={content} />
      <LineupSection content={content} />
      <AlphaFarmSection content={content} />
      <AlphaCoolingSection content={content} />
      <AlphaEnergySection content={content} />
      <AlphaSupportSection content={content} />
      <CasesSection content={content} />
      <AudienceSection content={content} />
      <IpSection content={content} />
      <NewsSection content={content} />
      <FaqSection content={content} />
      <ContactSection content={content} />
      <Footer content={content} />
      <ChatWidget chat={content.chat} faq={content.faq} contact={content.contact} />
      <FloatingWhatsApp whatsapp={content.whatsapp} />
    </main>
  );
}

function StructuredData({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={line}>
          {index > 0 ? <br /> : null}
          {line}
        </Fragment>
      ))}
    </>
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

function Hero({ content }: { content: HomeContent }) {
  const { hero } = content;
  return (
    <section className="relative min-h-[94svh] w-full overflow-hidden bg-ink text-white">
      <HeroMedia alt={hero.imageAlt} />
      <div className="hero-mask absolute inset-0" />
      <div className="relative z-10 flex min-h-[94svh] flex-col">
        <Container className="flex flex-1 flex-col justify-center pb-16 pt-36 md:pt-40">
          <div className="max-w-3xl">
            <p className="reveal-up flex items-center gap-3 text-[1.02rem] font-semibold text-mint md:text-lg">
              <span aria-hidden className="h-px w-9 bg-mint/70" />
              {hero.eyebrow}
            </p>
            <h1 className="reveal-up mt-6 text-[2.6rem] font-bold leading-[1.16] tracking-tight md:text-[4.1rem] md:leading-[1.08]">
              <Lines lines={hero.titleLines} />
            </h1>
            <p className="reveal-up-delayed mt-7 max-w-2xl text-lg leading-relaxed text-white/82 md:text-[1.35rem] md:leading-relaxed">
              {hero.sub}
            </p>
            <div className="reveal-up-delayed mt-10 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[1.05rem] font-semibold text-ink transition hover:bg-mint"
                href="#lineup"
              >
                {hero.ctaPrimary} <ArrowRight className="h-5 w-5" />
              </a>
              <InquiryButton
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[1.05rem] font-semibold text-white ring-1 ring-inset ring-white/40 transition hover:bg-white/10 hover:ring-white"
                contact={content.contact}
              >
                {hero.ctaSecondary}
              </InquiryButton>
            </div>
          </div>
        </Container>
        <div className="reveal-up-late border-t border-white/16 bg-ink/30 backdrop-blur-sm">
          <Container className="grid grid-cols-2 gap-x-6 gap-y-7 py-8 md:grid-cols-4 md:py-9">
            {hero.stats.map((stat) => (
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

function PositioningSection({ content }: { content: HomeContent }) {
  const { positioning } = content;
  return (
    <section id="about" className="bg-white py-14 md:py-20">
      <Container>
        <Reveal>
          <div className="max-w-4xl">
            <Eyebrow>{positioning.eyebrow}</Eyebrow>
            <p className="mt-7 text-[1.55rem] font-bold leading-[1.4] tracking-tight text-ink md:text-[2.15rem] md:leading-[1.38]">
              {positioning.statementPre}
              <span className="text-forest">{positioning.statementHighlight}</span>
              {positioning.statementPost}
            </p>
            <p className="mt-7 max-w-3xl text-[1.08rem] leading-relaxed text-ink/68 md:text-[1.18rem]">
              {positioning.body}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ProblemSection({ content }: { content: HomeContent }) {
  const { problems } = content;
  return (
    <section className="py-14 md:py-20">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>{problems.eyebrow}</Eyebrow>
            <SectionTitle>
              <Lines lines={problems.titleLines} />
            </SectionTitle>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {problems.items.map((problem, index) => {
            const Icon = problemIcons[index] ?? Leaf;
            return (
              <Reveal key={problem.title} delay={index * 90}>
                <div className="group border-t-2 border-ink/12 pt-7 transition-colors duration-300 hover:border-forest">
                  <Icon className="h-9 w-9 text-forest transition duration-300 group-hover:-translate-y-1" />
                  <h3 className="mt-7 text-2xl font-bold leading-snug tracking-tight">{problem.title}</h3>
                  <p className="mt-3.5 text-[1.05rem] leading-relaxed text-ink/66 md:text-[1.1rem]">{problem.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function LineupSection({ content }: { content: HomeContent }) {
  const { lineup } = content;
  const detailHrefMap: Record<string, string> = {
    "#alphafarm": "/alphafarm",
    "#alphacooling": "/alphacooling",
    "#alphasupport": "/alphasupport"
  };
  const insightCats = new Set(articles.map((a) => a.category));
  const insightsLabel = content.locale === "en" ? "Related insights" : "관련 인사이트";
  return (
    <section id="lineup" className="bg-white py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <Eyebrow>{lineup.eyebrow}</Eyebrow>
              <SectionTitle>
                <Lines lines={lineup.titleLines} />
              </SectionTitle>
            </div>
            <p className="max-w-lg text-[1.02rem] leading-relaxed text-ink/62 md:pb-2">{lineup.aside}</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-2">
          {lineup.categories.map((category, index) => {
            const accent = accentStyles[category.accent];
            const Icon = categoryIcons[category.accent];
            return (
              <Reveal key={category.name} delay={(index % 2) * 100} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-paper ring-1 ring-ink/8 transition duration-300 hover:shadow-soft">
                  <div className="relative aspect-[16/9] overflow-hidden bg-ink md:aspect-[16/7]">
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${accent.bgSoft}`}>
                        <Icon className={`h-5 w-5 ${accent.text}`} />
                      </span>
                      <p className={`text-[0.95rem] font-bold tracking-wide ${accent.text}`}>
                        {lineup.lineupLabel} {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <h3 className={`text-[1.65rem] font-bold tracking-tight md:text-[1.85rem] ${accent.text}`}>
                      {category.name}
                    </h3>
                    <p className="mt-1 text-[1.02rem] font-semibold leading-snug text-ink/70">{category.tagline}</p>
                    <ul className="mt-4 space-y-2.5">
                      {category.subItems.map((item) => (
                        <li key={item.name} className="flex gap-2.5">
                          <span aria-hidden className={`mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                          <p className="text-[1rem] leading-relaxed">
                            <span className="font-bold text-ink">{item.name}</span>
                            {item.desc ? <span className="text-ink/58"> — {item.desc}</span> : null}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
                      <a
                        href={detailHrefMap[category.anchor] ?? category.anchor}
                        className={`inline-flex items-center gap-2 text-[1rem] font-semibold ${accent.text}`}
                      >
                        {lineup.detailLabel}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                      {insightCats.has(category.name) ? (
                        <a
                          href={`/insights?cat=${encodeURIComponent(category.name)}`}
                          className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-ink/55 transition hover:text-forest"
                        >
                          {insightsLabel}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={100}>
          <div className="mx-auto mt-10 flex max-w-4xl items-start gap-4 md:mt-12">
            <CheckCircle2 aria-hidden className="mt-1 h-6 w-6 shrink-0 text-forest" />
            <p className="text-lg font-bold leading-relaxed tracking-tight text-ink md:text-[1.25rem]">
              {lineup.statementPre}
              <span className="text-forest">{lineup.statementHighlight}</span>
              {lineup.statementPost}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function AlphaFarmSection({ content }: { content: HomeContent }) {
  const { alphafarm } = content;
  return (
    <section id="alphafarm" className="py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <Eyebrow>{alphafarm.eyebrow}</Eyebrow>
              <SectionTitle>
                <Lines lines={alphafarm.titleLines} />
              </SectionTitle>
            </div>
            <p className="text-[1.05rem] leading-relaxed text-ink/70 md:text-[1.12rem]">
              {alphafarm.bodyPre}
              <strong className="font-bold text-ink">{alphafarm.bodyStrong}</strong>
              {alphafarm.bodyPost}
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-6 rounded-2xl bg-white p-6 ring-1 ring-ink/8 sm:grid-cols-3 lg:grid-cols-5 md:mt-12 md:p-7">
            {alphafarm.flow.map((step, index) => (
              <div key={step} className="border-t-2 border-forest/25 pt-3">
                <p className="text-[0.88rem] font-bold text-forest">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-1 text-[1.02rem] font-semibold leading-snug text-ink">{step}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160}>
          <FarmModels models={alphafarm.models} />
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 grid gap-8 rounded-2xl bg-white p-6 ring-1 ring-ink/8 md:mt-12 md:p-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <figure className="relative overflow-hidden rounded-2xl bg-ink">
              <div className="relative aspect-[16/10]">
                <Image
                  src={alphafarm.core.image}
                  alt={alphafarm.core.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 48vw, 92vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <div>
              <Eyebrow>{alphafarm.core.eyebrow}</Eyebrow>
              <p className="mt-3 text-2xl font-bold tracking-tight text-ink md:text-3xl">{alphafarm.core.name}</p>
              <p className="mt-2 text-[1.05rem] font-semibold text-forest md:text-[1.12rem]">{alphafarm.core.lead}</p>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/72 md:text-[1.08rem]">{alphafarm.core.body}</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {alphafarm.core.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-paper px-3.5 py-1.5 text-[0.9rem] font-semibold text-ink ring-1 ring-ink/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function AlphaCoolingSection({ content }: { content: HomeContent }) {
  const { cooling } = content;
  return (
    <section id="alphacooling" className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal delay={140} className="order-last lg:order-first">
            <figure className="relative overflow-hidden rounded-2xl bg-ink shadow-soft">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/media/concepts/alphacooling-farm-concept-1.webp"
                  alt={cooling.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>{cooling.eyebrow}</Eyebrow>
              <SectionTitle>
                <Lines lines={cooling.titleLines} />
              </SectionTitle>
              <p className="mt-6 text-[1.08rem] leading-relaxed text-ink/70 md:text-[1.18rem]">{cooling.body}</p>
            </Reveal>
            <Reveal delay={110}>
              <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-3">
                {cooling.flow.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full bg-paper px-4 py-2 text-[1rem] font-semibold text-ink ring-1 ring-ink/10">
                      {step}
                    </span>
                    {index < cooling.flow.length - 1 ? (
                      <ArrowRight aria-hidden className="h-4 w-4 text-forest" />
                    ) : null}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 overflow-hidden rounded-2xl ring-1 ring-ink/8">
                {cooling.models.map(([name, desc], index) => (
                  <div
                    key={name}
                    className={`grid gap-2.5 bg-paper p-6 md:grid-cols-[230px_1fr] md:gap-6 md:p-7 ${
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

function AlphaEnergySection({ content }: { content: HomeContent }) {
  const { energy } = content;
  return (
    <section id="alphaenergy" className="py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>{energy.eyebrow}</Eyebrow>
            <SectionTitle>
              <Lines lines={energy.titleLines} />
            </SectionTitle>
            <p className="mt-6 text-[1.08rem] leading-relaxed text-ink/70 md:text-[1.18rem]">{energy.body}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {energy.products.map((product, index) => {
            const Icon = energyIcons[index] ?? PlugZap;
            return (
              <Reveal key={product.name} delay={index * 90}>
                <article className="h-full rounded-2xl bg-white p-6 ring-1 ring-ink/8 transition-colors duration-300 hover:ring-energy/35 md:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-energy/10">
                    <Icon className="h-6 w-6 text-energy" />
                  </span>
                  <h3 className="mt-5 text-[1.18rem] font-bold leading-snug tracking-tight text-ink">{product.name}</h3>
                  <p className="mt-2.5 text-[1rem] leading-relaxed text-ink/64">{product.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-white p-6 ring-1 ring-energy/25 md:flex-row md:items-center md:gap-6 md:p-7">
            <p className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-energy/10 px-4 py-1.5 text-[0.92rem] font-bold text-energy">
              <TrendingUp className="h-4 w-4" />
              {energy.futureTitle}
            </p>
            <p className="text-[1.02rem] leading-relaxed text-ink/70">{energy.futureBody}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function AlphaSupportSection({ content }: { content: HomeContent }) {
  const { support } = content;
  return (
    <section id="alphasupport" className="py-4 md:py-8">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] bg-forest text-white shadow-soft">
            <div className="grid md:grid-cols-[1.05fr_0.95fr]">
              <div className="p-8 md:p-14">
                <Eyebrow dark>{support.eyebrow}</Eyebrow>
                <SectionTitle dark>
                  <Lines lines={support.titleLines} />
                </SectionTitle>
                <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/76 md:text-[1.12rem]">
                  {support.body}
                </p>
                <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {support.items.map((item) => (
                    <p key={item} className="border-t border-white/22 pt-4 text-[1.06rem] font-medium text-white/88">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[320px] md:min-h-[480px]">
                <Image
                  src="/media/concepts/alphasupport-concept.webp"
                  alt={support.imageAlt}
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

function CasesSection({ content }: { content: HomeContent }) {
  const { cases } = content;
  return (
    <section id="cases" className="bg-white py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <Eyebrow>{cases.eyebrow}</Eyebrow>
              <SectionTitle>
                <Lines lines={cases.titleLines} />
              </SectionTitle>
            </div>
            <p className="max-w-lg text-[1.05rem] leading-relaxed text-ink/62 md:pb-2 md:text-[1.1rem]">
              {cases.body}
            </p>
          </div>
        </Reveal>
        <CasesGallery cases={cases} />
      </Container>
    </section>
  );
}

function AudienceSection({ content }: { content: HomeContent }) {
  const { audience } = content;
  return (
    <section className="py-14 md:py-20">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>{audience.eyebrow}</Eyebrow>
            <SectionTitle>
              <Lines lines={audience.titleLines} />
            </SectionTitle>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-x-10 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {audience.items.map((item, index) => (
            <Reveal key={item} delay={(index % 3) * 80}>
              <p className="flex min-h-[5.5rem] items-center gap-4 border-t border-ink/12 py-5 text-xl font-semibold leading-snug tracking-tight text-ink md:text-[1.32rem]">
                <PackageCheck className="h-6 w-6 shrink-0 text-forest" />
                {item}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function IpSection({ content }: { content: HomeContent }) {
  const { ip } = content;
  return (
    <section id="ip" className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <Eyebrow>{ip.eyebrow}</Eyebrow>
            <SectionTitle>
              <Lines lines={ip.titleLines} />
            </SectionTitle>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-ink/66 md:text-[1.12rem]">{ip.body}</p>
            {ip.note ? <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/60">{ip.note}</p> : null}
          </Reveal>
          <div>
            {ip.names.map((name, index) => (
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

function NewsSection({ content }: { content: HomeContent }) {
  const { news } = content;
  const latestInsights = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 9);
  return (
    <section id="news" className="py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>{news.eyebrow}</Eyebrow>
              <SectionTitle>
                <Lines lines={news.titleLines} />
              </SectionTitle>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {news.socialLinks.map(([label, href]) => (
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

        <Reveal delay={80}>
          <div className="mt-12 flex items-end justify-between md:mt-14">
            <p className="text-[1.05rem] font-bold text-ink">최신 인사이트</p>
            <a href="/insights" className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-forest hover:underline">
              전체 보기 <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestInsights.map((a, index) => (
            <Reveal key={a.slug} delay={(index % 3) * 90}>
              <a
                href={`/insights/${a.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8 transition duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                  <Image
                    src={content.locale === "en" && a.heroImageEn ? a.heroImageEn : a.heroImage}
                    alt={a.heroAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                    className="object-contain p-3 transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <p className="text-[0.95rem] font-bold text-forest">{a.category}</p>
                    <h3 className="mt-1.5 text-xl font-bold leading-snug tracking-tight text-ink md:text-[1.32rem]">{a.title}</h3>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink/35 transition group-hover:text-forest" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-14 text-[1.05rem] font-bold text-ink md:mt-16">공식 채널</p>
        </Reveal>
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.cards.map((item, index) => (
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
                    className="object-contain p-3 transition duration-700 group-hover:scale-[1.03]"
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

function FaqSection({ content }: { content: HomeContent }) {
  const { faq } = content;
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="max-w-[820px]">
        <Reveal>
          <div className="text-center">
            <p className="flex items-center justify-center gap-3 text-[1rem] font-semibold text-forest">
              <span aria-hidden className="h-px w-9 bg-forest/50" />
              {faq.label}
              <span aria-hidden className="h-px w-9 bg-forest/50" />
            </p>
            <h2 className="mt-5 text-[1.9rem] font-bold leading-[1.22] tracking-tight text-ink md:text-[2.7rem] md:leading-[1.14]">
              {faq.title}
            </h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 border-t border-ink/10">
            {faq.items.map((item) => (
              <details key={item.question} className="group border-b border-ink/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-bold leading-snug tracking-tight text-ink transition-colors hover:text-forest md:text-xl">
                  {item.question}
                  <span
                    aria-hidden
                    className="text-2xl font-medium leading-none text-forest transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-7 pr-10 text-[1.05rem] leading-relaxed text-ink/68 md:text-[1.1rem]">{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ContactSection({ content }: { content: HomeContent }) {
  const { contact } = content;
  return (
    <section id="contact" className="py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>{contact.eyebrow}</Eyebrow>
            <SectionTitle>
              <Lines lines={contact.titleLines} />
            </SectionTitle>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-ink/68 md:text-[1.12rem]">{contact.body}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:mt-14 lg:grid-cols-[1fr_0.92fr]">
          <Reveal delay={100}>
            <div className="h-full rounded-[1.5rem] bg-white p-2 ring-1 ring-ink/8">
              <div className="divide-y divide-ink/8">
                {contact.categories.map((category, index) => {
                  const Icon = contactIcons[index] ?? Factory;
                  return (
                    <div key={category.label} className="flex items-start gap-4 p-5 md:p-6">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest/10">
                        <Icon className="h-5 w-5 text-forest" />
                      </span>
                      <div>
                        <p className="text-[1.1rem] font-bold tracking-tight text-ink">{category.label}</p>
                        <p className="mt-1 text-[0.98rem] leading-relaxed text-ink/60">{category.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
          <div className="grid content-start gap-6">
            {contact.contacts.map((person, index) => (
              <Reveal key={person.email} delay={160 + index * 90}>
                <article
                  className={`flex h-full flex-col rounded-[1.5rem] bg-white p-6 ring-1 md:p-7 ${
                    person.primary ? "ring-forest/35" : "ring-ink/8"
                  }`}
                >
                  <p
                    className={`inline-flex w-fit rounded-full px-3.5 py-1 text-[0.88rem] font-bold ${
                      person.primary ? "bg-forest/10 text-forest" : "bg-ink/6 text-ink/60"
                    }`}
                  >
                    {person.tag}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink">{person.name}</h3>
                  <p className="mt-0.5 text-[1.02rem] font-semibold text-ink/58">{person.role}</p>
                  <div className="mt-5 divide-y divide-ink/8 border-t border-ink/8">
                    {person.phones.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="group flex items-center justify-between gap-3 py-3.5"
                      >
                        <span className="flex items-center gap-2.5 text-[0.95rem] font-semibold text-ink/52">
                          <Phone className="h-4 w-4 text-forest" />
                          {phone.label}
                        </span>
                        <span className="whitespace-nowrap text-[1.05rem] font-bold tracking-tight text-ink transition-colors group-hover:text-forest">
                          {phone.value}
                        </span>
                      </a>
                    ))}
                    <a href={`mailto:${person.email}`} className="group flex items-center justify-between gap-3 py-3.5">
                      <span className="flex shrink-0 items-center gap-2.5 text-[0.95rem] font-semibold text-ink/52">
                        <Mail className="h-4 w-4 text-forest" />
                        {person.emailLabel}
                      </span>
                      <span className="min-w-0 break-words text-right text-[0.9rem] font-bold text-forest">{person.email}</span>
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

function Footer({ content }: { content: HomeContent }) {
  const { footer } = content;
  return (
    <footer className="bg-ink text-white">
      <Container className="py-12 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Image
              src="/media/cesel-logo-ci-white-transparent.png"
              alt={content.locale === "ko" ? "쎄슬프라이머스" : "CESeL Primus"}
              width={203}
              height={50}
              className="h-auto w-36"
            />
            <p className="mt-4 text-[0.95rem] leading-relaxed text-white/72">{footer.brandDesc}</p>
          </div>
          <nav
            className="flex max-w-md flex-wrap gap-x-6 gap-y-1 text-[0.95rem] font-medium text-white/75 md:justify-end"
            aria-label={content.locale === "ko" ? "푸터 메뉴" : "Footer menu"}
          >
            {footer.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="inline-flex py-1.5 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-9 space-y-1.5 border-t border-white/10 pt-7 text-[0.88rem] leading-relaxed text-white/68">
          {footer.bizLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.88rem] text-white/65 md:flex-row md:items-center md:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {content.news.socialLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex py-1.5 text-white/75 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
