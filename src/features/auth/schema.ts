import { z } from 'zod'

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
    phoneNumber: z.string()
    .length(11, 'Phone Number must be 11 characters')
    .regex(/^\d+$/, { message: "Phone number must only contain numbers" }),
    password: z.string().min(8, "Password must be more than 8 characters")
})

export const signUpFormSchema = z.object({
    firstName: z.string().min(2, 'First Name must be more than 2 characters'),
    lastName: z.string().min(2, 'Last Name must be more than 2 characters'),
    phoneNumber: z.string()
    .length(11, 'Phone Number must be 11 characters')
    .regex(/^\d+$/, { message: "Phone number must only contain numbers" }),
    email: z.email(),
    password: z.string().min(8, "Password must be more than 8 characters"),
    confirmPassword: z.string().min(8, "Password must be more than 8 characters"),
    rules: z.boolean(),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
})

export const refreshTokenSchema = z.object({
    "token": z.string(),
    "refreshToken": z.string(),
    "tokenExpires": z.number(),
    "user": userSchema
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