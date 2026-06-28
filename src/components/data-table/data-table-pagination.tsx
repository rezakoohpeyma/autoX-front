import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { cn } from '@/lib/utils';
import { ComponentProps, JSX } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { Table } from '@tanstack/react-table';
import { Button } from '../ui/button';

type DataTablePaginationProps<T> = {
    table: Table<T>,
    pageSizes?: number[]
} & ComponentProps<'div'>;
export default function DataTablePagination<T>({
    table,
    pageSizes = [10, 15, 20],
    className,
    ...others
}: DataTablePaginationProps<T>): JSX.Element {
    const pageCount = table.getPageCount();
    const pageIndex = table.getState().pagination.pageIndex;
    const pageSize = table.getState().pagination.pageSize;
    const totalCount = table.getFilteredRowModel().rows.length;

    const start = totalCount === 0 ? 0 : pageIndex * pageSize + 1;
    const end = Math.min((pageIndex + 1) * pageSize, totalCount);
    return (
        <div 
            className={cn("flex justify-between items-center mt-7.5", className)}
            {...others}
        >
            <div>
                <p>
                    {start}-{end} of results {totalCount}
                </p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <div>
                    <Button
                        aria-label='Go to first page'
                        className="cursor-pointer"
                        variant="ghost"
                        size='icon'
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                    <HiOutlineChevronDoubleLeft />
                    </Button>
                    <Button
                        aria-label='Go to previous page'
                        className="cursor-pointer"
                        variant="ghost"
                        size='icon'
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                    <HiOutlineChevronLeft />
                    </Button>
                </div>
                <div className="flex justify-center items-center gap-1">
                    <div className="space-x-1">
                        {Array.from({ length: 3 }, (value, i) => 
                            pageIndex + i < pageCount  && 
                            <Button 
                                size='icon'
                                variant={pageIndex === pageIndex + (i) ? 'default' : 'ghost'}
                                className="text-base font-bold cursor-pointer" 
                                onClick={() => table.setPageIndex(pageIndex + (i))}
                                key={i}
                            >
                            {pageIndex + (i + 1)}
                            </Button>
                        )}
                    </div>
                </div>
                <div>
                    <Button
                        aria-label='Go to first page'
                        className="cursor-pointer"
                        variant="ghost"
                        size='icon'
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <HiOutlineChevronRight />
                    </Button>
                    <Button
                        aria-label='Go to previous page'
                        className="cursor-pointer"
                        variant="ghost"
                        size='icon'
                        onClick={() => table.setPageIndex(pageCount - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        <HiOutlineChevronDoubleRight />
                    </Button>
                </div>
            </div>
            <div>
                <Select 
                    value={String(table.getState().pagination.pageSize)}
                    onValueChange={(value) => {
                        table.setPageSize(Number(value))
                    }}
                >
                    <SelectTrigger className='rounded-sm bg-primary text-white! border-0! cursor-pointer'>
                        <SelectValue placeholder={table.getState().pagination.pageSize}/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Page Sizes</SelectLabel>
                            {pageSizes.map((size) => 
                                <SelectItem className='cursor-pointer' key={size} value={String(size)}>{size}</SelectItem>
                            )}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

