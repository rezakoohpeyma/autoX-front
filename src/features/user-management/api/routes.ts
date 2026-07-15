import { baseResponseSchema, permissionsSchema, rolesSchema, userSchema } from "@/schemas";
import z from "zod";
import { apiChangeStatusInputSchema,createUserFormSchema,metaSchemas } from "../schemas";

export const userManagementRoutes = {
    '/api/users': {
        output: baseResponseSchema.extend({
            data: z.array(userSchema),
            meta: metaSchemas,
        })
    },
    "@post/api/users": {
        input: createUserFormSchema,
        output: baseResponseSchema.extend({
            data: userSchema.extend({
                permissions: permissionsSchema,
            })
        })
    },
    '@patch/api/users/status': {
        input: apiChangeStatusInputSchema,
        output: baseResponseSchema.extend({
            data: userSchema.extend({
                permission: permissionsSchema
            })
        })
    },
    "/api/roles": {
        output: baseResponseSchema.extend({
            data: z.array(rolesSchema),
            meta: metaSchemas,
        })
    },
}