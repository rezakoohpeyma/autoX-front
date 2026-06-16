import { FormSubmitBtn } from '@/components/ui/form/form-submit-button';
import { JSX } from 'react';
export default function SubmitBtn(): JSX.Element {
    return (
        <FormSubmitBtn className='bg-primary text-white h-13 rounded-xl font-normal text-[20px]'>
            Sign in
        </FormSubmitBtn>
    )
}

