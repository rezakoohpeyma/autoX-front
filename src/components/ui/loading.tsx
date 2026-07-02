import { cn } from '@/lib/utils';
import { ComponentProps, JSX } from 'react';

type LoadingProps = {
    hasText?: boolean
} & ComponentProps<'div'>;

export default function Loading({ hasText = false, className, ...other } : LoadingProps): JSX.Element {
    return (
        <div className={cn("flex justify-center items-center flex-col gap-2 animate-pulse",className)} {...other}>
            <div className='size-10 border-4 border-b-transparent border-primary rounded-full animate-spin'/>
            {hasText && <p className='text-primary'>Loading...</p>}
        </div>
    )
}

