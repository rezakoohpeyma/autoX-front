import ResetPasswordForm from '@/features/auth/components/reset-password-form';
import { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = {
    title: "Reset Password"
}

export default function ResetPasswordPage(): JSX.Element {
    return (
        <div>
            <ResetPasswordForm />
        </div>
    )
}

