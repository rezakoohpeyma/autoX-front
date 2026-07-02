'use client'
import { ToastContainer } from 'react-toastify';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ComponentProps, JSX } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
type ProvidersProps = ComponentProps<'div'>;

const queryClient = new QueryClient();
export default function Providers( { children } : ProvidersProps): JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <ToastContainer 
                    position='top-center' 
                    pauseOnHover
                    theme='light'
                    autoClose={5000}
                    draggable
                />
                {children}
            </TooltipProvider>
        </QueryClientProvider>
    )
}

