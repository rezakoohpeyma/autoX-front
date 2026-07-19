import z from "zod";
import { baseResponseSchema, permissionSchema, permissionsNameSchema, rolesSchema, userSchema } from "@/schemas";
import { apiChangeStatusInputSchema, roleFormSchema, userFormSchema, metaSchemas } from "../schemas";

export const userManagementRoutes = {
    '@get/api/users': {
        output: baseResponseSchema.extend({
            data: z.array(userSchema),
            meta: metaSchemas,
        })
    },
    "@get/api/users/:id": {
        output: baseResponseSchema.extend({
            data: userSchema
        })
    },
    "@post/api/users": {
        input: userFormSchema,
        output: baseResponseSchema.extend({
            data: userSchema.extend({
                permissions: permissionsNameSchema,
            })
        })
    },
    "@put/api/users/:id": {
        input: userFormSchema,
        output: baseResponseSchema.extend({
            data: userSchema.extend({
                permissions: permissionsNameSchema
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
    "@get/api/roles": {
        output: baseResponseSchema.extend({
            data: z.array(rolesSchema),
            meta: metaSchemas,
        })
    },
    "@post/api/roles": {
        input: roleFormSchema,
        output: baseResponseSchema.extend({
            data: rolesSchema,
        })
    },
    "@get/api/roles/:id": {
        output: baseResponseSchema.extend({
            data: rolesSchema
        })
    },
    "@put/api/roles/:id": {
        input: roleFormSchema,
        output: baseResponseSchema.extend({
            data: rolesSchema.extend({
                permissions: permissionsNameSchema
            })
        })
    },
    "@get/api/permissions": {
        output: baseResponseSchema.extend({
            data: z.array(permissionSchema),
            meta: metaSchemas,
        })
    }
}


