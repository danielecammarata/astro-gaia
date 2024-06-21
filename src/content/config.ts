import { defineCollection, z } from "astro:content";

const seoSchema = z.object({
	title: z.string().min(5).max(120).optional(),
	description: z.string().min(15).max(160).optional(),
	image: z
		.object({
			src: z.string(),
			alt: z.string().optional(),
		})
		.optional(),
	pageType: z.enum(["website", "article"]).default("website"),
});

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		excerpt: z.string().optional(),
		publishedAt: z.coerce.date(),
		category: z.string().optional(),
		updatedDate: z.coerce.date().optional(),
		isFeatured: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
		seo: seoSchema.optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
