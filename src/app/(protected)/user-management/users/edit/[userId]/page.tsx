import PageTitle from '@/components/ui/page-title';
import EditUser from '@/features/user-management/components/edit-user';
import { Metadata } from 'next';
import { JSX } from 'react';

interface UmEditCurrentUserPageProps {
    params: Promise<{ userId: string }>    
}


export async function generateMetadata({ params }: UmEditCurrentUserPageProps): Promise<Metadata>{
    const { userId } = await params
    return {
        title: `Edit User #${userId}`
    }
}
export default async function UmEditCurrentUserPage({ params } : UmEditCurrentUserPageProps): Promise<JSX.Element> {
    const { userId } = await params
    return (
        <div>
            <PageTitle title='Edit User' description='Edit current user and assign roles and permissions'/>
            <EditUser userId={userId}/>
        </div>
    )
}

