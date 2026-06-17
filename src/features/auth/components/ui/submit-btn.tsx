import { FormSubmitBtn } from '@/components/ui/form/form-submit-button';
import { JSX } from 'react';
export default function SubmitBtn({ children } : { children: React.ReactNode }): JSX.Element {
    return (
        <FormSubmitBtn className='bg-primary transition-all delay-75 duration-300 text-white h-13 rounded-xl font-normal text-[20px] hover:bg-primary/80'>
            {children}
        </FormSubmitBtn>
    )
}

