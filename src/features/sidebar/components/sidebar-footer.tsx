import { JSX } from 'react';
export default function SidebarFooter(): JSX.Element {
    return (
        <div className='h-22 w-full p-6 border-t rounded-bl-2xl rounded-br-2xl border-sidebar-border bg-white-secondary flex justify-center items-center'>
            <button className='w-full py-2 rounded-lg text-primary cursor-pointer border border-[#CACACA] transition-all duration-300 delay-75 hover:text-white hover:bg-[#CACACA]'>Inbox</button>
        </div>
    )
}

