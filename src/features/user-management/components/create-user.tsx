'use client';
import useCreateUser from '../hooks/use-create-user';
import UserForm from './ui/forms/user-form';
import { JSX } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { UserFormType } from '../schemas';

export default function CreateUser(): JSX.Element {
    const { createNewUser, isCreateLoading } = useCreateUser()

    const handleSubmit: SubmitHandler<UserFormType> = (user) => {
        createNewUser(user)
    }

    return (
        <UserForm
            onSubmit={handleSubmit}
            loading={isCreateLoading}
            submitContent="Create User"
        />
    )
}

