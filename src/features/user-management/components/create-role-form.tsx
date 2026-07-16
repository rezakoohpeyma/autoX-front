'use client';
import { JSX } from 'react';
import CreateForm from './ui/create-form';
import MultiSelect from '@/components/ui/form/components/multi-select';
import SubmitBtn from './ui/submit-btn';
import useCreateRole from '../hooks/use-create-role';
import useGetPermissions from '../hooks/use-get-permission';
import { SubmitHandler } from 'react-hook-form';
import { createRoleFormSchema, CreateRoleFormType } from '../schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTitle } from '@/components/ui/form/components/form-tiitle';
import { FormWraper } from '@/components/ui/form/components/form-wraper';
import { FormInput } from '@/components/ui/form/components/form-input';
import { PermissionType } from '@/schemas';

export default function CreateRoleForm(): JSX.Element {
    const { permissions } = useGetPermissions();
    const { createNewRole, isCreateLoading } = useCreateRole()
    const handleSubmit : SubmitHandler<CreateRoleFormType> = (role) => {
        createNewRole(role)
    }
    const formOpt = {
        resolver: zodResolver(createRoleFormSchema),
    }

    return (
        <CreateForm 
            onSubmit={handleSubmit} 
            formOpt={formOpt}
            className='w-fit'
            inputFieldClasses='w-full sm:w-70 max-w-80'
        >
            <FormTitle className='text-lg mb-6.75'>Role Information</FormTitle>
            <FormWraper className='w-full'>
                <FormInput 
                    nameId="name"
                    disabled={isCreateLoading}
                >
                    Name
                </FormInput>
                <FormInput 
                    nameId='description'
                    disabled={isCreateLoading}
                >
                    Description
                </FormInput>
                <MultiSelect<CreateRoleFormType, PermissionType, number> 
                    nameId='permissionIds'
                    options={permissions ?? []}
                    getOptionLabel={(permission) => `${permission.subject}-${permission.action}`}
                    getOptionValue={(permission) => permission.id}
                    defaultTxt='Select Permission'
                    disabled={isCreateLoading}

                >
                    Permissions
                </MultiSelect>
            </FormWraper>
            <SubmitBtn className='w-full' loading={isCreateLoading}>
                Create Role
            </SubmitBtn>
        </CreateForm>
    )
}

