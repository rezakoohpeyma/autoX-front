'use client';
import AuthForm from './ui/auth-form';
import SubmitBtn from './ui/submit-btn';
import Social from './social';
import Divider from './ui/divider';
import { JSX } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { signUpFormSchema, SignUpFormType } from '../schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormWraper } from '@/components/ui/form/components/form-wraper';
import { FormTitle } from '@/components/ui/form/components/form-tiitle';
import { FormInput } from '@/components/ui/form/components/form-input';
import { FormCheckbox } from '@/components/ui/form/components/form-checkbox';
import { FormLink } from '@/components/ui/form/components/form-link';
import { useSignUp } from '../hooks/use-sign-up';
import { routes } from '@/config/routes';

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
                    <FormInput 
                        nameId='firstName'
                        placeholder='Milad'
                        defaultValue="Milad"
                        disabled={isSignUpLoading}
                    >
                        First Name
                    </FormInput>
                    <FormInput 
                        nameId='lastName'
                        placeholder='Afzali'
                        defaultValue="Afzali"
                        disabled={isSignUpLoading}
                    >
                        Last Name
                    </FormInput>
                </FormWraper>
                <FormWraper>
                    <FormInput 
                        nameId='phoneNumber'
                        placeholder='0913000123'
                        defaultValue="09023351759"
                        disabled={isSignUpLoading}
                    >
                        Phone Number
                    </FormInput>
                    <FormInput 
                        nameId='email'
                        placeholder='test2@gamil.com'
                        defaultValue="test2@gmail.com"
                        disabled={isSignUpLoading}
                    >
                        Email
                    </FormInput>
                    <FormInput 
                        nameId='password'
                        type='password'
                        placeholder='At least 8 characters'
                        defaultValue="aBcD12345678"
                        disabled={isSignUpLoading}
                    >
                        Password
                    </FormInput>
                    <FormInput 
                        type='password'
                        nameId='confirmPassword'
                        placeholder='At least 8 characters'
                        defaultValue="aBcD12345678"
                        disabled={isSignUpLoading}
                    >
                        Confirm Password
                    </FormInput>
                    <FormCheckbox nameId='terms' checkboxContainerClasses='my-6'>
                        <FormLink 
                            href='#' 
                            question='I agree to the' 
                            linkClasses='text-primary hover:border-primary'
                        >
                            Terms and Conditions
                        </FormLink>
                    </FormCheckbox>
                </FormWraper>
                <SubmitBtn isLoading={isSignUpLoading}>Create Account</SubmitBtn>
            </FormWraper>
            <FormWraper className='text-center'>
                <Divider className='mb-6'>or sign up with</Divider>
                <Social />
                <FormLink 
                    href={routes.signIn} 
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

