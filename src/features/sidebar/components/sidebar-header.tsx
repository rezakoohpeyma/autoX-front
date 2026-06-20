import Logo from '@/components/ui/logo';
import { JSX } from 'react';
import { FaEllipsisVertical } from 'react-icons/fa6';
export default function SidebarHeader(): JSX.Element {
    return (
        <div className='bg-[#FAFAFA] h-18 border-b-2 border-sidebar-border p-6 flex justify-between items-center'>
            <Logo />
            <button className='text-primary text-xl cursor-pointer'>
                <FaEllipsisVertical/>
            </button>
        </div>
    )
}

