import z from "zod";

export const firstNameSchema = z.string().min(2, 'First Name must be more than 2 characters');
export const lastNameSchema = z.string().min(2, 'Last Name must be more than 2 characters');
export const roleNameSchema = z.string().min(2, 'Role name must be more than 2 characters');
export const roleDescriptionSchema = z.string().min(2, 'Role description must be more than 2 characters');

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

export const permissionsNameSchema = z.array(z.string())

export const rolesNameSchema = z.array(z.object({
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

export const rolesSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    isActive: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export const permissionSchema = z.object({
    id: z.number(),
    action: z.string(),
    subject: z.string(),
    description: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

// Types

// Reusable Types
export type RoleType = z.infer<typeof rolesSchema>;
export type UserType = z.infer<typeof userSchema>;
export type PermissionType = z.infer<typeof permissionSchema>
export type PermissionsNameType = z.infer<typeof permissionsNameSchema>;
export type DeleteAtType = z.infer<typeof deleteAtSchema>;