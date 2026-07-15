import { $fetch } from "@/lib/api/fetch";
import { retryOnUnauthorized } from "@/lib/api/retry-on-unauthorized";
import { MetaType } from "../schemas";

export async function getUsers(meta: MetaType){
    return retryOnUnauthorized(() => 
        $fetch('/api/users', {
            method: 'GET',
            query: {
                ...meta
            }
        })
    )
}

export async function getRoles(meta?: MetaType){
    return retryOnUnauthorized(() => 
        $fetch('/api/roles', {
            method: "GET",
            query: {
                ...meta
            }
        })
    )
}