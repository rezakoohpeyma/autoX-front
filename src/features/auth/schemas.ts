import { phoneNumberSchema, permissionsSchema, passwordSchema, rolesNameSchema, firstNameSchema, lastNameSchema } from '@/schemas'
import { z } from 'zod'

// Form Schemas

export const signInFormSchema = z.object({
    phoneNumber: phoneNumberSchema,
    password: passwordSchema,
})

export const signUpFormSchema = z.object({
    firstName: firstNameSchema,
    lastName: lastNameSchema,
    phoneNumber: phoneNumberSchema,
    email: z.email(),
    password: passwordSchema,
    confirmPassword: passwordSchema,
    terms: z.literal(true, "Terms & Conditions is required"),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
})

export const resetPasswordFormSchema = z.object({
    phoneNumber: phoneNumberSchema,
    password: passwordSchema
})

// Api Schemas (input, output)

export const apiSignUpInputSchema = z.object({
    firstName: firstNameSchema,
    lastName: lastNameSchema,
    phoneNumber: phoneNumberSchema,
    email: z.email(),
    password: passwordSchema,
})

export const apiGetMeOutputSchema = z.object({
    email: z.email(),
    phoneNumber: phoneNumberSchema,
    roles: rolesNameSchema,        
    permissions: permissionsSchema,
})


// Types

// Form Types
export type SignInFormType = z.infer<typeof signInFormSchema>;
export type SignUpFormType = z.infer<typeof signUpFormSchema>;
export type ResetPasswordType = z.infer<typeof resetPasswordFormSchema>

// Api Types
export type ApiSignUpInputType = z.infer<typeof apiSignUpInputSchema>;
export type ApiGetMeOutputType = z.infer<typeof apiGetMeOutputSchema>;