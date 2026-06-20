import * as ReactIcons from "react-icons/fa6";
import { JSX} from 'react';
import { SidebarItemType } from '../types/sidebar-types';
import NavLink from "@/components/ui/nav-link";

interface SidebarItemProp {
    item: SidebarItemType
}

export default function SidebarItem({ item }: SidebarItemProp): JSX.Element {
    const IconComponent = item.icon ? ReactIcons[item.icon] : ReactIcons.FaQuestion;
    return (
        <div>
            <NavLink href={item.link} className="flex items-center gap-2 h-10 rounded-lg p-3 cursor-pointer">
                {<IconComponent className="text-[20px] text-[#5C5E64]"/>}
                <span className="font-medium text-sm tracking-tight">{item.name}</span>
            </NavLink>
        </div>
    );
}
