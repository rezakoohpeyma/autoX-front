'use client';

import { EDIT_USER_KEY } from "@/constants/query-keys";
import { useMutation } from "@tanstack/react-query";
import { editCurrentUser as editCurrentUserApi  } from "../api/mutations";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { routes } from "@/config/routes";
import { UserFormType } from "../schemas";

export default function useEditUser() {
    const router = useRouter()

    const { mutate , isPending } = useMutation({
        mutationKey: [EDIT_USER_KEY],
        mutationFn: (
            { user, userId } : { user: UserFormType, userId: string }
        ) =>
            editCurrentUserApi(user, userId),
        onSuccess(user){
            toast.success(`${user.data.firstName} account was updated successfully.`)
            router.push(routes.userManagementUsers)
        },
        onError(error){
            toast.error(error.message)
            console.error(error.message)
        }
    })

    return {
        editCurrentUser: mutate,
        isEditingLoading: isPending,
    }
}

