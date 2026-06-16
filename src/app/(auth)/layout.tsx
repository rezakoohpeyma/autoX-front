import AuthBanner from '@/features/auth/components/auth-banner';
import { JSX } from 'react';
export default function AuthLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className='p-8 h-full'>
            <div className='relative h-full flex justify-between items-center gap-8'>
                <div className='flex-1 overflow-y-scroll py-20 h-screen'>
                    {children}
                </div>
                <AuthBanner />
            </div>
        </div>
    )
}

