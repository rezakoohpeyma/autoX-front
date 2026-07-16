import PageTitle from '@/components/ui/page-title';
import CreateRoleForm from '@/features/user-management/components/create-role-form';
import { JSX } from 'react';
export default function UmAddRole(): JSX.Element {
    return (
        <div>
            <PageTitle title='Create role' description='Add a new role and assign permissions'/>
            <CreateRoleForm />
        </div>
    )
}

