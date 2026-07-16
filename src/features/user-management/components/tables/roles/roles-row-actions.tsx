'use client'
import DataTableRowActions from '@/components/data-table/data-table-row-actions';
import { JSX, useMemo } from 'react';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { LuBookUser, LuCircleCheck, LuCircleOff, LuMenu, LuSquarePen } from 'react-icons/lu';
import { RoleType } from '@/schemas';

interface RolesRowActionsProps {
    roles: RoleType,
}

export default function RolesRowActions({ roles } : RolesRowActionsProps): JSX.Element {

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
            label: 'Menu',
            icon: <LuMenu />,
        },
        {
            id: 3,
            label: roles.isActive ? 'Disable' : 'Enable',
            icon: roles.isActive ? <LuCircleOff /> : <LuCircleCheck />
        },
    ]
    , [ roles.isActive ])

    return (
        <DataTableRowActions>
            {menuDatas.map(item => (
                <DropdownMenuItem key={item.id} className='cursor-pointer'>
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                </DropdownMenuItem>
            ))}
        </DataTableRowActions>
    )
}

