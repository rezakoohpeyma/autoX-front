import { SidebarCategoryType } from "../types/sidebar-types";

export const sidebar: SidebarCategoryType[] = Array.from({ length : 5 }, (i: number) => {
    return {
        id: i,
        name: "Test" + i,
        items: [
            {
                id: 0,
                name: "SubTest1",
                link: "/",
                icon: null,
            },
            {
                id: 1,
                name: "SubTest2",
                link: '/' + String(Math.random() * 12),
                icon: 'FaApple',
            }
        ]
    }
})