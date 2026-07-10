"use client"
import { UserType } from "@/features/auth/schema";
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox }  from "@/components/ui/checkbox";
import { formatDateTime } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { LuDot } from "react-icons/lu";
export const usersColumns: ColumnDef<UserType>[] = [
  {
    id: "select",

    header: ({ table }) => (
      <Checkbox
        className="border-primary/80 bg-white"
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
        onCheckedChange={(value) =>
          row.toggleSelected(!!value)
        }
      />
    ),

    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
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
  
];
