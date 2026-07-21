import PageTitle from '@/components/ui/page-title';
import CreateRole from '@/features/user-management/components/create-role';
import { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = {
    title: "Create Role"
}

export default function UmAddRole(): JSX.Element {
    return (
        <div>
            <PageTitle title='Create role' description='Add a new role and assign permissions'/>
            <CreateRole />
        </div>
    )
}

