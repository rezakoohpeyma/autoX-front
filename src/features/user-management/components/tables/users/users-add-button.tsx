import DataTableButton from '@/components/data-table/data-table-button';
import { routes } from '@/config/routes';
import { redirect } from 'next/navigation';
import { JSX } from 'react';
import { LuPlus } from 'react-icons/lu';

export default function UsersAddButton(): JSX.Element {

    function handleClick(){
        redirect(routes.userManagementAddUser)
    }
    return (
        <DataTableButton onClick={handleClick}>
            Add User
            <LuPlus />
        </DataTableButton>
    )
}

