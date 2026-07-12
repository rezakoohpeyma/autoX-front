import { cn } from '@/lib/utils';
import { ComponentProps, JSX } from 'react';

type DataTableWraperProps = ComponentProps<'div'>

export default function DataTableWraper({ className, ...other }: DataTableWraperProps): JSX.Element {
    return (
        <div className={
            cn(
                'flex justify-center items-center',
                className
            )
        } {...other}/>
    )
}

