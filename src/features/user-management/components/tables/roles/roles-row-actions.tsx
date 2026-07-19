'use client'
import DataTableRowActions from '@/components/data-table/data-table-row-actions';
import { Fragment, JSX, useMemo } from 'react';
import { DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { LuBookUser, LuCircleCheck, LuCircleOff, LuMenu, LuSquarePen, LuTrash2 } from 'react-icons/lu';
import { RoleType } from '@/schemas';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { routes } from '@/config/routes';

interface RolesRowActionsProps {
    roles: RoleType,
}

export default function RolesRowActions({ roles } : RolesRowActionsProps): JSX.Element {

    const router = useRouter();
    const menuDatas = useMemo(() => 
    [
        {
            id: 0,
            label: 'Edit Role',
            icon: <LuSquarePen />,
            onClick(){
                router.push(`${routes.userManagementEditRole}/${roles.id}`)
            }
        },
        {
            id: 1,
            label: 'Role detail',
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
        {
            id: 4,
            label: "Delete Role",
            icon: <LuTrash2 />,
            separator: true,
            className: 'text-red-400',
            onClick: () => {}
                    
        }
    ]
    , [ roles.isActive ])

    return (
        <DataTableRowActions>
            {menuDatas.map(item => (
                <Fragment key={item.id}>
                    {item.separator && <DropdownMenuSeparator />}
                    <DropdownMenuItem 
                        className={
                            cn(
                                'cursor-pointer',
                                item.className
                            )
                        } 
                        onClick={item?.onClick}
                    >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                    </DropdownMenuItem>
                </Fragment>
            ))}
        </DataTableRowActions>
    )
}

