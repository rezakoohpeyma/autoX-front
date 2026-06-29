"use client"

import {
  ColumnDef,
  flexRender,
  Table as TanstackTable,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import DataTablePagination from "./data-table-pagination"
import { ComponentProps } from "react"
import { cn } from "@/lib/utils"

interface DataTableProps<TData> {
  table: TanstackTable<TData>
}

export function DataTable<TData>({
  table,
  className,
  children,
  ...other
}: DataTableProps<TData> & ComponentProps<'div'>) {
  

  return (
    <div className={cn("flex justify-center flex-col gap-3", className)} {...other}>
      <div>{children}</div>
      <Table className="overflow-hidden rounded-xs! bg-white border-b">
        <TableHeader className="bg-table-header-bg">
          {table.getHeaderGroups().map((headerGroup) => (
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
            <TableRow>
              <TableCell colSpan={table.getAllColumns().length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table}/>
    </div>
  )
}