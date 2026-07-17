'use client';
import Loading from '@/components/ui/loading';
import { routes } from '@/config/routes';
import useGetUser from '@/features/auth/hooks/use-get-user';
import { useRouter } from 'next/navigation';
import { ComponentProps} from 'react';

type ProtectedProvidersProps = {

} & ComponentProps<'div'>

export default function ProtectedProviders({ children, ...other } : ProtectedProvidersProps ) {
    const router = useRouter()
    const { user, isUserLoading } = useGetUser();

    if(isUserLoading) return  <Loading text="Loading..." className='absolute inset-0 m-auto' />
        
    if(!isUserLoading && !user)
        router.push(routes.signIn)
    
    else return (
        <div {...other}>
            {children}
        </div>
    )
}

