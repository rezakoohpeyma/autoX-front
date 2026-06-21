import * as ReactIcons from "react-icons/fa6";
import { JSX} from 'react';
import { SidebarItemType } from '../types/sidebar-types';
import NavLink from "@/components/ui/nav-link";
import SidebarItemChild from "./sidebar-item-child";

interface SidebarItemProp {
    item: SidebarItemType
    selectedId: number | null,
    onSelectedId: (id: number) => void,
}

export default function SidebarItem({ item, onSelectedId, selectedId }: SidebarItemProp): JSX.Element {
    const isSelect = selectedId === item.id;
    const IconComponent = item.icon ? ReactIcons[item.icon] : ReactIcons.FaQuestion;
    return (
        <div onClick={() => onSelectedId(item.id)}>
            <NavLink href={item.link} className="flex justify-between items-center h-10 rounded-lg p-3 cursor-pointer">
                <span className="flex items-center gap-2">
                    {<IconComponent className="text-[20px] text-[#5C5E64]"/>}
                    <span className="font-medium text-sm tracking-tight">{item.name}</span>
                </span>
                {item.hasChild && isSelect 
                    ? <ReactIcons.FaAngleUp className="text-base text-[#5C5E64]" /> 
                    : <ReactIcons.FaAngleDown className="text-base text-[#5C5E64]" />
                }
            </NavLink>
            {isSelect && 
                <div className="py-3 w-3/5 ml-auto flex justify-center items-stretch gap-3">
                    <div className="w-0.5 bg-sidebar-border" />
                    <div className="flex justify-center items-center flex-col gap-1 w-full">
                        {item.hasChild?.map((subItem, i) => <SidebarItemChild key={i} item={subItem}/>)}
                    </div>
                </div>
            }
        </div>
    );
}
