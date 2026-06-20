import Sidebar from '@/features/sidebar/components/sidebar';
import { JSX } from 'react';
export default function ProtectedLayout({ children } : { children: React.ReactNode }): JSX.Element {
    return (
        <div className='p-4.5 bg-dashboard-bg h-screen overflow-hidden flex gap-4.5'>
            <Sidebar />
           <div className='flex-1'>
                {children} 
           </div>
        </div>
    )
}

