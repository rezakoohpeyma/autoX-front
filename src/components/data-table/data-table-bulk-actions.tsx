import { Fragment, JSX, MouseEventHandler, ReactNode } from 'react';
import { Button } from '../ui/button';
import { LuSlidersHorizontal } from 'react-icons/lu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Table as TanstackTable } from "@tanstack/react-table"

interface DataTableBulkActionsProps<TData> {
    table: TanstackTable<TData>,
    actions: {
        label: string,
        icon?: ReactNode | string,
        onClick: (rows: TData[]) => void | Promise<void>,
        variant?: 'destructive' | 'default',
        isSeparator?: boolean,
    }[]
}
export default function DataTableBulkActions<TData>({
        table,
        actions,
    } :
    DataTableBulkActionsProps<TData>
): JSX.Element {
    const rows = table.getSelectedRowModel().rows;
    const selectedItems = rows.map(row => row.original)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='outline'
                    className="text-primary/80 border-primary/80 text-7xl! p-0 cursor-pointer"
                    size={'icon-lg'}
                >
                    <LuSlidersHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side='left' className='flex justify-center flex-col gap-1 p-2'>
                {actions.map((action, i) => 
                    <Fragment key={i}>
                        {action.isSeparator && <DropdownMenuSeparator />}
                        <DropdownMenuGroup>
                            <DropdownMenuItem variant={action.variant} className='cursor-pointer' onClick={() => {
                                action?.onClick(selectedItems)
                            }}>
                                <span>{action.icon}</span>
                                <span>{action.label}</span>
                            </DropdownMenuItem >
                        </DropdownMenuGroup>
                    </Fragment>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

