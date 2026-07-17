'use client';
import useCreateRole from '../hooks/use-create-role';
import RoleForm from './ui/forms/role-form';
import { JSX } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { RoleFormType } from '../schemas';


export default function CreateRole(): JSX.Element {
    const { createNewRole, isCreateLoading } = useCreateRole()

    const handleSubmit : SubmitHandler<RoleFormType> = (role) => {
        createNewRole(role)
    }

    return (
        <RoleForm 
            onSubmit={handleSubmit}
            loading={isCreateLoading}
            submitContent="Create Role"
        />
    )
}

