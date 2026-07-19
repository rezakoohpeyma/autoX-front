'use client';

import { EDIT_ROLE_KEY } from "@/constants/query-keys";
import { useMutation } from "@tanstack/react-query";
import { RoleFormType } from "../schemas";
import { editCurrentRole as editCurrentRoleAPi } from "../api/mutations";
import { routes } from "@/config/routes";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function useEditRole() {

    const router = useRouter()

    const { mutate, isPending} = useMutation({
        mutationKey: [EDIT_ROLE_KEY],
        mutationFn: ({ role, userId }: {userId: string, role: RoleFormType}) => editCurrentRoleAPi(role, userId),
        onSuccess(role) {
            toast.success(`${role.data.name} role was updated successfully.`)
            router.push(routes.userManagementAddRoles)
        },
        onError(err) {
            toast.error(err.message);
        }
    })

    return {
        editCurrentRole: mutate,
        isEditingLoading: isPending,
    }
}

