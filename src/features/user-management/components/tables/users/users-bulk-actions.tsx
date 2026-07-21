'use client';
import DataTableBulkActions from '@/components/data-table/data-table-bulk-actions';
import useChangeUsersStatus from '@/features/user-management/hooks/use-change-users-status';
import { Table } from '@tanstack/react-table';
import { JSX } from 'react';
import { LuCircleCheck, LuCircleOff, LuTrash2 } from 'react-icons/lu';

interface UsersBulkActionsProps<TData> {
    table: Table<TData>
}
export default function UsersBulkActions<TData extends { id: number }>({
    table,
}: UsersBulkActionsProps<TData>): JSX.Element {
    const { changeUsersStatus } = useChangeUsersStatus();
    return (
        <DataTableBulkActions table={table} actions={[
            {
                label: "Activate",
                onClick(users){
                    changeUsersStatus({
                        userIds: users.map(u => u.id), status: true
                    });
                },
                icon: <LuCircleCheck />,

            },
            {
                label: "Deactivate",
                onClick(users){
                    changeUsersStatus({
                        userIds: users.map(u => u.id),
                        status: false,
                    })
                },
                icon: <LuCircleOff />
            },
                {
                label: "Delete",
                variant: "destructive",
                onClick(users){},
                isSeparator: true,
                icon: <LuTrash2/>
            },
        ]}/>
    )
}

