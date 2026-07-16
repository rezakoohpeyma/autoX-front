import PageTitle from '@/components/ui/page-title';
import PermissionsTable from '@/features/user-management/components/tables/permissions/permissions-data';
import { JSX } from 'react';
export default function UmPermissionsPage(): JSX.Element {
    
    return (
        <div>
            <PageTitle title='Permissions Management' description='Manage users, roles and permissions'/>
            <div>
                <PermissionsTable />
            </div>
        </div>
    )
}

