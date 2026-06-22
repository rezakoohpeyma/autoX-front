import { ComponentProps, JSX } from 'react';
import { SidebarItemChildType } from '../types/sidebar-types';
import NavLink from '@/components/ui/nav-link';
type SidebarItemChildProps = {
    item: SidebarItemChildType
} & ComponentProps<'a'>
export default function SidebarItemChild({ item } : SidebarItemChildProps): JSX.Element {
    return (
        <NavLink href={item.link} className='w-full h-8 p-2 text-xs text-[#5C5E64] rounded-lg capitalize'>
            {item.name}
        </NavLink>
    )
}

