'use client';

import { JSX, useEffect, useState } from 'react';

import { Input } from '../ui/input';
import { debounce, useQueryState } from 'nuqs';
import { useDebounce } from '@/hooks/use-debounce';


interface DataTableSearchProps {
    queryKey: string,
    placeholder?: string,
}

export default function DataTableSearch({ queryKey, placeholder = "Searching..." } : DataTableSearchProps): JSX.Element {
    const [search, setSearch] = useQueryState(queryKey, {
        defaultValue: ''
    });

    const [inputValue, setInputValue] = useState(search ?? "");

    const debouncedValue = useDebounce(inputValue, 500);

    useEffect(() => {
        setSearch(debouncedValue);
    }, [debouncedValue, setSearch]);

    return (
        <Input
            className='w-full md:max-w-70 h-8 md:h-6.5 rounded-sm! bg-search-box-bg border border-search-box-border outline-0 text-xs'
            type='text'
            value={inputValue}
            onChange={(e) =>
                setInputValue(
                    e.target.value
                )
            }
            placeholder={placeholder}
        />
    );
}