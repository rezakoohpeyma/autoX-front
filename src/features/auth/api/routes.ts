import z from "zod";
import { baseResponseSchema, ApiGetMeOutput, signInFormSchema, userSchema, ApiSignUpInput, tokenSchema } from "../schema";

export const authRoutes = {
    '/api/auth/register': {
        input: ApiSignUpInput,
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
            data: ApiGetMeOutput
        })
    }

};
