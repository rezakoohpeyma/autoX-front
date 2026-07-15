'use client';
import { useQuery } from '@tanstack/react-query';
import { MetaType } from '../schemas';
import { getUsers } from '../api/queries';
import { USERS_KEY } from '@/constants/query-keys';

type UseGetUsersQueries = {
    search?: string,
} & MetaType

export default function useGetUsers(queries : UseGetUsersQueries) {
    const { data, isLoading } =  useQuery({
        queryKey: [USERS_KEY, queries],
        queryFn: () => getUsers(queries)
    })
    return {
        users: data?.data,
        meta: data?.meta,
        isUsersLoading: isLoading,
    }
}

