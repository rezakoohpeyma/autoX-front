import { z } from 'zod'
export  const signInSchema = z.object({
    username: z.string().min(2, 'Username must be more than 2 characters.'),
    password: z.string().min(8, "Password must be more than 8 characters.")
})



export type SignInType = z.infer<typeof signInSchema>