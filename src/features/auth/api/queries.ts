import { retryOnUnauthorized } from "@/lib/api/retry-on-unauthorized";
import { $fetch } from "@/lib/api/fetch";

export async function getMe(){
    return retryOnUnauthorized(() => 
        $fetch('/api/auth/me', {
            method: "GET",
        })
    )
}
