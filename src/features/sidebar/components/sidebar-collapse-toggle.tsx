'use client';
import { JSX } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useSidebar from '../hooks/use-sidebar';
export default function SidebarCollapseToggle(): JSX.Element {
    const { toggleSidebar } = useSidebar();
    return (
        <div 
            onClick={toggleSidebar}
            className='size-7 rounded-lg bg-white border border-sidebar-border flex justify-center items-center text-[10px] text-primary font-medium cursor-pointer absolute -bottom-3.5 -right-3.5'
        >
            <FaChevronLeft />
            <FaChevronRight />
        </div>
    )
}

