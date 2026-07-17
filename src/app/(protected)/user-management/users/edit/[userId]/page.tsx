import PageTitle from '@/components/ui/page-title';
import EditUser from '@/features/user-management/components/edit-user';
import { JSX } from 'react';

interface UmEditCurrentUserPageProps {
    params: Promise<{ userId: string }>    
}

export default async function UmEditCurrentUserPage({ params } : UmEditCurrentUserPageProps): Promise<JSX.Element> {
    const { userId } = await params
    console.log(userId)
    return (
        <div>
            <PageTitle title='Edit User' description='Edit current user and assign roles and permissions'/>
            <EditUser userId={userId}/>
        </div>
    )
}

