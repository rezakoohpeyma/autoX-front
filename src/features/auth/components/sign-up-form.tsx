'use client';
import AuthForm from './ui/auth-form';
import SubmitBtn from './ui/submit-btn';
import Social from './social';
import Divider from './ui/divider';
import { JSX } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { signUpFormSchema, SignUpFormType } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormWraper } from '@/components/ui/form/form-wraper';
import { FormTitle } from '@/components/ui/form/form-tiitle';
import { Input } from '@/components/ui/form/input';
import { Checkbox } from '@/components/ui/form/checkbox';
import { FormLink } from '@/components/ui/form/form-link';
import { useSignUp } from '../hooks/use-sign-up';
export default function SignUpForm(): JSX.Element {
    const { signUp, isSignUpLoading } = useSignUp()
    const onSubmit: SubmitHandler<SignUpFormType> = (data) => {
        signUp(data);
    }
    const formOpt = {
        resolver: zodResolver(signUpFormSchema),
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
                        defaultValue="Milad"
                        disabled={isSignUpLoading}
                    >
                        First Name
                    </Input>
                    <Input 
                        nameId='lastName'
                        placeholder='Afzali'
                        defaultValue="Afzali"
                        disabled={isSignUpLoading}
                    >
                        Last Name
                    </Input>
                </FormWraper>
                <FormWraper>
                    <Input 
                        nameId='phoneNumber'
                        placeholder='0913000123'
                        defaultValue="09023351759"
                        disabled={isSignUpLoading}
                    >
                        Phone Number
                    </Input>
                    <Input 
                        nameId='email'
                        placeholder='test2@gamil.com'
                        defaultValue="test2@gmail.com"
                        disabled={isSignUpLoading}
                    >
                        Email
                    </Input>
                    <Input 
                        nameId='password'
                        type='password'
                        placeholder='At least 8 characters'
                        defaultValue="aBcD12345678"
                        disabled={isSignUpLoading}
                    >
                        Password
                    </Input>
                    <Input 
                        type='password'
                        nameId='confirmPassword'
                        placeholder='At least 8 characters'
                        defaultValue="aBcD12345678"
                        disabled={isSignUpLoading}
                    >
                        Confirm Password
                    </Input>
                    <Checkbox nameId='terms' checkboxContainerClasses='my-6'>
                        <FormLink 
                            href='#' 
                            question='I agree to the' 
                            linkClasses='text-primary hover:border-primary'
                        >
                            Terms and Conditions
                        </FormLink>
                    </Checkbox>
                </FormWraper>
                <SubmitBtn isLoading={isSignUpLoading}>Create Account</SubmitBtn>
            </FormWraper>
            <FormWraper className='text-center'>
                <Divider className='mb-6'>or sign up with</Divider>
                <Social />
                <FormLink 
                    href='/sign-in' 
                    question='Already have an account?' 
                    className='text-center text-md font-normal mt-6' 
                    linkClasses='text-link hover:border-link'
                >
                    Sign in
                </FormLink>
            </FormWraper>
        </AuthForm>
    )
}

