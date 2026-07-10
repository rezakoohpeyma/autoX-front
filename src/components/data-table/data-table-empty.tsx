import { JSX } from 'react';
import { TableCell, TableRow } from '../ui/table';

interface DataTableEmptyProps {
    colSpan: number,
}

export default function DataTableEmpty({ colSpan } : DataTableEmptyProps): JSX.Element {
    return (
        <TableRow>
              <TableCell colSpan={colSpan} className="h-24 text-center">
                No results.
              </TableCell>
        </TableRow> 
    )
}

