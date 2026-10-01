import type { MetadataRoute } from "next";
import { areas } from "@/data/areas";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/about", "/areas", "/services", "/contact"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const areaPages = areas.map((a) => ({
    url: `${site.url}/areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...areaPages];
}
