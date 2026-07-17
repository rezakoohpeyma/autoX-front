'use client';

import MultiSelect from '@/components/ui/form/components/multi-select';
import useGetRoles from '@/features/user-management/hooks/use-get-roles';
import UserManagementForm from './user-management-form';
import SubmitBtn from '../submit-btn';
import { JSX, ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTitle } from '@/components/ui/form/components/form-tiitle';
import { FormWraper } from '@/components/ui/form/components/form-wraper';
import { FormInput } from '@/components/ui/form/components/form-input';
import { FormSelect } from '@/components/ui/form/components/form-select';
import { RoleType } from '@/schemas';
import { userFormSchema, UserFormType } from '@/features/user-management/schemas';

const ActiveOptions = [
    {
        id: 0,
        value: 'true',
        content: 'Enable'
    },
    {
        id: 1,
        value: 'false',
        content: 'Disable',
    },
]

interface UserFormProps {
    onSubmit: SubmitHandler<UserFormType>;
    defaultValues?: UserFormType;
    loading: boolean;
    submitContent: ReactNode;
}

export default function UserForm({ onSubmit, defaultValues, loading, submitContent } : UserFormProps): JSX.Element {
    const { roles } = useGetRoles();
 
    const formOpt = {
        resolver: zodResolver(userFormSchema),
        defaultValues,
    }

    return (
        <UserManagementForm<UserFormType> 
            formOpt={formOpt} 
            onSubmit={onSubmit} 
            inputFieldClasses='min-w-70 max-w-1/3'
            className='w-11/12 max-w-200'
        >
            <FormTitle className='text-lg mb-6.75'>Personal Information</FormTitle>
                <FormWraper className='flex justify-between  flex-wrap'>
                    <FormInput 
                        nameId='firstName'
                        disabled={loading}
                    >
                        First Name
                    </FormInput>
                    <FormInput 
                        nameId='lastName' 
                        disabled={loading}
                    >
                        Last Name
                    </FormInput>
                </FormWraper>
                <FormWraper className='flex justify-between flex-wrap'>
                    <FormInput 
                        nameId='phoneNumber'
                        disabled={loading}
                    >
                        Phone Number
                    </FormInput>
                    <FormInput 
                        nameId='email'
                        disabled={loading}
                    >
                        Email
                    </FormInput>
                </FormWraper>
                <FormWraper className='flex justify-between flex-wrap'>
                    <FormInput 
                        type='password' 
                        nameId='password'
                        disabled={loading}
                    >
                        Password
                    </FormInput>
                    <FormSelect 
                        nameId="isActive" 
                        dataArray={ActiveOptions} 
                        transformValue={(value) => value === 'true'}
                        disabled={loading}
                    >
                        Active
                    </FormSelect>
                </FormWraper>
                <FormWraper className='flex justify-between flex-wrap'>
                    <MultiSelect<UserFormType ,RoleType, number>
                        nameId='rolesIds'
                        options={roles ?? []}
                        getOptionValue={(role) => role.id}
                        getOptionLabel={role => role.name}
                        defaultTxt='Select Roles'
                        disabled={loading}
                    >Roles</MultiSelect>
                </FormWraper>
            <SubmitBtn loading={loading}>
                {submitContent}
            </SubmitBtn>
        </UserManagementForm>
    )
}

