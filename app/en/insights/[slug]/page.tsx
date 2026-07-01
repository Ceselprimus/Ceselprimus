import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "../../../components/ArticleLayout";
import { articles, getArticle, isLive } from "../../../insights/articles";

export function generateStaticParams() {
  return articles.filter((a) => a.en && isLive(a)).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a || !a.en) return {};
  const url = `https://www.ceslprimus.com/en/insights/${a.slug}`;
  return {
    title: { absolute: a.en.metaTitle },
    description: a.en.description,
    keywords: a.keywords,
    alternates: {
      canonical: `/en/insights/${a.slug}`,
      languages: { "ko-KR": `/insights/${a.slug}`, en: `/en/insights/${a.slug}` }
    },
    openGraph: {
      title: a.en.metaTitle,
      description: a.en.description,
      url,
      siteName: "CESeL Primus",
      locale: "en_US",
      type: "article",
      images: [{ url: a.heroImageEn ?? a.heroImage, alt: a.heroAlt }]
    }
  };
}

export default async function EnArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || !article.en || !isLive(article)) notFound();
  return <ArticleLayout article={article} locale="en" />;
}
