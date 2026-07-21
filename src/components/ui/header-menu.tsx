
import { ReactNode } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./dropdown-menu"

interface HeaderMenuProps {
  trigger: ReactNode
  label?: string
  children: ReactNode
}

export default function HeaderMenu({
  trigger,
  label,
  children
}: HeaderMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        {trigger}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}

        <DropdownMenuGroup>
          {children}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
