'use client';
import Loading from '@/components/ui/loading';
import { routes } from '@/config/routes';
import UseGetUser from '@/features/auth/hooks/use-get-user';
import { useRouter } from 'next/navigation';
import { ComponentProps} from 'react';

type ProtectedProvidersProps = {

} & ComponentProps<'div'>

export default function ProtectedProviders({ children, ...other } : ProtectedProvidersProps ) {
    const router = useRouter()
    const { user, isUserLoading } = UseGetUser();

    if(isUserLoading) return  <Loading hasText={true} className='mt-30' />
        
    if(!isUserLoading && !user)
        router.push(routes.signIn)
    
    else return (
        <div {...other}>
            {children}
        </div>
    )
}

