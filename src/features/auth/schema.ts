import { z } from 'zod'
export const signInSchema = z.object({
    username: z.string().min(2, 'Username must be more than 2 characters'),
    password: z.string().min(8, "Password must be more than 8 characters")
})

export const signUpSchema = z.object({
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


export type SignInType = z.infer<typeof signInSchema>
export type SignUpType = z.infer<typeof signUpSchema>