"use client"

import RolesRowActions from "./roles-row-actions";
import { RoleType } from "@/schemas";
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox }  from "@/components/ui/checkbox";
import { formatDateTime } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const rolesColumns: ColumnDef<RoleType>[] = [
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
    accessorKey: "name",
    header: "Name",
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
  {
    accessorKey: "isActive",
    header: 'Active',
    cell: ({ getValue }) => getValue<boolean>() 
    ? <Badge className="bg-green-50 text-green-700">
        <span className="size-1 bg-green-700 rounded-full"/>
        Active
      </Badge> 
    : <Badge className="bg-mist-100 text-mist-700">
        <span className="size-1 bg-mist-700 rounded-full"/>
        In Active
      </Badge>
  },
  {
    accessorKey: "permissions",
    header: "Permissions",
  },
  {
    id:'actions',
    cell: ({ row }) => <RolesRowActions roles={row.original}/>
  }
  
];
