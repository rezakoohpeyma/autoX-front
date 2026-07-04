import { z } from 'zod'

const passwordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
    .refine(val => !val.includes(' '), 'Password must not contain spaces')

const phoneNumberSchema = z
    .string()
    .min(1, 'Mobile number is required')
    .regex(/^09\d{9}$/, "Mobile number is not valid (must start with 09 and be 11 digits)");
;

export const userSchema = z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    isActive: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),

})
export const signInFormSchema = z.object({
    phoneNumber: phoneNumberSchema,
    password: passwordSchema,
})

export const signUpFormSchema = z.object({
    firstName: z.string().min(2, 'First Name must be more than 2 characters'),
    lastName: z.string().min(2, 'Last Name must be more than 2 characters'),
    phoneNumber: phoneNumberSchema,
    email: z.email(),
    password: passwordSchema,
    confirmPassword: passwordSchema,
    terms: z.literal(true, "Terms & Conditions is required"),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
})

export const refreshTokenSchema = z.object({
    token: z.string(),
    refreshToken: z.string(),
    tokenExpires: z.number(),
    user: userSchema
})

export const authSchema = z.object({
    token: z.string(),
    refreshToken: z.string(),
    tokenExpires: z.number(),
    user: userSchema
})

export type UserType = z.infer<typeof userSchema>;
export type RefreshTokenType = z.infer<typeof refreshTokenSchema>;
export type AuthType = z.infer<typeof authSchema>;
export type SignInFormType = z.infer<typeof signInFormSchema>;
export type SignUpFormType = z.infer<typeof signUpFormSchema>;