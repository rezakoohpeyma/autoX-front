'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps, JSX } from 'react';

type NavLinkProps = {
    href: string,
} & ComponentProps<'a'>;

export default function NavLink({href,className, ...other } : NavLinkProps): JSX.Element {
    const path = usePathname()
    return (
        <Link 
            href={href}
            className={cn(href === path ? "bg-[#F6F6F6]" : "", className || '')}
            {...other}
         />
    )
}

