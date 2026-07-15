'use client';
import { useQuery } from '@tanstack/react-query';
import { MetaType } from '../schemas';
import { getRoles } from '../api/queries';
import { ROLES_KEY } from '@/constants/query-keys';

type UseGetRolesQueries = {
    search?: string,
} & MetaType

export default function useGetRoles(queries? : UseGetRolesQueries) {
    const { data, isLoading } =  useQuery({
        queryKey: [ROLES_KEY, queries],
        queryFn: () => getRoles(queries)
    })
    return {
        roles: data?.data,
        meta: data?.meta,
        isRolesLoading: isLoading,
    }
}

