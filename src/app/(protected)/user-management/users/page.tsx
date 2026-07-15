import PageTitle from '@/components/ui/page-title';
import UsersTable from '@/features/user-management/components/tables/users/users-data';
import { JSX } from 'react';
export default function UmUsersPage(): JSX.Element {
    
    return (
        <div>
            <PageTitle title='User Management' description='Manage users, roles and permissions'/>
            <div>
                <UsersTable />
            </div>
        </div>
    )
}

