'use client';

import * as ReactIcons from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import NavLink from "@/components/ui/nav-link";
import SidebarItemChild from "./sidebar-item-child";
import useSidebar from "../hooks/use-sidebar";
import { SidebarItemType } from '../types/sidebar-types';
import { JSX } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface SidebarItemProp {
  item: SidebarItemType;
  selectedId: number | null;
  onSelectedId: (id: number) => void;
}

export default function SidebarItem({ item, onSelectedId, selectedId }: SidebarItemProp): JSX.Element {
  const { collapsed } = useSidebar();
  const isSelected = selectedId === item.id;
  const hasChild = !!item.hasChild;
  
  const IconComponent = item.icon ? ReactIcons[item.icon] : ReactIcons.LuFileQuestion;

  const renderArrowIcon = () => {
    if (collapsed || !hasChild) return null;
    return isSelected ? (
      <ReactIcons.LuChevronUp className="text-base text-[#5C5E64]" />
    ) : (
      <ReactIcons.LuChevronDown className="text-base text-[#5C5E64]" />
    );
  };

  const SidebarContent = (
    <>
      <span className="flex items-center gap-2">
        <IconComponent className="text-xl" />
        {!collapsed && (
          <span className="font-medium text-sm tracking-tight">
            {item.name}
          </span>
        )}
      </span>

      {!collapsed && renderArrowIcon()}
    </>
  );

  const SidebarWraper = hasChild 
      ? <div
            onClick={() => onSelectedId(item.id)}
            className={cn(
            "w-full h-10 p-3 flex items-center rounded-lg cursor-pointer text-[#5C5E64] text-center transition-all duration-300 delay-75 hover:text-black",
             isSelected && 'bg-[#F6F6F6] text-black',
            collapsed 
            ? 'justify-center' 
            : 'justify-between',
            )}
        >
          {SidebarContent}
        </div>
      : <NavLink
          href={item.link}
          onClick={() => onSelectedId(item.id)}
          className={cn(
            "w-full h-10 p-3 flex items-center rounded-lg cursor-pointer text-[#5C5E64] text-center transition-all duration-300 delay-75 hover:text-black",
            collapsed 
            ? 'justify-center' 
            : 'justify-between',
            )}
        >
          {SidebarContent}
        </NavLink>

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
      {collapsed ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger>
              {SidebarWraper}
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{item.name}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <div className="w-full">
          {SidebarWraper}
        </div>
      )}
      
        {collapsed && hasChild
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
