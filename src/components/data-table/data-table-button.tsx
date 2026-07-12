import { ComponentProps, JSX } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

type DataTableButtonProps = {} & ComponentProps<'button'>

export default function DataTableButton({ className, children, ...other } : DataTableButtonProps): JSX.Element {
    return (
        <Button className={
                cn(
                    'rounded-md! bg-primary h-10! text-base cursor-pointer', 
                    className
                )
            }
            {...other}
        >
            {children}
        </Button>
    )
}

