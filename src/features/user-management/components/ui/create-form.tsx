import Form from '@/components/ui/form';
import { JSX, ReactNode } from 'react';
import { FieldValues, SubmitHandler, UseFormProps } from 'react-hook-form';

type CreateFormProps<TForm extends FieldValues> = {
    children: ReactNode;
    formOpt: UseFormProps<TForm>;
    onSubmit: SubmitHandler<TForm>;
};

export default function CreateForm<TForm extends FieldValues>({
        children,
        formOpt,
        onSubmit,
    }: CreateFormProps<TForm>):
    JSX.Element {

    const safeOnSubmit = onSubmit as SubmitHandler<FieldValues>;
    
    return (
        <Form
            formOpt={formOpt} 
            onSubmit={safeOnSubmit} 
            className='mx-auto w-11/12 max-w-200 bg-white shadow-sm p-11.5 rounded-[10px]'
            inputFieldClasses='min-w-70 max-w-1/3'
            inputBoxClasses='w-full h-10 border border-primary/50 rounded-[5px] mt-2 text-sm'
            inputErrorClasses='border-red-500 text-red-500'
        >
            {children}
        </Form>
    )
}

