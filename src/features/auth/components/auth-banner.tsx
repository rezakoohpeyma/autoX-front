import { JSX } from 'react';
import Image from 'next/image';
import loginArt from '@/assets/images/login-art.png'
export default function AuthBanner(): JSX.Element {
    return (
        <div className='w-full h-60 sticky overflow-hidden rounded-3xl sm:h-80 md:h-100 lg:h-full lg:w-1/2'>
            <Image 
                src={loginArt} 
                fill
                alt='Login Banner'
                loading="eager"
                className='object-cover'
            />
        </div>
    )
}

