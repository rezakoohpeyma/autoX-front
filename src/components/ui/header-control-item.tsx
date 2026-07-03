import { ReactNode } from "react"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { Menus } from "./header-controls"

export default function HeaderControlItem({
  trigger,
  label,
  items,
}: Menus) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        {trigger}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}

        <DropdownMenuGroup>
          {items.map((item, index) => {
            if (item.separator) {
              return <DropdownMenuSeparator key={index} />
            }

            return (
              <DropdownMenuItem key={index} onClick={item.onClick}>
                {item.href ? (
                  <Link href={item.href} className="flex justify-center items-center gap-1 text-black/60 cursor-pointer">
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <p className="flex justify-center items-center gap-1 text-black/60 cursor-pointer">
                    {item.icon}
                    <span>{item.label}</span>
                  </p>
                )}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
