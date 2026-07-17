import z from "zod";
import { firstNameSchema, lastNameSchema, passwordSchema, phoneNumberSchema, roleDescriptionSchema, roleNameSchema } from "@/schemas";

export const metaSchemas = z.object({
    page: z.number(),
    limit: z.number(),
    totalItems: z.number().optional(),
    totalPages: z.number().optional(),
    hasNextPage: z.boolean().optional(),
    hasPreviousPage: z.boolean().optional()
})

// Form Schemas

export const userFormSchema = z.object({
    firstName: firstNameSchema,
    lastName: lastNameSchema,
    phoneNumber: phoneNumberSchema,
    email: z.email(),
    isActive: z.boolean(),
    rolesIds: z.array(z.number()),
    password: passwordSchema,
})

export const roleFormSchema= z.object({
    name: roleNameSchema,
    description: roleDescriptionSchema,
    permissionIds: z.array(z.number()),
})

// Api Schemas

export const apiChangeStatusInputSchema = z.object({
    isActive: z.boolean(),
    ids: z.array(z.number()),
})

// Types

export type UserFormType = z.infer<typeof userFormSchema>
export type RoleFormType = z.infer<typeof roleFormSchema>
export type MetaType = z.infer<typeof metaSchemas>;
export type ApiChangeStatusInputType = z.infer<typeof apiChangeStatusInputSchema>