'use client';
import { JSX } from 'react';
import AuthForm from './ui/auth-form';
import { FormWraper } from '@/components/ui/form/form-wraper';
import { Input } from '@/components/ui/form/input';
import { resetPasswordFormSchema, ResetPasswordType } from '../schema';
import { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SubmitBtn from './ui/submit-btn';
import { FormLink } from '@/components/ui/form/form-link';
import Copyright from '@/components/ui/copyright';
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
                <Input
                    nameId='phoneNumber'
                >
                    Phone Number
                </Input>
                <Input
                    type='password'
                    nameId='password'
                >
                    Password
                </Input>
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

