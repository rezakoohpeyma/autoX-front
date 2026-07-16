import z from "zod";
import { baseResponseSchema, permissionSchema, permissionsNameSchema, rolesSchema, userSchema } from "@/schemas";
import { apiChangeStatusInputSchema, createRoleFormSchema, createUserFormSchema, metaSchemas } from "../schemas";

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
                permissions: permissionsNameSchema,
            })
        })
    },
    '@patch/api/users/status': {
        input: apiChangeStatusInputSchema,
        output: baseResponseSchema.extend({
            data: userSchema.extend({
                permission: permissionsNameSchema
            })
        })
    },
    "/api/roles": {
        output: baseResponseSchema.extend({
            data: z.array(rolesSchema),
            meta: metaSchemas,
        })
    },
    "@post/api/roles": {
        input: createRoleFormSchema,
        output: baseResponseSchema.extend({
            data: rolesSchema,
        })
    },
    "@get/api/permissions": {
        output: baseResponseSchema.extend({
            data: z.array(permissionSchema),
            meta: metaSchemas,
        })
    }
}


