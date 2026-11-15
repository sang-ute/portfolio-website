import { MetadataRoute } from "next";

export const dynamic = "force-static";

// Single-page site: search engines ignore #fragments, so listing section
// anchors only creates duplicate entries. One canonical URL is correct.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sang-ute.github.io/portfolio-website/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
