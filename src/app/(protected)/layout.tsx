import { JSX } from 'react';
export default function ProtectedLayout({ children } : { children: React.ReactNode }): JSX.Element {
    return (
        <div>
           {children} 
        </div>
    )
}

