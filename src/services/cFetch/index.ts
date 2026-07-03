import { env } from "@/config/env";
import { handleRefreshToken } from "@/features/auth/api/mutations";
import { getRefreshToken, getToken, handleLogout } from "@/features/auth/lib/utils";
import { createFetch, ErrorContext } from "@better-fetch/fetch";

interface ErrorContextWithRetry extends ErrorContext {
    retry: () => Promise<void>; 
}

export const refreshFetch = createFetch({
  baseURL: env.API_BASE_URL,
  throw: true,
  headers: {
    accept: 'application/json'
  },
  async onRequest(req){
    const refresh_token = await getRefreshToken();
    if(refresh_token) req.headers.set("Authorization", `Bearer ${refresh_token}`);
  },
});

export const cFetch = createFetch({
  baseURL: env.API_BASE_URL,
  throw: true,
  headers: {
    accept: 'application/json'
  },
  async onRequest(req) {
    const token =  await getToken();
    if(token) req.headers.set("Authorization", `Bearer ${token}`);
  },
  async onError(context){


      const { error, retry } = context as ErrorContextWithRetry;

      if (error.status === 401) {
      try {
        const success = await handleRefreshToken();
        if (success) {
          return retry(); 
        }
      } catch (refreshError) {
        console.error("Refresh process failed", refreshError);
      }
    }
    

    if(error.status === 401 || error.status === 400) 
      handleLogout()

    console.error(error);
  }
});
