import { baseResponseSchema, userSchema } from "@/schemas";
import z from "zod";
import { metaSchemas as ApiGetMetaSchemas } from "../schemas";

export const userManagementRoutes = {
    '/api/users': {
        output: baseResponseSchema.extend({
            data: z.array(userSchema),
            meta: ApiGetMetaSchemas,
        })
    }
}