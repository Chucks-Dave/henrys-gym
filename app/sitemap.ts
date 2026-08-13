import type { MetadataRoute } from "next";

const siteUrl = "https://www.egbeyouthboxing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-08-13"),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/hero-image.png`,
        `${siteUrl}/boxing-logo.jpg`,
        `${siteUrl}/PHOTO-2026-08-10-03-47-50%202.jpg`,
        `${siteUrl}/PHOTO-2026-08-10-03-47-49%204.jpg`,
      ],
    },
  ];
}
