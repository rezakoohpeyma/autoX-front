
import { JSX, ReactNode } from 'react';
import { FaGear, FaIdCard, FaRightFromBracket, FaUser } from 'react-icons/fa6';
import HeaderControlItem from './header-control-item';

export type MenuItem = {
  label?: string
  icon?: ReactNode,
  href?: string
  onClick?: () => void
  separator?: boolean
}

export type Menus = {
  trigger: ReactNode
  label?: string
  items: MenuItem[]
}

const menus: Menus[] = [
    {
        trigger: <FaUser />,
        label: "User",
        items: [
            {
                label: "Show Detail",
                icon: <FaIdCard />,
                href:'#'
                
            },
            { separator: true },
            {
                label: "Log out",
                icon: <FaRightFromBracket />,
                href:'#',
                
            },
        ]
    }
]
export default function HeaderControls(): JSX.Element {
    return (
        <div className='flex justify-center items-center gap-3 text-[#A6ADBF] text-base'>
            {menus.map((menu, i) => 
                <HeaderControlItem label={menu.label} trigger={menu.trigger}  items={menu.items} key={i}/>
            )}
            <button className='cursor-pointer'>
                <FaGear />
            </button>
        </div>
    )
}

