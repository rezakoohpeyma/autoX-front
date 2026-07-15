import { firstNameSchema, lastNameSchema, passwordSchema, phoneNumberSchema } from "@/schemas";
import z from "zod";

export const metaSchemas = z.object({
    page: z.number(),
    limit: z.number(),
    totalItems: z.number().optional(),
    totalPages: z.number().optional(),
    hasNextPage: z.boolean().optional(),
    hasPreviousPage: z.boolean().optional()
})

// Form Schemas

export const createUserFormSchema = z.object({
    firstName: firstNameSchema,
    lastName: lastNameSchema,
    phoneNumber: phoneNumberSchema,
    email: z.email(),
    isActive: z.boolean(),
    rolesIds: z.array(z.number()),
    password: passwordSchema,
})

// Api Schemas

export const apiChangeStatusInputSchema = z.object({
    isActive: z.boolean(),
    ids: z.array(z.number()),
})

// Types

export type CreateUserFormType = z.infer<typeof createUserFormSchema>
export type MetaType = z.infer<typeof metaSchemas>;
export type ApiChangeStatusInputType = z.infer<typeof apiChangeStatusInputSchema>