import z from "zod";

export const metaSchemas = z.object({
    page: z.number(),
    limit: z.number(),
    totalItems: z.number().optional(),
    totalPages: z.number().optional(),
    hasNextPage: z.boolean().optional(),
    hasPreviousPage: z.boolean().optional()
})

// Types

export type MetaType = z.infer<typeof metaSchemas>;