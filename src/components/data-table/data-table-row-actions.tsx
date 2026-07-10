import { ComponentProps, JSX } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { LuEllipsisVertical } from 'react-icons/lu';

type DataTableRowActionsProps = {} & ComponentProps<'div'>

export default function DataTableRowActions({ children } : DataTableRowActionsProps): JSX.Element {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className='cursor-pointer'>
                <Button 
                    variant={'ghost'}
                    size={'icon'}
                >
                    <LuEllipsisVertical size={16} />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent side='left' className='flex justify-center flex-col gap-1 p-2'>
                {children}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

