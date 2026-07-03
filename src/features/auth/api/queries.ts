import { cFetch } from "@/services/cFetch";

export async function getMe(){
    const data = await cFetch('/api/auth/me');
    return data;
}
