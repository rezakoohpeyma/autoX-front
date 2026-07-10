import { JSX } from 'react';
import { Button } from '../ui/button';
import { LuRefreshCcw } from 'react-icons/lu';

interface DataTableRefreshButtonProps {
    onRefresh(): void,
    loading: boolean,
}

export default function DataTableRefreshButton({ onRefresh, loading } : DataTableRefreshButtonProps): JSX.Element {
    return (
        <Button
            onClick={onRefresh}
            disabled={loading}
            variant='outline'
            size={'icon-sm'}
            className="text-primary/80 border-primary/80 cursor-pointer text-xl"
        >
            <LuRefreshCcw />
        </Button>
    )
}

