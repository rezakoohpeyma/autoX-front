'use client';

import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../api/queries";
import { USER_KEY } from "@/constants/query-keys";

export default function useGetCurrentUser(userId: string){
    const { data, isLoading } = useQuery({
        queryKey:[ USER_KEY, userId ],
        queryFn: () => getCurrentUser(userId),
    })

    return {
        currentUser: data?.data,
        isCurrentUserLoading: isLoading
    }

}

