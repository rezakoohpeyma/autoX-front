import PageTitle from '@/components/ui/page-title';
import RolesTable from '@/features/user-management/components/tables/roles/roles-data';
import { JSX } from 'react';
export default function UmRolesPage(): JSX.Element {
    
    return (
        <div>
            <PageTitle title='Roles Management' description='Manage users, roles and permissions'/>
            <div>
                <RolesTable />
            </div>
        </div>
    )
}

