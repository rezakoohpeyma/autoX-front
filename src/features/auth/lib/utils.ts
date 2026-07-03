import { routes } from "@/config/routes";

export const TOKEN = "token";
export const REFRESH_TOKEN = "refresh_token";
export async function getDataFromCookie(key: string) {
  // Server Component
  if (typeof window === "undefined") {
    const { cookies } = await import("next/headers");
    const cookiesStore = await cookies();
    const data = cookiesStore.get(key)?.value;
    return data;
  }

  // Client Component
  const { default: cookies } = await import("js-cookie");
  const data = cookies.get(key);
  return data;
}
export async function setDataOnCookie(name: string, value: string) {
  // Server Component
  if (typeof window === "undefined") {
    const { cookies } = await import("next/headers");
    const cookiesStore = await cookies();
     cookiesStore.set(name, value);
  }

  // Client Component
  const { default: cookies } = await import("js-cookie");
  const data = cookies.set(name, value);
  return data;
}

export async function getToken() {
  return await getDataFromCookie(TOKEN);
}
export async function getRefreshToken() {
  return await getDataFromCookie(REFRESH_TOKEN);
}


export async function saveTokens(accessToken: string, newRefreshToken?: string) {
  await setDataOnCookie(TOKEN, accessToken)
  if(newRefreshToken) await setDataOnCookie(REFRESH_TOKEN, newRefreshToken)
}

export async function handleLogout() {
    if (typeof window === 'undefined') {
        const { cookies } = await import('next/headers');
        const { redirect } = await import('next/navigation');
        const cookiesStore = await cookies();
        cookiesStore.delete(TOKEN);
        cookiesStore.delete(REFRESH_TOKEN);
        redirect(routes.signIn);
    } else {
        const { default: cookies } = await import('js-cookie');
        cookies.remove(TOKEN);
        cookies.remove(REFRESH_TOKEN);
        window.location.assign(routes.signIn);
    }
}