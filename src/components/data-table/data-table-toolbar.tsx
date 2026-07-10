import { ComponentProps, JSX } from 'react';

type DataTableToolbarProps = {
    
} & ComponentProps<'div'>

export default function DataTableToolbar({ children }: DataTableToolbarProps): JSX.Element {
    return (
        <div>
            {children}
        </div>
    )
}

