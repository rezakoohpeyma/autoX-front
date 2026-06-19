import SocialBtn from './ui/social-btn';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { JSX } from 'react';
import { IconContext } from 'react-icons';
export default function Social(): JSX.Element {
    return (
        <div className='w-full space-y-4'>
            <IconContext.Provider value={{
                size:'28'
            }}>
                <SocialBtn icon={<FaGithub />} label='Sign in with Github' href='#'/>
                <SocialBtn icon={<FaGoogle />} label='Sign in with Google' href='#'/>
            </IconContext.Provider>
        </div>
    )
}

