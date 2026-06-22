import Logo from '@/components/ui/logo';
import { JSX } from 'react';
import { FaEllipsisVertical } from 'react-icons/fa6';
import SidebarCollapseToggle from './sidebar-collapse-toggle';
export default function SidebarHeader(): JSX.Element {
    return (
        <div className='bg-white-secondary h-18 w-full border-b-2 rounded-tl-2xl rounded-tr-2xl border-sidebar-border p-6 flex justify-between items-center relative'>
            <Logo />
            <button className='text-primary text-xl cursor-pointer'>
                <FaEllipsisVertical/>
            </button>
            <SidebarCollapseToggle />
        </div>
    )
}

