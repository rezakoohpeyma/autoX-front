import { getToken } from "@/features/auth/lib/utils";
import { createFetch } from "@better-fetch/fetch";
import { env } from "@/config/env";

export const rawFetch = createFetch({
  baseURL: env.API_BASE_URL,
  throw: true,

  headers: {
    accept: "application/json",
  },

  async onRequest(req) {
    const token = await getToken();

    if (token) {
      req.headers.set("Authorization", `Bearer ${token}`);
    }
  },
});