import PageTitle from '@/components/ui/page-title';
import EditRole from '@/features/user-management/components/edit-role';
import { JSX } from 'react';

interface UmEditCurrentRolePageProps {
    params: Promise<{
        userId: string,
    }>
}

export default async function UmEditCurrentRolePage({ params } : UmEditCurrentRolePageProps): Promise<JSX.Element> {
    const { userId } = await params;

    return (
        <div>
            <PageTitle title='Edit Role' description='Edit current user and assign roles and permissions'/>
            <EditRole userId={userId}/>
        </div>
    )
}

