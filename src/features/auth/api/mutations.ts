// import { cFetch, refreshFetch } from "@/services/cFetch";
import { SignUpFormType, SignInFormType } from "../schemas";
import { $fetch } from "@/lib/api/fetch";
import { retryOnUnauthorized } from "@/lib/api/retry-on-unauthorized";


export async function signUp(formData: SignUpFormType){
    return retryOnUnauthorized(() => 
        $fetch('/api/auth/register', {
            method: "POST",
            body: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                password: formData.password,
            }
    }))
} 

export async function signIn(formData: SignInFormType){
    return retryOnUnauthorized(() => 
        $fetch('/api/auth/login', {
            method: "POST",
            body: {
                phoneNumber: formData.phoneNumber,
                password: formData.password,
            }
        })
    )
}

export async function logout() {
    return retryOnUnauthorized(() => 
        $fetch('/api/auth/logout', {
            method: "POST"
        })
    )
}