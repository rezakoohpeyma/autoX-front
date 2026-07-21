'use client';

import { ROLE_KEY } from "@/constants/query-keys";
import { useQuery } from "@tanstack/react-query";
import { getCurrentRole } from "../api/queries";

export default function useGetCurrentRole(userId: string) {
    const { data, isLoading } = useQuery({
        queryKey: [ ROLE_KEY ,userId],
        queryFn: () => getCurrentRole(userId)
    })

    return {
        currentRole: data?.data,
        isCurrentRoleLoading: isLoading,
    }
}

