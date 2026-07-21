'use client';
import Loading from '@/components/ui/loading';
import { routes } from '@/config/routes';
import useGetUser from '@/features/auth/hooks/use-get-user';
import { useRouter } from 'next/navigation';
import { ComponentProps, useEffect} from 'react';

type ProtectedProvidersProps = {

} & ComponentProps<'div'>

export default function ProtectedProviders({ children, ...other } : ProtectedProvidersProps ) {
    const router = useRouter()
    const { user, isUserLoading } = useGetUser();

    useEffect(() => {
        if(!isUserLoading && !user)
            router.push(routes.signIn)
    }, [isUserLoading, user, router]);
    
    if(isUserLoading) return  <Loading text="Loading..." className='absolute inset-0 m-auto' />
        
    
    if(!isUserLoading && user) return (
        <div {...other}>
            {children}
        </div>
    )
}

