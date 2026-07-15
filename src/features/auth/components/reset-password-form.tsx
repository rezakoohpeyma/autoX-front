'use client';
import AuthForm from './ui/auth-form';
import SubmitBtn from './ui/submit-btn';
import Copyright from '@/components/ui/copyright';
import { JSX } from 'react';
import { FormWraper } from '@/components/ui/form/components/form-wraper';
import { FormInput } from '@/components/ui/form/components/form-input';
import { resetPasswordFormSchema, ResetPasswordType } from '../schemas';
import { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormLink } from '@/components/ui/form/components/form-link';
import { routes } from '@/config/routes';

export default function ResetPasswordForm(): JSX.Element {
    const onSubmit: SubmitHandler<ResetPasswordType> = (formData) => {}
    const formOpt = {
        resolver: zodResolver(resetPasswordFormSchema)
    }
    return (
        <AuthForm 
            onSubmit={onSubmit} 
            formOpt={formOpt} 
            className="w-full max-w-97 mx-auto flex justify-center items-center flex-col gap-6 sm:gap-12"
        >
            <FormWraper>
                <FormInput
                    nameId='phoneNumber'
                >
                    Phone Number
                </FormInput>
                <FormInput
                    type='password'
                    nameId='password'
                >
                    Password
                </FormInput>
                <SubmitBtn className='mt-4'>Send Code</SubmitBtn>
            </FormWraper>
            <FormWraper className='text-center'>
                <FormLink 
                    question="Back to" 
                    href={routes.signIn}
                    className='text-primary text-lg mb-5' 
                    linkClasses='text-link font-normal text-lg'
                >
                    Sign in
                </FormLink>
                <Copyright />
            </FormWraper>
        </AuthForm>
    )
}

