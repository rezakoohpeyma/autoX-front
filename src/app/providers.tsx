import { TooltipProvider } from '@/components/ui/tooltip';
import { ComponentProps, JSX } from 'react';

type ProvidersProps = ComponentProps<'div'>;

export default function Providers( { children } : ProvidersProps): JSX.Element {
    return (
        <div>
            <TooltipProvider>
                {children}
            </TooltipProvider>
        </div>
    )
}

