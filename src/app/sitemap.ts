import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: process.env.BASE_URL || "https://iancarlosortega.com",
			lastModified: new Date(),
			priority: 1,
		},
	];
}
