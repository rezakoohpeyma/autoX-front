import { JSX } from 'react';
import {
  flexRender,
  HeaderGroup,
} from "@tanstack/react-table"
import { TableHead, TableHeader, TableRow } from '../ui/table';
import { cn } from '@/lib/utils';

interface DataTableColumnHeaderProps<TData> {
    headerGroups: HeaderGroup<TData>[]
}

export default function DataTableColumnHeader<TData>({ headerGroups } : DataTableColumnHeaderProps<TData>): JSX.Element {
    return (
        <TableHeader className="bg-table-header-bg">
            {headerGroups.map((headerGroup) => (
            <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                    return (
                        <TableHead key={header.id} className={
                            cn("text-table-header-text text-xs",
                                header.id === 'actions' && 'sticky right-0 bg-table-header-bg z-10',
                                header.id === 'select' && 'sticky left-0 bg-table-header-bg z-10',
                            )
                        }>
                        {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                        )}
                        </TableHead>
                    )
                })}
            </TableRow>
            ))}
        </TableHeader>
    )
}

