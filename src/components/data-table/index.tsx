"use client"

import {
  flexRender,
  Table as TanstackTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { MetaType } from "@/features/user-management/schemas"
import DataTablePagination from "./data-table-pagination"
import { DataTableSkeleton } from "./data-table-skeleton"
import DataTableColumnHeader from "./data-table-column-header"
import DataTableEmpty from "./data-table-empty"


type DataTableProps<TData> = {
  table: TanstackTable<TData>

  // Pagination Features
  pagination: MetaType,
  onPageChange(page: number): void,
  onPageLimitChange(size: number): void,

  // Loading & Skeleton Features
  loading: boolean,

  // Toolbar Features
  children?: ReactNode
} & ComponentProps<'div'>

export function DataTable<TData>({
  table,
  className,
  pagination,
  onPageChange,
  onPageLimitChange,
  loading = false,
  children,
  ...other
}: DataTableProps<TData>) {
  
  if(loading)
    return (
    <DataTableSkeleton
      columns={table.getAllLeafColumns().length}
      rows={pagination.limit}
    />
  );

  return (
    <div className={cn("flex justify-center flex-col gap-3", className)} {...other}>
      {children}
      <Table className="overflow-hidden rounded-xs! bg-white border-b">
        <DataTableColumnHeader headerGroups={table.getHeaderGroups()} />
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <DataTableEmpty colSpan={table.getAllColumns().length}/>
          )}
        </TableBody>
      </Table>
      <DataTablePagination
          pagination={pagination}  
          onPageChange={onPageChange}
          onPageLimitChange={onPageLimitChange}
      />
    </div>
  )
}