import { JSX } from 'react';
import {
  flexRender,
  HeaderGroup,
} from "@tanstack/react-table"
import { TableHead, TableHeader, TableRow } from '../ui/table';

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
                    <TableHead key={header.id} className="text-table-header-text text-xs ">
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

