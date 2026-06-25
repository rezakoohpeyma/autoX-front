'use client';
import { JSX } from 'react';
import { BreadcrumbDynamic } from './breadcrumb-dynamic';
export default function DashboardHeader(): JSX.Element {
    return (
        <header className='w-full h-11.5 py-3.25 px-6 border border-header-b rounded-[30px]'>
            <BreadcrumbDynamic />
        </header>
    )
}

