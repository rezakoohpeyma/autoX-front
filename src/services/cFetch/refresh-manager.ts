import { handleRefreshToken } from "@/features/auth/api/mutations";

let refreshPromise: Promise<boolean> | null = null;

export async function refreshTokenOnce() {
  if (!refreshPromise) {
    refreshPromise = handleRefreshToken().finally(() => {
      refreshPromise = null;
    });
  }

  return refreshPromise;
}