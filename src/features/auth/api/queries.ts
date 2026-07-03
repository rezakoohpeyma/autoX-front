import { cFetch } from "@/services/cFetch";
import { AuthType } from "../schema";

export async function getMe(){
    const data = await cFetch('/api/auth/me');
    return data as AuthType;
}
