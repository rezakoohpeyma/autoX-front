import Loading from '@/components/ui/loading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ComponentProps, JSX } from 'react';

type SubmitBtnProps = {
    loading?: boolean
} & ComponentProps<'button'>

export default function SubmitBtn({ children, className, loading = false, ...other } : SubmitBtnProps): JSX.Element {
    return (
        <Button 
            {...other} 
            size={'lg'} 
            type='submit'
            disabled={loading}
            className={
                cn(
                    'text-lg py-5 px-4 border-primary text-white cursor-pointer min-w-25',
                    className
                )
        }>
            {loading ? <Loading size='sm' spinnerClasses='border-white border-b-transparent'/> : children}
        </Button>
    )
}

