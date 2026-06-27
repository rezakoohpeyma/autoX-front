import { cn } from '@/lib/utils';
import { ComponentProps, JSX } from 'react';

type DataTablePaginationProps<T> = {
    table: T,
    pageSize?: number[]
} & ComponentProps<'div'>;
export default function DataTablePagination<T>({
    table,
    pageSize = [10, 15, 20],
    className,
    ...others
}: DataTablePaginationProps<T>): JSX.Element {

    console.log((table.getState().pagination.pageIndex + 1).toString())
    return (
        <div 
            className={cn("flex justify-between items-center", className)}
            {...others}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

