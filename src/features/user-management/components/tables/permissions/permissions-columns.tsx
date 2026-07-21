"use client"

import { PermissionType } from "@/schemas";
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox }  from "@/components/ui/checkbox";
import { formatDateTime } from "@/lib/utils";

export const permissionsColumns: ColumnDef<PermissionType>[] = [
  {
    id: "select",

    header: ({ table }) => (
      <Checkbox
        className="border-primary/80 bg-white cursor-pointer"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) =>
          table.toggleAllPageRowsSelected(!!value)
        }
      />
    ),

    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        className="cursor-pointer"
        onCheckedChange={(value) =>
          row.toggleSelected(!!value)
        }
      />
    ),

    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "action",
    header: "Action",
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ getValue }) => formatDateTime(getValue<string>())
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ getValue }) => formatDateTime(getValue<string>())
  },
];
