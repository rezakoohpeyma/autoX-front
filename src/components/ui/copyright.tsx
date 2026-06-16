import { JSX } from 'react';
export default function Copyright(): JSX.Element {
    const year = new Date().getFullYear()
    return (
        <p className='text-primary/60'>
            &copy; {year} AutoX. All rights reserved.
        </p>
    )
}

