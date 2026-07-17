'use client'
import useEditUser from '../hooks/use-edit-user';
import useGetCurrentUser from '../hooks/use-get-current-user';
import UserForm from './ui/forms/user-form';
import { JSX } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { UserFormType } from '../schemas';
import Loading from '@/components/ui/loading';

interface EditUserProps {
    userId: string,
}

export default function EditUser({ userId } : EditUserProps): JSX.Element {

    const { currentUser , isCurrentUserLoading } = useGetCurrentUser(userId)
    const { editCurrentUser, isEditingLoading } = useEditUser()
    const handleSubmit: SubmitHandler<UserFormType> = (user) => {
        editCurrentUser({user, userId})
    };

    if(isCurrentUserLoading) return <Loading text='Loading...' size='lg' className='mt-30'/>
    return (
        <UserForm
            onSubmit={handleSubmit}
            loading={isEditingLoading}
            submitContent="Edit User"
            defaultValues={{
                firstName: currentUser?.firstName ?? '',
                lastName: currentUser?.lastName ?? '',
                phoneNumber:  '',
                email: '',
                password: '',
                isActive: currentUser?.isActive ?? true,
                rolesIds: []
            }}
        />
    )
}

