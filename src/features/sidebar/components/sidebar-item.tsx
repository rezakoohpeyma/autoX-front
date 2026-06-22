'use client';

import * as ReactIcons from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import NavLink from "@/components/ui/nav-link";
import SidebarItemChild from "./sidebar-item-child";
import { SidebarItemType } from '../types/sidebar-types';
import { JSX } from 'react';
import { useSidebarStore } from "../store/use-sidebar-store";

interface SidebarItemProp {
  item: SidebarItemType;
  selectedId: number | null;
  onSelectedId: (id: number) => void;
}

export default function SidebarItem({ item, onSelectedId, selectedId }: SidebarItemProp): JSX.Element {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);
  const isSelected = selectedId === item.id;
  const hasChild = !!item.hasChild;
  
  // انتخاب آیکون
  const IconComponent = item.icon ? ReactIcons[item.icon] : ReactIcons.FaQuestion;

  // مشخص کردن آیکون فلش (Angle Up/Down)
  const renderArrowIcon = () => {
    if (isCollapsed || !hasChild) return null;
    return isSelected ? (
      <ReactIcons.FaAngleUp className="text-base text-[#5C5E64]" />
    ) : (
      <ReactIcons.FaAngleDown className="text-base text-[#5C5E64]" />
    );
  };

  // محتوای اصلی آیتم سایدبار
  const SidebarContent = (
    <NavLink
      href={item.link}
      onClick={() => onSelectedId(item.id)}
      className="flex justify-between items-center h-10 rounded-lg p-3 cursor-pointer text-center w-full"
    >
      <span className="flex items-center gap-2">
        <IconComponent className="text-[20px] text-[#5C5E64]" />
        {!isCollapsed && (
          <span className="font-medium text-sm tracking-tight">
            {item.name}
          </span>
        )}
      </span>

      {/* نمایش فلش فقط وقتی سایدبار باز است */}
      {!isCollapsed && renderArrowIcon()}
    </NavLink>
  );

  return (
    <TooltipProvider>
      {/* 
        اگر سایدبار باز باشد، Tooltip را دورِ محتوا نمی‌کشیم (فقط خود محتوا را رندر می‌کنیم).
        اگر بسته باشد، از ساختار Tooltip استفاده می‌کنیم.
      */}
      {isCollapsed ? (
        <Tooltip>
          <TooltipTrigger asChild>
            {SidebarContent}
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{item.name}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        /* وقتی سایدبار باز است، فقط محتوا را رندر کن (بدون تولتیپ) */
        <div className="w-full">
          {SidebarContent}
        </div>
      )}

      {/* بخش زیرمجموعه‌ها (Sub-items) */}
      {isSelected && (
        <div className="py-3 w-3/5 ml-auto flex justify-center items-stretch gap-3">
          <div className="w-0.5 bg-sidebar-border" />
          <div className="flex justify-center items-center flex-col gap-1 w-full">
            {item.hasChild?.map((subItem, i) => (
              <SidebarItemChild key={i} item={subItem} />
            ))}
          </div>
        </div>
      )}
    </TooltipProvider>
  );
}
