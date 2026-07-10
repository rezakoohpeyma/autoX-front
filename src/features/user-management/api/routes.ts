import { baseResponseSchema, permissionsSchema, userSchema } from "@/schemas";
import z from "zod";
import { apiChangeStatusInputSchema, metaSchemas as ApiGetMetaSchemas } from "../schemas";

export const userManagementRoutes = {
    '/api/users': {
        output: baseResponseSchema.extend({
            data: z.array(userSchema),
            meta: ApiGetMetaSchemas,
        })
    },
    '@patch/api/users/status': {
        input: apiChangeStatusInputSchema,
        output: baseResponseSchema.extend({
            data: userSchema.extend({
                permission: permissionsSchema
            })
        })
    }
}