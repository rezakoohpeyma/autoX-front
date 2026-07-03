import { env } from "@/config/env";
import { getRefreshToken, handleLogout } from "@/features/auth/lib/utils";
import { BetterFetchError, createFetch } from "@better-fetch/fetch";
import { rawFetch } from "./raw-fetch";
import { refreshTokenOnce } from "./refresh-manager";

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

export async function cFetch(
  input: Parameters<typeof rawFetch>[0],
  init?: Parameters<typeof rawFetch>[1]
) {
  try {
    return await rawFetch(input, init);
  } catch (error) {
    if (!(error instanceof BetterFetchError)) {
        throw error;
    }

    if (error.status !== 401) {
        throw error;
    }


    const success = await refreshTokenOnce();

    if (!success) {
      handleLogout();
      throw error;
    }

    // دوباره همان Request
    return rawFetch(input, init);
  }
}