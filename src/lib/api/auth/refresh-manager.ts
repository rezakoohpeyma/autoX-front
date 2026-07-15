import { tokenManager } from "./token-manager";
import { refreshFetch } from "../refresh-fetch";
import { BetterFetchError } from "@better-fetch/fetch";

let refreshPromise: Promise<boolean> | null = null;

export async function refreshTokenOnce(): Promise<boolean> {

    if(refreshPromise){
        return refreshPromise
    }

    refreshPromise = (async () => {
        try{
            const res = await refreshFetch('@post/api/auth/refresh', {
                method: "POST"
            });

            tokenManager.setTokens(
                res.data.token,
                res.data.refreshToken,
            )

            return true;
        } catch(error){
            if (error instanceof BetterFetchError) {
                console.error("Refresh failed:", error.message);
            }
            return false;
        } finally{
            refreshPromise = null
        }
    })();

    return refreshPromise;

}