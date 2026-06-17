import { JSX } from 'react';
export default function Divider({ children } : { children: React.ReactNode }): JSX.Element {
    return (
        <div className='h-0.5 w-full bg-primary/30 relative flex justify-center items-center'>
            <span className='block bg-white px-4 text-primary/80 text-center'>{children}</span>
        </div>
    )
}

