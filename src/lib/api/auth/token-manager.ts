import {
  getToken,
  getRefreshToken,
  setTokens,
} from "@/features/auth/lib/token";

export const tokenManager = {
  getAccessToken: getToken,

  getRefreshToken,

  setTokens,
};