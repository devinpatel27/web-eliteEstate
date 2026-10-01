import type { Metadata } from "next";
import { images } from "@/data/images";
import { site } from "@/data/site";

type Options = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function buildMetadata({ title, description, path = "/", image }: Options = {}): Metadata {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} · Ahmedabad Real Estate Advisory`;
  const desc = description ?? site.description;
  const ogImage = image ?? `${images.hero.src}?w=1200&h=630&fit=crop&q=75`;
  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: path,
      siteName: site.name,
      title: fullTitle,
      description: desc,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc, images: [ogImage] },
  };
}
