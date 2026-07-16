import { PERMISSIONS_KEY } from "@/constants/query-keys";
import { useQuery } from "@tanstack/react-query";
import { MetaType } from "../schemas";
import { getPermissions } from "../api/queries";

type UseGetPermissionsProps = {
    search?: string,
} & MetaType

export default function useGetPermissions(queries?: UseGetPermissionsProps) {
    const { data, isLoading } = useQuery({
        queryKey: [PERMISSIONS_KEY, queries],
        queryFn: () => getPermissions(queries)
    })
    return {
        permissions: data?.data,
        meta: data?.meta,
        isPermissionsLoading: isLoading,
    }
}

