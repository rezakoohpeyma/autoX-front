import { JSX } from 'react';
import { Button } from '../ui/button';
import { LuRefreshCcw } from 'react-icons/lu';

interface DataTableRefreshButtonProps {
    onRefresh(): void,
    loading?: boolean,
}

export default function DataTableRefreshButton({ onRefresh, loading = false } : DataTableRefreshButtonProps): JSX.Element {
    return (
        <Button
            onClick={onRefresh}
            disabled={loading}
            variant='outline'
            className="text-primary/80 border-primary/80 text-7xl! p-0 cursor-pointer"
            size={'icon-lg'}
        >
            <LuRefreshCcw />
        </Button>
    )
}

