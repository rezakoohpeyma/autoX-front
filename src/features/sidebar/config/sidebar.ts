import { SidebarCategoryType } from "../types/sidebar-types";

export const sidebar: SidebarCategoryType[] = Array.from({ length : 10 }, (i: number) => {
    return {
        id: i,
        name: "Test" + i,
        items: [
            {
                id: 0,
                name: "SubTest1",
                link: "/",
                icon: null,
                hasChild: [
                    {
                        id: 0,
                        name: 'test1',
                        link: '/'
                    },
                    {
                        id: 1,
                        name: 'test2',
                        link: 'test3'
                    },
                    {
                        id: 3,
                        name: 'test3',
                        link: 'test2'
                    }
                ]
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