import { cn } from '@/lib/utils';
import { ComponentProps, JSX } from 'react';

type PageTitleProps = {
    title: string,
    description: string,
} & ComponentProps<'div'>

export default function PageTitle({ title, description, className, ...other } : PageTitleProps): JSX.Element {
    return (
        <div className={
            cn(
                'mt-2 mb-8.5',
                 className || ''
            )
            } 
            {...other}>
            <h2 className='text-2xl capitalize mb-1'>{title}</h2>
            <p className='text-primary/60'>{description}</p>
        </div>
    )
}

