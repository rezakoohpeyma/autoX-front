import AuthBanner from '@/features/auth/components/auth-banner';
import { JSX } from 'react';
export default function AuthLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className='p-8 h-full'>
            <div className='relative h-full flexs justify-between items-center'>
                <div>
                    {children}
                </div>
                <AuthBanner />
            </div>
        </div>
    )
}

