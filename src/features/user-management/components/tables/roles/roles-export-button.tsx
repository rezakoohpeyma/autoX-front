import DataTableButton from '@/components/data-table/data-table-button';
import { JSX } from 'react';
import { LuDownload } from 'react-icons/lu';
export default function RolesExportButton(): JSX.Element {
    return (
        <DataTableButton disabled={true}>
            Export
            <LuDownload className='font-bold' />
        </DataTableButton>
    )
}

