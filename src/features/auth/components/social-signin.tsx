import { JSX } from 'react';
import SocialSigninBtn from './ui/social-signin-btn';
import Divider from './ui/divider';
export default function SocialSignIn(): JSX.Element {
    return (
        <div className='w-full'>
            <div className='w-full'>
                <Divider>Or</Divider>
                <div className='mt-6 space-y-4'>
                    <SocialSigninBtn company={'github'} />
                    <SocialSigninBtn company={'google'} />
                </div>
            </div>
        </div>
    )
}

