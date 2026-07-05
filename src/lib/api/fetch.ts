import { createFetch } from "@better-fetch/fetch";
import { env } from "@/config/env";
import { schema } from "./schema";
import { tokenManager } from "./auth/token-manager";

export const $fetch = createFetch({
  baseURL: env.API_BASE_URL,
  schema,
  throw: true,

  headers: {
    accept: "application/json",
  },

  async onRequest(req) {
    const token = await tokenManager.getAccessToken(); // after create token-manager.ts this code be change

    if (token) {
      req.headers.set("Authorization", `Bearer ${token}`);
    }
  },
});

