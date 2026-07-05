import { getToken } from "@/features/auth/lib/utils";
import { createFetch } from "@better-fetch/fetch";
import { env } from "@/config/env";
import { schema } from "./schema";

// export function rawFetch<T extends string, U>(input: T, init: U)


export const rawFetch = createFetch({
  baseURL: env.API_BASE_URL,
  schema,
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