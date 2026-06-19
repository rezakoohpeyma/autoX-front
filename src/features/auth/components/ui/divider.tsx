import { cn } from '@/lib/utils';
import { JSX } from 'react';
export default function Divider({ children, className }
     : { children: React.ReactNode, className?: string }): JSX.Element {
    return (
        <div className={cn('h-0.5 w-full bg-primary/30 relative flex justify-center items-center', className || '')}>
            <span className='block bg-white px-4 text-primary/80 text-center'>{children}</span>
        </div>
    )
}

