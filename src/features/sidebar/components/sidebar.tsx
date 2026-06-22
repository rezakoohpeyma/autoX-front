'use client';
import { JSX } from 'react';
import { sidebarWidth } from '../config/sidebar-width';
import SidebarHeader from './sidebar-header';
import SidebarCategory from './sidebar-category';
import { sidebar } from '../config/sidebar';
import SidebarFooter from './sidebar-footer';
import { useSidebarStore } from '../store/use-sidebar-store';
export default function Sidebar(): JSX.Element {
    const isCollapsed = useSidebarStore(state => state.isCollapsed)
    return (
        <div className='bg-white flex justify-center items-start flex-col border border-sidebar-border size-full rounded-2xl'
             style={{width: isCollapsed ? 'auto' : sidebarWidth}}
        >
            <SidebarHeader />
            <div className='overflow-y-scroll w-full flex-1'>
                {sidebar.map((category, i) => <SidebarCategory category={category} key={i}/>)}
            </div>
            <SidebarFooter />
        </div>
    )
}

