'use client';
import { JSX, useState } from 'react';
import { SidebarCategoryType } from '../types/sidebar-types';
import SidebarItem from './sidebar-item';

interface SideBarCategoryProp {
    category: SidebarCategoryType,
}

export default function SidebarCategory({ category } : SideBarCategoryProp): JSX.Element {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleSelectedId = (id : number) => setSelectedId(lastId => lastId === id ? null : id);
    return (
        <div className='px-6 pt-6'>
            <h3 className='font-medium text-[10px] tracking-wider text-primary/80 uppercase mb-2'>{category.name}</h3>
            <div className='space-y-2'>
                {category.items.map((item, i) => <SidebarItem onSelectedId={handleSelectedId} selectedId={selectedId} item={item} key={i}/>)}
            </div>
            
        </div>
    )
}

