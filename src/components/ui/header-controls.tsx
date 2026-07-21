'use client';

import { JSX, useState } from 'react';
import { FaGear, FaIdCard, FaRightFromBracket, FaUser } from 'react-icons/fa6';
import HeaderMenu from './header-menu';
import { DropdownMenuItem, DropdownMenuSeparator } from './dropdown-menu';
import LogoutDialog from './logout-dialog';

export default function HeaderControls(): JSX.Element {
    const [openLogoutDialog, setOpenLogoutDialog] = useState<boolean>(false);
    const handleOpenLogoutDialog = (e: Event) => {
        e.preventDefault()
        setOpenLogoutDialog(true);
    }

    return (
        <div className='flex justify-center items-center gap-3 text-[#A6ADBF] text-base'>
            <HeaderMenu trigger={<FaUser />} label='User'>
                <DropdownMenuItem>
                    <p className="flex justify-center items-center gap-1 text-black/60 cursor-pointer">
                        <span>
                            <FaIdCard />
                        </span>
                        <span>Show Detail</span>
                    </p>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={handleOpenLogoutDialog}>
                    <p className="flex justify-center items-center gap-1 text-black/60 cursor-pointer">
                        <span>
                            <FaRightFromBracket />
                        </span>
                        <span>Logout</span>
                    </p>
                </DropdownMenuItem>
            </HeaderMenu>
            <LogoutDialog open={openLogoutDialog} setOpenLogoutDialog={setOpenLogoutDialog}/>
            <button className='cursor-pointer'>
                <FaGear />
            </button>
        </div>
    )
}