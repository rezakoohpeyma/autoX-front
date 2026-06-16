import { JSX } from 'react';
import SocialSigninBtn from './ui/social-signin-btn';
export default function SocialSignIn(): JSX.Element {
    return (
        <div className='w-full'>
            <div className='w-full'>
                <div className='h-0.5 w-full bg-primary/30 relative flex justify-center items-center'>
                    <span className='block bg-white w-12 text-center'>Or</span>
                </div>
                <div className='mt-6 space-y-4'>
                    <SocialSigninBtn company={'github'} />
                    <SocialSigninBtn company={'google'} />
                </div>
            </div>
        </div>
    )
}

