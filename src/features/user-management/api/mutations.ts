import { $fetch } from "@/lib/api/fetch";
import { retryOnUnauthorized } from "@/lib/api/retry-on-unauthorized";
import { CreateUserFormType } from "../schemas";

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

export async function createNewUser(user: CreateUserFormType){
    return retryOnUnauthorized(() => 
        $fetch('@post/api/users', {
            method: "POST",
            body: user
        })
    )
}