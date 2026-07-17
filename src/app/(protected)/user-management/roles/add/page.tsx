import PageTitle from '@/components/ui/page-title';
import CreateRole from '@/features/user-management/components/create-role';
import { JSX } from 'react';
export default function UmAddRole(): JSX.Element {
    return (
        <div>
            <PageTitle title='Create role' description='Add a new role and assign permissions'/>
            <CreateRole />
        </div>
    )
}

