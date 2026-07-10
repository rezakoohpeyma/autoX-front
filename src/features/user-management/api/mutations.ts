import { $fetch } from "@/lib/api/fetch";
import { retryOnUnauthorized } from "@/lib/api/retry-on-unauthorized";

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