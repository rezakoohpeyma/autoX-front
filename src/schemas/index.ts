import z from "zod";

export const passwordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
    .refine(val => !val.includes(' '), 'Password must not contain spaces')


export const phoneNumberSchema = z
    .string()
    .min(1, 'Mobile number is required')
    .regex(/^09\d{9}$/, "Mobile number is not valid (must start with 09 and be 11 digits)");
;

export const permissionsSchema = z.array(z.string())

export const rolesSchema = z.array(z.object({
    name: z.string()
}))

export const deleteAtSchema = z.string().nullable();

export const baseResponseSchema = z.object({
    success: z.boolean(),
    statusCode: z.number(),
    message: z.string(),
    timestamp: z.string(),
    path: z.string()
})

export const tokenSchema = z.object({
    token: z.string(),
    refreshToken: z.string(),
    tokenExpires: z.number(),
})

export const userSchema = z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    isActive: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: deleteAtSchema,
})


// Types

// Reusable Types
export type UserType = z.infer<typeof userSchema>;
export type PermissionsType = z.infer<typeof permissionsSchema>;
export type RolesType = z.infer<typeof rolesSchema>;
export type DeleteAtType = z.infer<typeof deleteAtSchema>;