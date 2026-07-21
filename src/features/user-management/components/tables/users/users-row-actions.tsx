'use client'
import DataTableRowActions from '@/components/data-table/data-table-row-actions';
import useChangeUsersStatus from '@/features/user-management/hooks/use-change-users-status';
import { Fragment, JSX, useMemo } from 'react';
import { DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { LuBookUser, LuCircleCheck, LuCircleOff, LuSquarePen, LuTrash2 } from 'react-icons/lu';
import { UserType } from '@/schemas';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { routes } from '@/config/routes';

interface UsesrRowActionsProps {
    user: UserType
}

export default function UsersRowActions({ user } : UsesrRowActionsProps): JSX.Element {
    const router = useRouter()
    const { changeUsersStatus } = useChangeUsersStatus()
    const menuDatas = useMemo(() => 
    [
        {
            id: 0,
            label: 'Edit User',
            icon: <LuSquarePen />,
            onClick(){ 
                router.push(`${routes.userManagementEditUser}/${user.id}`)
            }
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
        {
            id: 3,
            label: "Delete User",
            icon: <LuTrash2 />,
            separator: true,
            className: 'text-red-400'
            
        }
    ]
    , [user.isActive, user.id, changeUsersStatus, router])

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

