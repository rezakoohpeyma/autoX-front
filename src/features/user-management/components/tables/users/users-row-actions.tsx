'use client'
import DataTableRowActions from '@/components/data-table/data-table-row-actions';
import useChangeUsersStatus from '@/features/user-management/hooks/use-change-users-status';
import { JSX, useMemo } from 'react';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { LuBookUser, LuCircleCheck, LuCircleOff, LuSquarePen } from 'react-icons/lu';
import { UserType } from '@/schemas';

interface UsesrRowActionsProps {
    user: UserType
}

export default function UsersRowActions({ user } : UsesrRowActionsProps): JSX.Element {

    const { changeUsersStatus } = useChangeUsersStatus()
    const menuDatas = useMemo(() => 
    [
        {
            id: 0,
            label: 'Edit User',
            icon: <LuSquarePen />,
        },
        {
            id: 1,
            label: 'User detail',
            icon: <LuBookUser />,
        },
        {
            id: 2,
            label: user.isActive ? 'Disable' : 'Enable',
            icon: user.isActive ? <LuCircleOff /> : <LuCircleCheck />,
            onClick :() => 
                changeUsersStatus({ userIds :[ user.id ], status:!user.isActive})
            
        },
    ]
    , [user.isActive, user.id, changeUsersStatus])

    return (
        <DataTableRowActions>
            {menuDatas.map(item => (
                <DropdownMenuItem key={item.id} className='cursor-pointer' onClick={item?.onClick}>
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                </DropdownMenuItem>
            ))}
        </DataTableRowActions>
    )
}

