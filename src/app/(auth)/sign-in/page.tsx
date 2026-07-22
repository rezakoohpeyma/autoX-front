import SignInForm from '@/features/auth/components/sign-in-form';
import { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = {
    title: "Sign In"
}

export default function SignInPage(): JSX.Element {
    return (
        <div className='w-full'>
            <SignInForm />
        </div>
    )
}

