import { authRoutes } from "@/features/auth/api/routes";
import { userManagementRoutes } from "@/features/user-management/api/routes";
import { createSchema } from "@better-fetch/fetch";

export const schema = createSchema({
    // Auth Feature
    ...authRoutes,

    // User Management Feature
    ...userManagementRoutes
})