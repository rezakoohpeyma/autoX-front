import Form from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { JSX, ReactNode } from 'react';
import { FieldValues, SubmitHandler, UseFormProps } from 'react-hook-form';

type CreateFormProps<TForm extends FieldValues> = {
    children: ReactNode;
    formOpt: UseFormProps<TForm>;
    onSubmit: SubmitHandler<TForm>;
    className?: string;
    inputFieldClasses?: string;
    inputBoxClasses?: string;
    inputErrorClasses?: string;
};

export default function CreateForm<TForm extends FieldValues>({
        children,
        formOpt,
        onSubmit,
        className,
        inputFieldClasses,
        inputBoxClasses,
        inputErrorClasses
    }: CreateFormProps<TForm>):
    JSX.Element {

    const safeOnSubmit = onSubmit as SubmitHandler<FieldValues>;
    
    return (
        <Form
            formOpt={formOpt} 
            onSubmit={safeOnSubmit} 
            className={
                cn(
                    'mx-auto bg-white shadow-sm p-11.5 rounded-[10px]',
                    className
                )
            }
            inputFieldClasses={
                cn(inputFieldClasses)
            }
            inputBoxClasses={
                cn(
                    'w-full h-10 border border-primary/50 rounded-[5px] mt-2 text-sm',
                    inputBoxClasses
                )
            }
            inputErrorClasses={
                cn(
                    'border-red-500 text-red-500',
                    inputErrorClasses
                )
            }
        >
            {children}
        </Form>
    )
}

