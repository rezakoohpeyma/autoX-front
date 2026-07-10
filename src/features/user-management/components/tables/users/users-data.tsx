'use client'
import useGetUsers from '@/features/user-management/hooks/use-get-users';
import DataTableToolbar from '@/components/data-table/data-table-toolbar';
import DataTableSearch from '@/components/data-table/data-table-search';
import { JSX } from 'react';
import { useQueryState } from 'nuqs'
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { usersColumns } from './users-columns';
import { DataTable } from '@/components/data-table';
import DataTableRefreshButton from '@/components/data-table/data-table-refresh-button';


const SEARCH_KEY = 'search';

export default function UsersTable(): JSX.Element {
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
        users,
        meta, 
        isUsersLoading, 
        usersRefetch, 
        isUsersRefetching 
    } = useGetUsers({
        page: Number(page),
        limit: Number(limit),
        search,
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
        data: users ?? [],
        columns: usersColumns,
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
            loading={isUsersLoading}
        >
            <DataTableToolbar>
                <DataTableSearch queryKey={SEARCH_KEY} placeholder='Searching Name...'/>
                <DataTableRefreshButton onRefresh={usersRefetch} loading={isUsersRefetching}/>
            </DataTableToolbar>
        </DataTable>
    )
}

