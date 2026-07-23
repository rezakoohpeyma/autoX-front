'use client';
import SidebarCollapseToggle from './sidebar-collapse-toggle';
import useSidebar from '../hooks/use-sidebar';
import Logo from '@/components/ui/logo';
import { JSX } from 'react';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { cn } from '@/lib/utils';
export default function SidebarHeader(): JSX.Element {
    const { collapsed, isMobile } = useSidebar();
    return (
        <div className={cn('bg-white-secondary h-18 w-full border-b-2 rounded-tl-2xl rounded-tr-2xl border-sidebar-border p-6 flex items-center relative',
            collapsed ? 'justify-center' : 'justify-between'
        )}>
            <div className='flex items-center gap-2 text-primary font-bold text-lg'>
                <Logo />
                {!collapsed && <span>AutoX</span>}
            </div>
            {!collapsed && 
                <button className='text-primary text-xl cursor-pointer'>
                    <FaEllipsisVertical/>
                </button>
            }
            {!isMobile && <SidebarCollapseToggle />}
        </div>
    )
}

