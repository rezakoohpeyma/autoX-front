import { createFetch } from "@better-fetch/fetch";
import { env } from "process";
import { tokenManager } from "./auth/token-manager";
import { schema } from "./schema";

export const refreshFetch = createFetch({
  baseURL: env.API_BASE_URL,
  throw: true,
  schema,
  headers: {
    accept: 'application/json'
  },
  async onRequest(req){
    const refresh_token = await tokenManager.getRefreshToken();
    if(refresh_token) req.headers.set("Authorization", `Bearer ${refresh_token}`);
  },
});