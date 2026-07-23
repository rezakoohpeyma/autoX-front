'use client';

import useSidebar from '../hooks/use-sidebar';
import { JSX } from 'react';
import { FaInbox } from 'react-icons/fa';

export default function SidebarFooter(): JSX.Element {
    const { collapsed } = useSidebar()
    return (
        <div className='h-22 w-full p-6 border-t rounded-bl-2xl rounded-br-2xl border-sidebar-border bg-white-secondary flex justify-center items-center'>
            <button className='flex justify-center items-center text-base w-full py-2 rounded-lg text-primary cursor-pointer border border-[#CACACA] transition-all duration-300 delay-75 hover:text-white hover:bg-[#CACACA]'>
            {collapsed 
                ? <FaInbox size={18}/> 
                : 'Inbox'
            }
            </button>
            
        </div>
    )
}

