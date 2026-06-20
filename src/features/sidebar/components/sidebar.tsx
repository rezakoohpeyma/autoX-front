import { JSX } from 'react';
import { sidebarWidth } from '../config/sidebar-width';
import SidebarHeader from './sidebar-header';
import SidebarCategory from './sidebar-category';
import { sidebar } from '../config/sidebar';
export default function Sidebar(): JSX.Element {
    return (
        <div className='bg-white border border-sidebar-border size-full rounded-2xl overflow-hidden' style={{width: sidebarWidth}}>
            <SidebarHeader />
            <div className='overflow-y-scroll w-full'>
                {sidebar.map((category, i) => <SidebarCategory category={category} key={i}/>)}
            </div>
        </div>
    )
}

