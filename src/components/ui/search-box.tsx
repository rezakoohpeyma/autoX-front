'use client';

import { JSX, useEffect, useState } from 'react';
import {
    usePathname,
    useRouter,
    useSearchParams,
} from 'next/navigation';

import { Input } from './input';

export default function SearchBox(): JSX.Element {
    const router = useRouter();

    const pathname = usePathname();

    const searchParams =
        useSearchParams();

    const [search, setSearch] =
        useState(
            searchParams.get(
                'search'
            ) ?? ''
        );

    useEffect(() => {
        const timeout =
            setTimeout(() => {
                const params =
                    new URLSearchParams(
                        window.location.search
                    );
                if (search.trim()) {
                    params.set(
                        'search',
                        search
                    );
                } else {
                    params.delete(
                        'search'
                    );
                }

                const query =
                    params.toString();

                const nextUrl =
                    query
                        ? `${pathname}?${query}`
                        : pathname;

                router.replace(
                    nextUrl
                );

            }, 500);

        return () =>
            clearTimeout(
                timeout
            );

    }, [
        search,
        pathname,
        router,
    ]);

    return (
        <Input
            className='max-w-70 rounded-sm! bg-search-box-bg border border-search-box-border outline-0 h-6.5 text-xs'
            type='text'
            value={search}
            onChange={(e) =>
                setSearch(
                    e.target.value
                )
            }
            placeholder='Search...'
        />
    );
}