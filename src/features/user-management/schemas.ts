import { firstNameSchema, lastNameSchema, passwordSchema, permissionsNameSchema, phoneNumberSchema, roleDescriptionSchema, roleNameSchema } from "@/schemas";
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

export const createRoleFormSchema= z.object({
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

export type CreateUserFormType = z.infer<typeof createUserFormSchema>
export type CreateRoleFormType = z.infer<typeof createRoleFormSchema>
export type MetaType = z.infer<typeof metaSchemas>;
export type ApiChangeStatusInputType = z.infer<typeof apiChangeStatusInputSchema>