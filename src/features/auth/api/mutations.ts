import { cFetch, refreshFetch } from "@/services/cFetch";
import { RefreshTokenType, SignUpFormType, AuthType, SignInFormType } from "../schema";
import { getRefreshToken, saveTokens } from "../lib/utils";


export async function signUp(formData: SignUpFormType): Promise<AuthType>{
    const data = await cFetch('/api/auth/register', {
        method: "POST",
        body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            password: formData.password,
            isActive: true,
        })
    })
    return data as AuthType;
} 

export async function signIn(formData: SignInFormType){
    const data = await cFetch('/api/auth/login', {
        method: "POST",
        body: JSON.stringify({
            phoneNumber: formData.phoneNumber,
            password: formData.password,
        })
    })
    return data as AuthType;
}

export async function handleRefreshToken() {
    try{
        const lastRefreshToken = getRefreshToken();
        if (!lastRefreshToken) return false;

        const { refreshToken, token } : RefreshTokenType = await refreshFetch('/api/auth/refresh', {
            method: "POST"
        });

        await saveTokens(token, refreshToken);

        return true
    }catch(error){
        return false
    }
}

export async function logout() {
    const data = cFetch('/api/auth/logout', {
        method: "POST"
    });
    
    return data;
}