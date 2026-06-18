import Link, { LinkProps } from 'next/link';
import { JSX, ReactNode } from 'react';

interface SocialBtnProps extends LinkProps {
    icon: ReactNode; 
    label: string;   
    className?: string; 
    href: string;
}

export default function SocialBtn({ 
    icon, 
    label, 
    className = '', 
    href = "",
    ...props 
}: SocialBtnProps): JSX.Element {
    return (
        <Link 
            href={href}
            {...props} 
            className={`w-full bg-secondary shadow font-normal transition-all delay-75 duration-300 h-13 rounded-xl px-2.25 py-3 flex justify-center items-center gap-4.5 hover:font-bold ${className}`}
        >
            <div className="text-primary">{icon}</div>
            <span className='text-base text-primary/80'>{label}</span>
        </Link>
    )
}
