import { $fetch } from "@/lib/api/fetch";
import { retryOnUnauthorized } from "@/lib/api/retry-on-unauthorized";
import { MetaType } from "../schemas";

export async function getUsers(meta: MetaType){
    return retryOnUnauthorized(() => 
        $fetch('@get/api/users', {
            query: meta
        })
    )
}

export async function getCurrentUser(userId: string){
    return retryOnUnauthorized(() => 
        $fetch('@get/api/users/:id' , {
            params: {
                id: userId
            }
        })
    )
}

export async function getRoles(meta?: MetaType){
    return retryOnUnauthorized(() => 
        $fetch('@get/api/roles', {
            query: meta
        })
    )
}

export async function getCurrentRole(userId: string){
    return retryOnUnauthorized(() => 
        $fetch('@get/api/roles/:id', {
            params: {
                id: userId,
            }
        })
    )
}

export async function getPermissions(meta?: MetaType){
    return retryOnUnauthorized(() => 
        $fetch('@get/api/permissions', {
            query: meta
        })
    )
}