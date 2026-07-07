import { useQuery } from '@tanstack/react-query';
import { getMe } from '../api/queries';
export default function useGetUser() {
    const { data, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: getMe
    })

    return {
        user: data?.data,
        isUserLoading: isLoading,
        message: data?.message,
    }
}

