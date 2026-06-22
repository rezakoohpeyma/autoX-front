'use client';
import { JSX } from 'react';
import { FaInbox } from 'react-icons/fa';
import { useSidebarStore } from '../store/use-sidebar-store';
export default function SidebarFooter(): JSX.Element {
    const isCollapsed = useSidebarStore(state => state.isCollapsed)
    return (
        <div className='h-22 w-full p-6 border-t rounded-bl-2xl rounded-br-2xl border-sidebar-border bg-white-secondary flex justify-center items-center'>
            <button className='flex justify-center items-center text-base w-full py-2 rounded-lg text-primary cursor-pointer border border-[#CACACA] transition-all duration-300 delay-75 hover:text-white hover:bg-[#CACACA]'>
            {isCollapsed 
                ? <FaInbox size={18}/> 
                : 'Inbox'
            }
            </button>
            
        </div>
    )
}

