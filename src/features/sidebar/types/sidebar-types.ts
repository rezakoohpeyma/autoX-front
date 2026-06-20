import * as ReactIcons from "react-icons/fa6";

export type SidebarItemType = {
    id: number,
    name: string,
    link: string,
    icon: keyof typeof ReactIcons | null; 
}

export type SidebarCategoryType = {
    id: number,
    name: string,
    items: SidebarItemType[]
}