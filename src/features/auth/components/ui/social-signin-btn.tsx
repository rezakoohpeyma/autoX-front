import Link from 'next/link';
import { JSX } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
export default function SocialSigninBtn({ href , company } : { href?: string, company: 'google' | 'github' }): JSX.Element {
    return (
        <Link href={href || ''} className='bg-secondary font-normal transition-all delay-75 duration-300 w-97 h-13 rounded-xl px-2.25 py-3 flex justify-center items-center gap-4.5 hover:font-bold'> 
            {company === 'github' && <FaGithub size={28} className='text-primary'/>}
            {company === 'google' && <FaGoogle size={28} className='text-primary'/>}
            <span className='text-base text-primary/80'>
                {company === 'github' && 'Sign in with Github'}
                {company === 'google' && 'Sign in with Google'}
            </span>
        </Link>
    )
}

