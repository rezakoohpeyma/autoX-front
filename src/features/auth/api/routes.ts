import z from "zod";
import { baseResponseSchema, passwordSchema, phoneNumberSchema, signInFormSchema, userSchema } from "../schema";

export const authRoutes = {
    '/api/auth/register': {
        input: z.object({
                firstName: z.string().min(2, 'First Name must be more than 2 characters'),
                lastName: z.string().min(2, 'Last Name must be more than 2 characters'),
                phoneNumber: phoneNumberSchema,
                email: z.email(),
                password: passwordSchema,
        }),
        output: baseResponseSchema.extend({
            data: z.object({
                token: z.string(),
                refreshToken: z.string(),
                tokenExpires: z.number(),
                user: userSchema,
            })
        }),
    },
    '/api/auth/login': {
        input: signInFormSchema,
        output: baseResponseSchema.extend({
            data: z.object({
                token: z.string(),
                refreshToken: z.string(),
                tokenExpires: z.number(),
                user: userSchema,

            })
        })
    }
};
