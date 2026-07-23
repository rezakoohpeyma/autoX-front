import DashboardHeader from '@/components/ui/dashboard-header';
import Sidebar from '@/features/sidebar/components/sidebar';
import ProtectedProviders from '@/providers/protected-providers';
import { JSX } from 'react';
export default function ProtectedLayout({ children } : { children: React.ReactNode }): JSX.Element {
    return (
        <ProtectedProviders>
            <div className='p-4.5 bg-white-primary h-screen overflow-hidden flex gap-4.5'>
                <Sidebar />
                <div className='flex-1 min-w-0 flex flex-col gap-4'>
                    <DashboardHeader />
                    <main className='flex-1 min-w-0 overflow-y-scroll px-5'>
                        {children}
                    </main> 
                </div>
            </div>
        </ProtectedProviders>
    )
}

