'use client';

import RoleForm from './ui/forms/role-form';
import useGetCurrentRole from '../hooks/use-get-current-role';
import Loading from '@/components/ui/loading';
import useEditRole from '../hooks/use-edit-role';
import { JSX } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { RoleFormType } from '../schemas';

interface EditRoleProps {
    userId: string;
}

export default function EditRole({ userId } : EditRoleProps): JSX.Element {
    const { currentRole, isCurrentRoleLoading } = useGetCurrentRole(userId);
    const { editCurrentRole, isEditingLoading } = useEditRole();
    const handleSubmit: SubmitHandler<RoleFormType> = (role) => {
        editCurrentRole({ role, userId })
    }

    if(isCurrentRoleLoading) 
        return <Loading text='Loading...' size='lg' className='mt-30'/>

    return (
        <RoleForm 
            onSubmit={handleSubmit}
            defaultValues={{
                name: currentRole?.name ?? '',
                description: currentRole?.description ?? "",
                permissionIds: [],
            }}
            submitContent="Edit Role"
            loading={isEditingLoading}
            
        />
    )
}

