import PageTitle from '@/components/ui/page-title';
import CreateUser from '@/features/user-management/components/create-user';
import { JSX } from 'react';
export default function UmAddUserPage(): JSX.Element {
    return (
        <div>
            <PageTitle title='Create user' description='Add a new user and assign roles and permissions'/>
            <CreateUser />
        </div>
    )
}

