'use client';

import * as ReactIcons from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import NavLink from "@/components/ui/nav-link";
import SidebarItemChild from "./sidebar-item-child";
import { SidebarItemType } from '../types/sidebar-types';
import { JSX } from 'react';
import { useSidebarStore } from "../store/use-sidebar-store";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface SidebarItemProp {
  item: SidebarItemType;
  selectedId: number | null;
  onSelectedId: (id: number) => void;
}

export default function SidebarItem({ item, onSelectedId, selectedId }: SidebarItemProp): JSX.Element {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);
  const isSelected = selectedId === item.id;
  const hasChild = !!item.hasChild;
  
  const IconComponent = item.icon ? ReactIcons[item.icon] : ReactIcons.LuFileQuestion;

  const renderArrowIcon = () => {
    if (isCollapsed || !hasChild) return null;
    return isSelected ? (
      <ReactIcons.LuChevronUp className="text-base text-[#5C5E64]" />
    ) : (
      <ReactIcons.LuChevronDown className="text-base text-[#5C5E64]" />
    );
  };

  const SidebarContent = (
    <NavLink
      href={item.link}
      onClick={() => onSelectedId(item.id)}
      className="w-full h-10 p-3 flex justify-between items-center rounded-lg cursor-pointer text-[#5C5E64] text-center transition-all duration-300 delay-75 hover:text-black"
    >
      <span className="flex items-center gap-2">
        <IconComponent className="text-[20px]" />
        {!isCollapsed && (
          <span className="font-medium text-sm tracking-tight">
            {item.name}
          </span>
        )}
      </span>

      {!isCollapsed && renderArrowIcon()}
    </NavLink>
  );

  const SidebarDropDownContent = (
        <div className="py-3 w-3/5 ml-auto flex justify-center items-stretch gap-3">
          <div className="w-0.5 bg-sidebar-border" />
          <div className="flex justify-center items-center flex-col gap-1 w-full">
            {item.hasChild?.map((subItem, i) => (
              <SidebarItemChild key={i} item={subItem} />
            ))}
          </div>
        </div>
  );

  return (
    <DropdownMenu>
      {isCollapsed ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger>
              {SidebarContent}
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{item.name}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <div className="w-full">
          {SidebarContent}
        </div>
      )}
      
        {isCollapsed && hasChild
          ? 
            <DropdownMenuContent side="right" className="w-43 p-2 border border-sidebar-border rounded-[12px]">
              <DropdownMenuGroup>
                <DropdownMenuLabel>{item.name}</DropdownMenuLabel>
                  {item.hasChild?.map((subItem, i, arr) => (
                    <DropdownMenuItem className={cn(
                        "hover:text-black focus:bg-transparent p-0",
                        i !== arr.length ? 'mb-1' : ''
                    )} key={i}>
                      <SidebarItemChild item={subItem} />
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
          : isSelected && hasChild && SidebarDropDownContent
        }
    </DropdownMenu>
  );
}
