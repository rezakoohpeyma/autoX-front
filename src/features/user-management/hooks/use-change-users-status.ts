'use client';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUsersStatus as changeUsersStatusApi } from "../api/mutations";
import { toast } from "react-toastify";
import { USERS_KEY } from "@/constants/query-keys";

export default function useChangeUsersStatus(){

    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationKey: ['users-status'],
        mutationFn: ({ userIds, status }: { userIds: number[], status: boolean }) => changeUsersStatusApi(userIds, status), 
        onSuccess() {
            toast.success('Change Users Status be Successfully')
            queryClient.invalidateQueries({
                queryKey: [USERS_KEY]
            })
        },
        onError(error){
            toast.error(error.message)
            console.error(error)
        }
    })

    return {
        changeUsersStatus: mutate,
        isChangeStatusLoading: isPending,
    }
}   

