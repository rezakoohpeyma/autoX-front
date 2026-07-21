import PageTitle from '@/components/ui/page-title';
import CreateUser from '@/features/user-management/components/create-user';
import { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = {
    title: "Create User"
}

export default function UmAddUserPage(): JSX.Element {
    return (
        <div>
            <PageTitle title='Create user' description='Add a new user and assign roles and permissions'/>
            <CreateUser />
        </div>
    )
}

