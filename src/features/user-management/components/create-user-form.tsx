'use client';

import Form from '@/components/ui/form';
import SubmitBtn from './ui/submit-btn';
import useGetRoles from '../hooks/use-get-roles';
import MultiSelect from '@/components/ui/form/components/multi-select';
import { JSX } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { createUserFormSchema, CreateUserFormType } from '../schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTitle } from '@/components/ui/form/components/form-tiitle';
import { FormWraper } from '@/components/ui/form/components/form-wraper';
import { FormInput } from '@/components/ui/form/components/form-input';
import { FormSelect } from '@/components/ui/form/components/form-select';
import { RoleType } from '@/schemas';
import useCreateUser from '../hooks/use-create-user';
import CreateForm from './ui/create-form';

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

export default function CreateUserForm(): JSX.Element {
    const { roles } = useGetRoles();
    const { createNewUser, isCreateLoading } = useCreateUser()

    const handleSubmit: SubmitHandler<CreateUserFormType> = (user) => {
        createNewUser(user)
    }
    const formOpt = {
        resolver: zodResolver(createUserFormSchema)
    }

    return (
        <CreateForm<CreateUserFormType> 
            formOpt={formOpt} 
            onSubmit={handleSubmit} 
        >
            <FormTitle className='text-lg mb-6.75'>Personal Information</FormTitle>
                <FormWraper className='flex justify-between  flex-wrap'>
                    <FormInput 
                        nameId='firstName'
                        disabled={isCreateLoading}
                    >
                        First Name
                    </FormInput>
                    <FormInput 
                        nameId='lastName' 
                        disabled={isCreateLoading}
                    >
                        Last Name
                    </FormInput>
                </FormWraper>
                <FormWraper className='flex justify-between flex-wrap'>
                    <FormInput 
                        nameId='phoneNumber'
                        disabled={isCreateLoading}
                    >
                        Phone Number
                    </FormInput>
                    <FormInput 
                        nameId='email'
                        disabled={isCreateLoading}
                    >
                        Email
                    </FormInput>
                </FormWraper>
                <FormWraper className='flex justify-between flex-wrap'>
                    <FormInput 
                        type='password' 
                        nameId='password'
                        disabled={isCreateLoading}
                    >
                        Password
                    </FormInput>
                    <FormSelect 
                        nameId="isActive" 
                        dataArray={ActiveOptions} 
                        transformValue={(value) => value === 'true'}
                        disabled={isCreateLoading}
                    >
                        Active
                    </FormSelect>
                </FormWraper>
                <FormWraper className='flex justify-between flex-wrap'>
                    <MultiSelect<CreateUserFormType ,RoleType, number>
                        nameId='rolesIds'
                        options={roles ?? []}
                        getOptionValue={(role) => role.id}
                        getOptionLabel={role => role.name}
                        defaultTxt='Select Roles'
                        disabled={isCreateLoading}
                    >Roles</MultiSelect>
                </FormWraper>
            <SubmitBtn loading={isCreateLoading}>
                Create User
            </SubmitBtn>
        </CreateForm>
    )
}

