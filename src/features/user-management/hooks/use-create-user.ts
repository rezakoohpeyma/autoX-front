'use client';

import { CREATE_USER_KEY } from "@/constants/query-keys";
import { useMutation } from "@tanstack/react-query";
import { createNewUser as createNewUserApi } from "../api/mutations";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { routes } from "@/config/routes";

export default function useCreateUser() {
    const router = useRouter()

    const { mutate , isPending } = useMutation({
        mutationKey: [CREATE_USER_KEY],
        mutationFn: createNewUserApi,
        onSuccess(user){
            toast.success(`${user.data.firstName} account was created successfully.`)
            router.push(routes.userManagementUsers)
        },
        onError(error){
            toast.error(error.message)
        }
    })

    return {
        createNewUser: mutate,
        isCreateLoading: isPending
    }
}

