import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "../../components/ArticleLayout";
import { articles, getArticle } from "../articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const url = `https://www.ceslprimus.com/insights/${a.slug}`;
  return {
    title: { absolute: a.metaTitle },
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: {
      title: a.metaTitle,
      description: a.description,
      url,
      siteName: "쎄슬프라이머스",
      locale: "ko_KR",
      type: "article",
      images: [{ url: a.heroImage, alt: a.heroAlt }]
    }
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleLayout article={article} />;
}
