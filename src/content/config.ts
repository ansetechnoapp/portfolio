import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			tech:z.array(z.string()),
			publishDate: z.coerce.date(),
			number:z.number(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			github: z.string().optional(),
			liveDemo: z.string().optional(),
			device: z.string().optional(),
			additionalImages: z.array(z.object({
				url: z.string(),
				alt: z.string().optional()
			})).optional(),
		}),
	}),
	widgetCss: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			href: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};