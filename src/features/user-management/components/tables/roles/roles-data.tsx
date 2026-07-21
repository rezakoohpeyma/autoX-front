'use client'
import useGetRoles from '@/features/user-management/hooks/use-get-roles';
import DataTableToolbar from '@/components/data-table/data-table-toolbar';
import DataTableSearch from '@/components/data-table/data-table-search';
import DataTableRefreshButton from '@/components/data-table/data-table-refresh-button';
import DataTableWraper from '@/components/data-table/data-table-wraper';
import RolesAddButton from './roles-add-button';
import RolesExportButton from './roles-export-button';
import { JSX } from 'react';
import { useQueryState } from 'nuqs';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { rolesColumns } from './roles-columns';
import { DataTable } from '@/components/data-table';
import { useQueryClient } from '@tanstack/react-query';
import { LIMIT_PAGE_KEY, PAGE_KEY, ROLES_KEY, SEARCH_KEY } from '@/constants/query-keys';
import { formatPagination } from '@/features/user-management/lib/pagination';

export default function RolesTable(): JSX.Element {

    const queryClient = useQueryClient();

    const [page, setPage]  = useQueryState(PAGE_KEY, {
        defaultValue: '1'
    });
    const [limit, setLimit]  = useQueryState(LIMIT_PAGE_KEY, {
        defaultValue: '10'
    });
    const [search] = useQueryState(SEARCH_KEY, {
        defaultValue: ''
    });
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
        queryKey: [ROLES_KEY],
    })

    const pagination = formatPagination(meta)

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
                <DataTableSearch queryKey={SEARCH_KEY} placeholder='Searching Roles...'/>
                <DataTableWraper className='gap-2'>
                    <RolesExportButton />
                    <RolesAddButton />
                    <DataTableRefreshButton onRefresh={handleRefresh} />
                </DataTableWraper>
            </DataTableToolbar>
        </DataTable>
    )
}

