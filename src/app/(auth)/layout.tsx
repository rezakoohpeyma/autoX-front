import LoginBanner from '@/features/auth/components/login-banner';
import { JSX } from 'react';
export default function AuthLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className='p-8 h-full'>
            <div className='relative h-full flexs justify-between items-center'>
                <div>
                    {children}
                </div>
                <LoginBanner />
            </div>
        </div>
    )
}

