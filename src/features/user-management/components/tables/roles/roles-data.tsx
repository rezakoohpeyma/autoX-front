'use client'
import DataTableToolbar from '@/components/data-table/data-table-toolbar';
import DataTableSearch from '@/components/data-table/data-table-search';
import DataTableRefreshButton from '@/components/data-table/data-table-refresh-button';
import RolesAddButton from './roles-add-button';
import DataTableWraper from '@/components/data-table/data-table-wraper';
import useGetRoles from '@/features/user-management/hooks/use-get-roles';
import RolesExportButton from './roles-export-button';
import { JSX } from 'react';
import { useQueryState } from 'nuqs';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { rolesColumns } from './roles-columns';
import { DataTable } from '@/components/data-table';
import { useQueryClient } from '@tanstack/react-query';
import { USERS_KEY } from '@/constants/query-keys';


const SEARCH_KEY = 'search';

export default function RolesTable(): JSX.Element {

    const queryClient = useQueryClient();

    const [page, setPage]  = useQueryState('page', {
        defaultValue: '1'
    })
    const [limit, setLimit]  = useQueryState('limit', {
        defaultValue: '10'
    })

    const [search] = useQueryState(SEARCH_KEY, {
        defaultValue: ''
    })
    const onPageChange = (page: number) => setPage(String(page))
    const onPageLimitChange = (size: number) => setLimit(String(size))


    const { 
        roles,
        meta, 
        isRolesLoading
    } = useGetRoles({
        page: Number(page),
        limit: Number(limit),
        search,
    })

    const handleRefresh = () => queryClient.invalidateQueries({
        queryKey: [USERS_KEY],
    })

    const pagination = {
        page: (meta?.page ?? 1) - 1 ,
        limit: meta?.limit ?? 10,
        totalItems: meta?.totalItems ?? 0,
        totalPages: meta?.totalPages ?? 0,
        hasNextPage: meta?.hasNextPage ?? false,
        hasPreviousPage: meta?.hasPreviousPage ?? false,
    }

    const table = useReactTable({
        data: roles ?? [],
        columns: rolesColumns,
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
            loading={isRolesLoading}
        >
            <DataTableToolbar>
                <DataTableSearch queryKey={SEARCH_KEY} placeholder='Searching Name...'/>
                <DataTableWraper className='gap-2'>
                    <RolesExportButton />
                    <RolesAddButton />
                    <DataTableRefreshButton onRefresh={handleRefresh} />
                </DataTableWraper>
            </DataTableToolbar>
        </DataTable>
    )
}

