'use client';
import { useQuery } from '@tanstack/react-query';
import { MetaType } from '../schemas';
import { getUsers } from '../api/queries';

type UseGetUsersQueries = {
    search?: string,
} & MetaType

export default function useGetUsers(queries : UseGetUsersQueries) {
    const { data, isLoading, refetch, isRefetching } =  useQuery({
        queryKey: ['users', queries],
        queryFn: () => getUsers(queries)
    })
    return {
        users: data?.data,
        meta: data?.meta,
        isUsersLoading: isLoading,
        usersRefetch: refetch,
        isUsersRefetching: isRefetching
    }
}

