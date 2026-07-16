'use client';

import { CREATE_ROLE_KEY } from "@/constants/query-keys";
import { useMutation } from "@tanstack/react-query";
import { createNewRole as createNewRoleApi } from "../api/mutations";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { routes } from "@/config/routes";

export default function useCreateRole() {
    const router = useRouter()

    const { mutate , isPending } = useMutation({
        mutationKey: [CREATE_ROLE_KEY],
        mutationFn: createNewRoleApi,
        onSuccess(user){
            toast.success(`${user.data.name} role was created successfully.`)
            router.push(routes.userManagementRoles)
        },
        onError(error){
            toast.error(error.message)
        }
    })

    return {
        createNewRole: mutate,
        isCreateLoading: isPending
    }
}

