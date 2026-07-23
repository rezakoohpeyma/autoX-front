'use client'
import useGetUsers from '@/features/user-management/hooks/use-get-users';
import DataTableToolbar from '@/components/data-table/data-table-toolbar';
import DataTableSearch from '@/components/data-table/data-table-search';
import DataTableWraper from '@/components/data-table/data-table-wraper';
import DataTableRefreshButton from '@/components/data-table/data-table-refresh-button';
import UsersAddButton from './users-add-button';
import UsersExportButton from './users-export-button';
import { JSX } from 'react';
import { useQueryState } from 'nuqs'
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { usersColumns } from './users-columns';
import { DataTable } from '@/components/data-table';
import { useQueryClient } from '@tanstack/react-query';
import { LIMIT_PAGE_KEY, PAGE_KEY, SEARCH_KEY, USERS_KEY } from '@/constants/query-keys';
import { formatPagination } from '@/features/user-management/lib/pagination';
import UsersBulkActions from './users-bulk-actions';

export default function UsersTable(): JSX.Element {

    const queryClient = useQueryClient();

    const [page, setPage]  = useQueryState(PAGE_KEY, {
        defaultValue: '1'
    })
    const [limit, setLimit]  = useQueryState(LIMIT_PAGE_KEY, {
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
        isUsersLoading
    } = useGetUsers({
        page: Number(page),
        limit: Number(limit),
        search,
    })

    const handleRefresh = () => queryClient.invalidateQueries({
        queryKey: [USERS_KEY],
    })

    const pagination = formatPagination(meta);

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
                <DataTableWraper className='gap-2 w-full md:w-fit flex-wrap'>
                    <UsersExportButton />
                    <UsersAddButton />
                    <DataTableRefreshButton onRefresh={handleRefresh} />
                    <UsersBulkActions table={table}/>
                </DataTableWraper>
            </DataTableToolbar>
        </DataTable>
    )
}

