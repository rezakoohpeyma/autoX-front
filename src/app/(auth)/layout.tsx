import AuthBanner from '@/features/auth/components/auth-banner';
import { JSX } from 'react';
export default function AuthLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className='p-6 sm:p-8 h-full w-full'>
            <div className='relative h-full w-full flex flex-col-reverse justify-between items-center gap-4 lg:gap-8 lg:flex-row'>
                <div className='flex-1 w-full lg:overflow-y-scroll py-7 lg:py-20 h-screen'>
                    {children}
                </div>
                <AuthBanner />
            </div>
        </div>
    )
}

