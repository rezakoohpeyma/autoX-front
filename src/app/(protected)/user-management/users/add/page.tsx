import PageTitle from '@/components/ui/page-title';
import CreateUserForm from '@/features/user-management/components/create-user-form';
import { JSX } from 'react';
export default function UmAddUser(): JSX.Element {
    return (
        <div>
            <PageTitle title='Create user' description='Add a new user and assign roles and permissions'/>
            <CreateUserForm />
        </div>
    )
}

