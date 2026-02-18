import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

const ventures = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    sector: z.string(),
    status: z.enum(["active", "exited", "invested"]),
    acquiredBy: z.string().optional(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

const investments = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    sector: z.string(),
    description: z.string(),
    url: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  pages,
  ventures,
  investments,
};
