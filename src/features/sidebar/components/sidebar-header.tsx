'use client';
import Logo from '@/components/ui/logo';
import { JSX } from 'react';
import { FaEllipsisVertical } from 'react-icons/fa6';
import SidebarCollapseToggle from './sidebar-collapse-toggle';
import { useSidebarStore } from '../store/use-sidebar-store';
import { cn } from '@/lib/utils';
export default function SidebarHeader(): JSX.Element {
    const isCollapsed = useSidebarStore(state => state.isCollapsed)
    return (
        <div className={cn('bg-white-secondary h-18 w-full border-b-2 rounded-tl-2xl rounded-tr-2xl border-sidebar-border p-6 flex items-center relative',
            isCollapsed ? 'justify-center' : 'justify-between'
        )}>
            <div className='flex items-center gap-2 text-primary font-bold text-lg'>
                <Logo />
                {!isCollapsed && <span>AutoX</span>}
            </div>
            {!isCollapsed && 
                <button className='text-primary text-xl cursor-pointer'>
                    <FaEllipsisVertical/>
                </button>
            }
            <SidebarCollapseToggle />
        </div>
    )
}

