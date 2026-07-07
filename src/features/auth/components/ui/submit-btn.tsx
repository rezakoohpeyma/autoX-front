import { FormSubmitBtn } from '@/components/ui/form/form-submit-button';
import Loading from '@/components/ui/loading';
import { ComponentProps, JSX } from 'react';

type SubmitBtnProps = {
    isLoading?: boolean
} & ComponentProps<'button'>

export default function SubmitBtn({ children, isLoading = false } : SubmitBtnProps): JSX.Element {
    return (
        <FormSubmitBtn 
            className='flex justify-center gap-2 items-center text-xl bg-primary transition-all delay-75 duration-300 text-white h-13 rounded-xl font-normal hover:bg-primary/80 disabled:bg-primary/90' 
            disabled={isLoading}
        >
            {!isLoading ? children : <Loading className='size-6 border-3 border-white border-b-transparent' hasText={false}/>}
        </FormSubmitBtn>
    )
}

