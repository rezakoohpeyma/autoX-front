'use client';

import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../api/mutations";
import { SignUpFormType } from "../schema";
import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";
import { toast } from "react-toastify";
import { setTokens } from "../lib/token";

export function useSignUp(){    
    const router = useRouter()
    const { mutate, isPending } = useMutation({
        mutationKey: ['user'],
        mutationFn: (data: SignUpFormType) =>  signUpApi(data),
        onSuccess: (res) => {
            toast.success("Account created! We're glad to have you")
            setTokens( res.data.token, res.data.refreshToken)
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