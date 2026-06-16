
import Form from "@/components/ui/form/form";
import { FieldValues, SubmitHandler, UseFormProps } from "react-hook-form";
import { JSX } from "react/jsx-runtime";

export default function AuthForm<T extends FieldValues>({ 
    children, 
    onSubmit, 
    formOpt 
}: { 
    children: React.ReactNode,
    formOpt: UseFormProps<T>,
    onSubmit: SubmitHandler<T>,
}): JSX.Element {
    
    const safeOnSubmit = onSubmit as SubmitHandler<FieldValues>;

    return (
        <Form 
            onSubmit={safeOnSubmit} 
            formOpt={formOpt}
            className="w-97 mx-auto flex justify-center items-center flex-col gap-12"
            inputFieldClasses='[&>label]:text-primary'
            inputBoxClasses='text-primary/80 border border-primary/80 h-12 rounded-xl p-4 mt-2'
            inputErrorClasses="border-red-500 text-red-500"
        >   
            {children}
        </Form> 
    )
}
