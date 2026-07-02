import { useQuery } from '@tanstack/react-query';
import { getMe } from '../api/queries';
export default function useGetUser() {
    const { data, isLoading, error} = useQuery({
        queryKey: ['user'],
        queryFn: getMe
    })

    return {
        user: data,
        isUserLoading: isLoading,
        userErrors: error?.message,
    }
}

