import Image from 'next/image';
import logo from '@/assets/images/logo.png'
import { JSX } from 'react';
export default function Logo(): JSX.Element {
    return (
        <Image src={logo} alt='AuthX'/>
    )
}

