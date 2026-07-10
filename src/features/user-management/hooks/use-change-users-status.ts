'use client';
import { useMutation } from "@tanstack/react-query";
import { changeUsersStatus as changeUsersStatusApi } from "../api/mutations";
import { toast } from "react-toastify";

export default function useChangeUsersStatus(){
    const { mutate, isPending } = useMutation({
        mutationKey: ['users-status'],
        mutationFn: ({userIds, status}: { userIds: number[], status: boolean }) => changeUsersStatusApi(userIds, status), 
        onSuccess() {
            toast.success('Change Users Status be Successfully')
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

