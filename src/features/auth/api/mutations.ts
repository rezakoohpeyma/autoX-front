import { cFetch, refreshFetch } from "@/services/cFetch";
import { SignUpFormType, AuthType, SignInFormType} from "../schema";
import { getRefreshToken, saveTokens } from "../lib/utils";
import { rawFetch } from "@/services/cFetch/raw-fetch";


export async function signUp(formData: SignUpFormType){
    const data = await cFetch('/api/auth/register', {
        method: "POST",
        body: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            password: formData.password,
        }
    })
    return data;
} 

export async function signIn(formData: SignInFormType){
    const data = await cFetch('/api/auth/login', {
        method: "POST",
        body: {
            phoneNumber: formData.phoneNumber,
            password: formData.password,
        }
    })
    return data;
}

export async function handleRefreshToken() {
    try{
        const lastRefreshToken = getRefreshToken();
        if (!lastRefreshToken) return false;

        const { refreshToken, token } : AuthType = await refreshFetch('/api/auth/refresh', {
            method: "POST"
        });

        await saveTokens(token, refreshToken);

        return true
    }catch(error){
        return false
    }
}

export async function logout() {
    const data = rawFetch('/api/auth/logout', {
        method: "POST"
    });
    
    return data;
}