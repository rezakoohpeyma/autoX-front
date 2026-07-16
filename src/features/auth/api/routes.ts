import { apiGetMeOutputSchema, signInFormSchema, apiSignUpInputSchema } from "../schemas";
import { userSchema, baseResponseSchema, tokenSchema,  } from "@/schemas";

export const authRoutes = {
    '/api/auth/register': {
        input: apiSignUpInputSchema,
        output: baseResponseSchema.extend({
            data: tokenSchema.extend({
                user: userSchema,
            })
        }),
    },
    '/api/auth/login': {
        input: signInFormSchema,
        output: baseResponseSchema.extend({
            data: tokenSchema.extend({
                user: userSchema,
            })
        })
    },
    '@post/api/auth/refresh': {
        output: baseResponseSchema.extend({
            data: tokenSchema
        })
    },
    "@post/api/auth/logout": {
        output: baseResponseSchema
    },
    "/api/auth/me":{
        output: baseResponseSchema.extend({
            data: apiGetMeOutputSchema
        })
    }

};
