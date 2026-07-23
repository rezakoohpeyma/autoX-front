import { cn } from '@/lib/utils';
import { ComponentProps, JSX } from 'react';

type DataTableToolbarProps = {
    
} & ComponentProps<'div'>

export default function DataTableToolbar({ children, className, ...other }: DataTableToolbarProps): JSX.Element {
    return (
        <div 
            className={
                cn('flex justify-between items-center flex-wrap gap-4',
                    className
                )
            }
            {...other}
        >
            {children}
        </div>
    )
}

