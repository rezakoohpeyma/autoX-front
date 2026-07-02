'use client';

import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../api/mutations";
import { SignUpFormType } from "../schema";
import { saveTokens } from "../lib/utils";
import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";
import { toast } from "react-toastify";

export function useSignUp(){    
    const router = useRouter()
    const { mutate, isPending } = useMutation({
        mutationKey: ['sign-up'],
        mutationFn: (data: SignUpFormType) =>  signUpApi(data),
        onSuccess: (user) => {
            toast.success("Account created! We're glad to have you")
            saveTokens(user.token, user.refreshToken)
            router.push(routes.dashboard)
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })
    return {
        signUp: mutate,
        isSignUpLoading: isPending,
    }
}