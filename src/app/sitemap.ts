import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: process.env.BASE_URL || "https://iancarlosortega.com",
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${process.env.BASE_URL}/en` || "https://iancarlosortega.com/en",
			lastModified: new Date(),
			priority: 1,
		},
	];
}
