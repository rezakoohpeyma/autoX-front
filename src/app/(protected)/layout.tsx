import DashboardHeader from '@/components/ui/dashboard-header';
import Sidebar from '@/features/sidebar/components/sidebar';
import { JSX } from 'react';
export default function ProtectedLayout({ children } : { children: React.ReactNode }): JSX.Element {
    return (
        <div className='p-4.5 bg-white-primary h-screen overflow-hidden flex gap-4.5'>
            <Sidebar />
           <div className='flex-1 flex flex-col gap-4'>
                <DashboardHeader />
                <div className='flex-1'>
                    {children}
                </div> 
           </div>
        </div>
    )
}

