import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/poslugy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...services.map<MetadataRoute.Sitemap[number]>((s) => ({
      url: `${base}/poslugy/${s.slug}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    })),
  ];

  return entries;
}
