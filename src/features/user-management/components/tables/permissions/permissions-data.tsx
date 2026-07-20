'use client'
import useGetPermissions from '@/features/user-management/hooks/use-get-permission';
import DataTableToolbar from '@/components/data-table/data-table-toolbar';
import DataTableRefreshButton from '@/components/data-table/data-table-refresh-button';
import DataTableWraper from '@/components/data-table/data-table-wraper';
import PermissionsExportButton from './permissions-export-button';
import { JSX } from 'react';
import { useQueryState } from 'nuqs';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { permissionsColumns } from './permissions-columns';
import { DataTable } from '@/components/data-table';
import { useQueryClient } from '@tanstack/react-query';
import { LIMIT_PAGE_KEY, PAGE_KEY, PERMISSIONS_KEY, SEARCH_KEY } from '@/constants/query-keys';
import { formatPagination } from '@/features/user-management/lib/pagination';
import DataTableSearch from '@/components/data-table/data-table-search';

export default function PermissionsTable(): JSX.Element {

    const queryClient = useQueryClient();

    const [page, setPage]  = useQueryState(PAGE_KEY, {
        defaultValue: '1'
    })
    const [limit, setLimit]  = useQueryState(LIMIT_PAGE_KEY, {
        defaultValue: '10'
    })
    const [search, setSerach] = useQueryState(SEARCH_KEY, {
        defaultValue: "",
    })

    const onPageChange = (page: number) => setPage(String(page))
    const onPageLimitChange = (size: number) => setLimit(String(size))


    const { 
        permissions,
        meta, 
        isPermissionsLoading
    } = useGetPermissions({
        page: Number(page),
        limit: Number(limit),
        search,
    })

    const handleRefresh = () => queryClient.invalidateQueries({
        queryKey: [PERMISSIONS_KEY],
    })

    const pagination = formatPagination(meta);

    const table = useReactTable({
        data: permissions ?? [],
        columns: permissionsColumns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        enableRowSelection: true,
    })
    return (
        <DataTable 
            table={table}
            pagination={pagination}
            onPageChange={onPageChange}
            onPageLimitChange={onPageLimitChange}
            loading={isPermissionsLoading}
        >
            <DataTableToolbar>
                <DataTableSearch queryKey={SEARCH_KEY} placeholder='Searching permission...'/>
                <DataTableWraper className='gap-2'>
                    <PermissionsExportButton />
                    <DataTableRefreshButton onRefresh={handleRefresh} />
                </DataTableWraper>
            </DataTableToolbar>
        </DataTable>
    )
}

