import { defineCollection, reference, z } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    headline: z.string().optional(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    relatedProjects: z.array(reference("projects")).optional(),
  }),
});
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    sortOrder: z.number(),
    title: z.string(),
    year: z.number(),
    technologies: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    relatedArticle: reference("articles").optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
  projects: projectsCollection,
};
