import { JSX } from 'react';
import Image from 'next/image';
import loginArt from '@/assets/images/login-art.png'
export default function LoginBanner(): JSX.Element {
    return (
        <div className='w-1/2 absolute h-full object-cover '>
            <Image 
                src={loginArt} 
                fill
                alt='Login Banner'
                loading="eager"
            />
        </div>
    )
}

