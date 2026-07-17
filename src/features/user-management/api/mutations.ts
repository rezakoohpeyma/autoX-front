import { $fetch } from "@/lib/api/fetch";
import { retryOnUnauthorized } from "@/lib/api/retry-on-unauthorized";
import { RoleFormType, UserFormType } from "../schemas";

export async function createNewUser(user: UserFormType){
    return retryOnUnauthorized(() => 
        $fetch('@post/api/users', {
            method: "POST",
            body: user
        })
    )
}

export async function editCurrentUser(user: UserFormType, userId : string){
    return retryOnUnauthorized(() => 
        $fetch('@put/api/users/:id', {
            method: "PUT",
            body: user,
            params: {
                id: userId   
            }
        })
    )
}

export async function changeUsersStatus(userIds: number[], status: boolean){
    return retryOnUnauthorized(() => 
        $fetch('@patch//api/users/status', {
            method: 'PATCH',
            body: {
                isActive: status,
                ids: [
                    ...userIds
                ]
            }
        })
    )
} 

export async function createNewRole(role: RoleFormType){
    return retryOnUnauthorized(() => 
        $fetch('@post/api/roles', {
            method: 'POST',
            body: role,
        })
    )
}