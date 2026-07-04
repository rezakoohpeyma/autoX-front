'use client';
import SubmitBtn from './ui/submit-btn';
import AuthForm from './ui/auth-form';
import Copyright from '@/components/ui/copyright';
import Divider from './ui/divider';
import Social from './social';
import { JSX } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { signInFormSchema, SignInFormType } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTitle } from '@/components/ui/form/form-tiitle';
import { FormWraper } from '@/components/ui/form/form-wraper';
import { Input } from '@/components/ui/form/input';
import { FormLink } from '@/components/ui/form/form-link';
import useSignIn from '../hooks/use-sign-in';
export default function SignInForm(): JSX.Element {
    const { signIn, isSignInLoading } = useSignIn()
    const onSubmit: SubmitHandler<SignInFormType> = (formData) => {
        signIn(formData)
    }

    const formOpt = {
        resolver: zodResolver(signInFormSchema),
    }
    return (
        <AuthForm<SignInFormType> 
            onSubmit={onSubmit} 
            formOpt={formOpt}
            className="w-full max-w-97 mx-auto flex justify-center items-center flex-col gap-6 sm:gap-12"
        >    
            <FormWraper>
                <FormTitle className='text-primary mb-7 font-semibold text-[28px] sm:text-[36px] tracking-wider'>
                    Welcome Back &nbsp;
                    <span>👋</span>
                </FormTitle>
                <p className='font-normal text-[15px] sm:text-[20px] text-primary/80'>
                    Today is a new day. It&#39;s your day. You shape it. 
                    Sign in to start managing your projects.
                </p>
            </FormWraper>
            <FormWraper>
                <Input 
                    nameId='phoneNumber'
                    placeholder='09130001234'
                    defaultValue="09023351759"
                    disabled={isSignInLoading}
                >
                    Phone Number
                </Input>
                <Input 
                    type='password'
                    nameId='password'
                    placeholder='At least 8 characters'
                    defaultValue="aA@dasd512312"
                    disabled={isSignInLoading}
                >
                    Password
                </Input>
                <FormLink href='#' className='my-6 text-right' linkClasses='text-link font-normal text-base'>Forget Password?</FormLink>
                <SubmitBtn isLoading={isSignInLoading}>Sign in</SubmitBtn>
            </FormWraper>
            <FormWraper className='text-center'>
                <Divider className='mb-6'>Or</Divider>
                <Social />
                <FormLink question="Don't you have an account?" href='/sign-up' className='text-primary text-lg my-[48px]' linkClasses='text-link font-normal text-lg'>Sign up</FormLink>
                <Copyright />
            </FormWraper>
        </AuthForm>
    )
}

