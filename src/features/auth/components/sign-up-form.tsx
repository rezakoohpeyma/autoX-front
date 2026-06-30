'use client';
import { JSX } from 'react';
import AuthForm from './ui/auth-form';
import { SubmitHandler } from 'react-hook-form';
import { signUpSchema, SignUpType } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormWraper } from '@/components/ui/form/form-wraper';
import { FormTitle } from '@/components/ui/form/form-tiitle';
import { Input } from '@/components/ui/form/input';
import { Checkbox } from '@/components/ui/form/checkbox';
import { FormLink } from '@/components/ui/form/form-link';
import SubmitBtn from './ui/submit-btn';
import Social from './social';
import Divider from './ui/divider';
export default function SignUpForm(): JSX.Element {
    const onSubmit: SubmitHandler<SignUpType> = () => {}
    const formOpt = {
        resolver: zodResolver(signUpSchema),
    }
    return (
        <AuthForm 
            onSubmit={onSubmit} 
            formOpt={formOpt}
            className='w-full max-w-113.25 sm:p-2 flex justify-center items-center flex-col gap-7.25 mx-auto'
        >
            <FormWraper className='text-center'>
                <FormTitle className='mb-2 text-3xl font-bold text-primary'>Sign Up</FormTitle>
                <p className='text-primary/80 font-normal text-sm'>Create your account to get started</p>
            </FormWraper>
            <FormWraper>
                <FormWraper className='flex justify-center items-start flex-col sm:gap-4 sm:flex-row'>
                    <Input 
                        nameId='firstName'
                        placeholder='Milad'
                    >
                        First Name
                    </Input>
                    <Input 
                        nameId='lastName'
                        placeholder='Afzali'
                    >
                        Last Name
                    </Input>
                </FormWraper>
                <FormWraper>
                    <Input 
                        nameId='username'
                        placeholder='MiladAfzali123'
                    >
                    Username
                    </Input>
                    <Input 
                        nameId='password'
                        type='password'
                        placeholder='At least 8 characters'
                    >
                        Password
                    </Input>
                    <Input 
                        type='password'
                        nameId='confirmPassword'
                        placeholder='At least 8 characters'
                    >
                        Confirm Password
                    </Input>
                    <Checkbox nameId='rules' checkboxContainerClasses='my-6'>
                        <FormLink href='#' question='I agree to the' linkClasses='text-primary hover:border-primary'>Terms and Conditions</FormLink>
                    </Checkbox>
                </FormWraper>
                <SubmitBtn>Create Account</SubmitBtn>
            </FormWraper>
            <FormWraper className='text-center'>
                <Divider className='mb-6'>or sign up with</Divider>
                <Social />
                <FormLink href='/sign-in' question='Already have an account?' className='text-center text-md text-primary font-normal mt-6' linkClasses='text-link hover:border-link'>Sign in</FormLink>
            </FormWraper>
        </AuthForm>
    )
}

