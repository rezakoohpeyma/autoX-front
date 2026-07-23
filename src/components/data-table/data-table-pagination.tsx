import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { cn } from '@/lib/utils';
import { ComponentProps, JSX } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { MetaType } from "@/features/user-management/schemas";

type DataTablePaginationProps = {
    pageSizes?: number[],
    pagination: MetaType,
    onPageChange: (page : number) => void,
    onPageLimitChange: (size: number) => void
} & ComponentProps<'div'>;
export default function DataTablePagination({
    pageSizes = [10, 15, 20],
    pagination,
    onPageChange,
    onPageLimitChange,
    className,
    ...others
}: DataTablePaginationProps): JSX.Element {
    const {
        page,
        limit, 
        hasNextPage, 
        hasPreviousPage, 
        totalItems, 
        totalPages
     } = pagination;


    const start = totalItems === 0 
        ? 0 
        : page * limit + 1;
    const end = Math.min((page + 1) * limit, totalItems || 0);

    const visiblePages = 3;
    const startPage = Math.max(
    1,
    Math.min(page, (totalPages ?? 1) - visiblePages + 1)
);
    return (
        <div 
            className={cn("flex justify-between items-center flex-col-reverse md:flex-row gap-4 mt-7.5", className)}
            {...others}
        >
            <div>
                <p>
                    {start}-{end} of results {totalItems}
                </p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <div>
                    <Button
                        aria-label='Go to first page'
                        className="cursor-pointer"
                        variant="ghost"
                        size='icon'
                        onClick={() => onPageChange(1)}
                        disabled={!hasPreviousPage}
                    >
                    <HiOutlineChevronDoubleLeft />
                    </Button>
                    <Button
                        aria-label='Go to previous page'
                        className="cursor-pointer"
                        variant="ghost"
                        size='icon'
                        onClick={() => onPageChange((page + 1) - 1)}
                        disabled={!hasPreviousPage}
                    >
                    <HiOutlineChevronLeft />
                    </Button>
                </div>
                <div className="flex justify-center items-center gap-1">
                    <div className="space-x-1">
                        {Array.from({length: Math.min(visiblePages, totalPages ?? 0)},
                            (_, i) => {
                                const currentPage = startPage + i;
                                return (
                                <Button
                                    key={currentPage}
                                    size="icon"
                                    variant={page + 1 === currentPage ? "default" : "ghost"}
                                    className="text-base font-bold cursor-pointer"
                                    onClick={() => onPageChange(currentPage)}
                                >
                                    {currentPage}
                                </Button>
                                );
                            }
                            )}
                    </div>
                </div>
                <div>
                    <Button
                        aria-label='Go to first page'
                        className="cursor-pointer"
                        variant="ghost"
                        size='icon'
                        onClick={() => onPageChange(((page + 1) + 1))}
                        disabled={!hasNextPage}
                    >
                        <HiOutlineChevronRight />
                    </Button>
                    <Button
                        aria-label='Go to previous page'
                        className="cursor-pointer"
                        variant="ghost"
                        size='icon'
                        onClick={() => onPageChange(totalPages || 0)}
                        disabled={!hasNextPage}
                    >
                        <HiOutlineChevronDoubleRight />
                    </Button>
                </div>
            </div>
            <div className="w-full sm:w-fit">
                <Select 
                    value={String(limit)}
                    onValueChange={(value) => {
                        onPageLimitChange(Number(value))
                    }}
                >
                    <SelectTrigger className='rounded-sm bg-primary text-white! border-0! cursor-pointer w-full'>
                        <SelectValue placeholder={limit}/>
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

