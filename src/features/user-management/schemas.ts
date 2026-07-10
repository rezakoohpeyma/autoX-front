import z from "zod";

export const metaSchemas = z.object({
    page: z.number(),
    limit: z.number(),
    totalItems: z.number().optional(),
    totalPages: z.number().optional(),
    hasNextPage: z.boolean().optional(),
    hasPreviousPage: z.boolean().optional()
})

export const apiChangeStatusInputSchema = z.object({
    isActive: z.boolean(),
    ids: z.array(z.number()),
})

// Types

export type MetaType = z.infer<typeof metaSchemas>;
export type ApiChangeStatusInputType = z.infer<typeof apiChangeStatusInputSchema>