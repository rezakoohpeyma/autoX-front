'use client';
import useGetPermissions from '@/features/user-management/hooks/use-get-permission';
import MultiSelect from '@/components/ui/form/components/multi-select';
import UserManagementForm from './user-management-form';
import SubmitBtn from '../submit-btn';
import { JSX, ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTitle } from '@/components/ui/form/components/form-tiitle';
import { FormWraper } from '@/components/ui/form/components/form-wraper';
import { FormInput } from '@/components/ui/form/components/form-input';
import { PermissionType } from '@/schemas';
import { roleFormSchema, RoleFormType } from '@/features/user-management/schemas';

interface RoleFormProps {
    onSubmit: SubmitHandler<RoleFormType>;
    defaultValues?: RoleFormType;
    submitContent: ReactNode;
    loading: boolean;
}

export default function RoleForm({ onSubmit, defaultValues, submitContent, loading } : RoleFormProps): JSX.Element {
    const { permissions } = useGetPermissions();
    const formOpt = {
        resolver: zodResolver(roleFormSchema),
        defaultValues,
    }

    return (
        <UserManagementForm 
            onSubmit={onSubmit} 
            formOpt={formOpt}
            className='w-full md:w-fit'
            inputFieldClasses='w-full md:w-70 md:max-w-80'
        >
            <FormTitle className='text-lg mb-6.75'>Role Information</FormTitle>
            <FormWraper className='w-full'>
                <FormInput 
                    nameId="name"
                    disabled={loading}
                >
                    Name
                </FormInput>
                <FormInput 
                    nameId='description'
                    disabled={loading}
                >
                    Description
                </FormInput>
                <MultiSelect<RoleFormType, PermissionType, number> 
                    nameId='permissionIds'
                    options={permissions ?? []}
                    getOptionLabel={(permission) => `${permission.subject}-${permission.action}`}
                    getOptionValue={(permission) => permission.id}
                    defaultTxt='Select Permission'
                    disabled={loading}

                >
                    Permissions
                </MultiSelect>
            </FormWraper>
            <SubmitBtn className='w-full' loading={loading}>
                {submitContent}
            </SubmitBtn>
        </UserManagementForm>
    )
}

