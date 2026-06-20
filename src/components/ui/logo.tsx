import Image from 'next/image';
import logo from '@/assets/images/logo.png'
import { JSX } from 'react';
export default function Logo(): JSX.Element {
    return (
        <div className='flex items-center gap-2 text-primary font-bold text-lg'>
            <Image src={logo} alt='AuthX'/>
            AutoX
        </div>
    )
}

