'use client';
import { JSX } from 'react';
import { BreadcrumbDynamic } from './breadcrumb-dynamic';
import HeaderControls from './header-controls';
export default function DashboardHeader(): JSX.Element {
    return (
        <header className='w-full h-11.5 flex justify-between items-center py-3.25 px-6 border border-header-b rounded-[30px]'>
            <BreadcrumbDynamic />
            <HeaderControls />
        </header>
    )
}

