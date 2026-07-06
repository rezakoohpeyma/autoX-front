'use client';
import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../api/mutations";
import { handleLogout } from "../lib/logout";
import { toast } from "react-toastify";

export default function useLogout() {
    const { mutate, isPending } =  useMutation({
        mutationKey: ['logout'],
        mutationFn: logoutApi,
        onSuccess(){
            toast.success('Logged out successfully')
            setTimeout(() => handleLogout(), 1500)
        },
        onError(error){
            toast.error(error.message)
        }
    })
    
    return {
        logout: mutate,
        isLogoutLoading: isPending
    }
}

