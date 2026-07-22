import SignUpForm from '@/features/auth/components/sign-up-form';
import { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = {
    title: "Sign Up"
}

export default function SignUpPage(): JSX.Element {
    return (
        <div className='w-full'>
            <SignUpForm />
        </div>
    )
}

