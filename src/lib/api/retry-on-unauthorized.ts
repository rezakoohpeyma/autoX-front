import { BetterFetchError } from "@better-fetch/fetch";

import { refreshTokenOnce } from "./auth/refresh-manager";
import { handleLogout } from "@/features/auth/lib/logout";

export async function retryOnUnauthorized<T>(
  request: () => Promise<T>,
): Promise<T> {
  try {
    return await request();
  } catch (error) {
    if (!(error instanceof BetterFetchError)) {
      throw error;
    }

    if (error.status !== 401) {
      throw error;
    }

    const success = await refreshTokenOnce();

    if (!success) {
      await handleLogout();
      throw error;
    }

    return await request();
  }
}
