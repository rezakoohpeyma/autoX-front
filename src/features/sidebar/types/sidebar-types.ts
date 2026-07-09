import * as ReactIcons from "react-icons/lu";

export type SidebarItemChildType = {
    id: number,
    name: string,
    link: string,
}

export type SidebarItemType = {
    id: number,
    name: string,
    link: string,
    icon: keyof typeof ReactIcons | null,
    hasChild?: SidebarItemChildType[],
}

export type SidebarCategoryType = {
    id: number,
    name: string,
    items: SidebarItemType[],
}