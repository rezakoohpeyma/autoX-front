import {
    baseResponseSchema,
    apiGetMeOutputSchema,
    signInFormSchema,
    userSchema, 
    tokenSchema, 
    apiSignUpInputSchema 
} from "../schema";

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
    '/api/auth/refresh': {
        output: baseResponseSchema.extend({
            data: tokenSchema
        })
    },
    "/api/auth/logout": {
        output: baseResponseSchema
    },
    "/api/auth/me":{
        output: baseResponseSchema.extend({
            data: apiGetMeOutputSchema
        })
    }

};
