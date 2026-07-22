"use client";

import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type DataTableSkeletonProps = {
  columns: number;
  rows?: number;
};

export function DataTableSkeleton({
  columns,
  rows = 10,
}: DataTableSkeletonProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Table */}
      <Table className="overflow-hidden rounded-xs bg-white border-b">
        <TableHeader className="bg-table-header-bg">
          <TableRow>
            {Array.from({ length: columns }).map((_, index) => (
              <TableHead key={index}>
                <Skeleton className="h-4 w-20" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array.from({ length: columns }).map((_, columnIndex) => (
                <TableCell key={columnIndex}>
                  <Skeleton className="h-5 w-full max-w-32" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="mt-7.5 flex items-center justify-between">
        <Skeleton className="h-5 w-40" />

        <div className="flex items-center gap-2">
          <Skeleton className="size-9 rounded-md" />
          <Skeleton className="size-9 rounded-md" />
          <Skeleton className="size-9 rounded-md" />
          <Skeleton className="size-9 rounded-md" />
          <Skeleton className="size-9 rounded-md" />
        </div>

        <Skeleton className="h-9 w-24 rounded-md" />
      </div>
    </div>
  );
}