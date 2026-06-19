
import Form from "@/components/ui/form/form";
import { cn } from "@/lib/utils";
import { FieldValues, SubmitHandler, UseFormProps } from "react-hook-form";
import { JSX } from "react/jsx-runtime";

export default function AuthForm<T extends FieldValues>({ 
    children, 
    onSubmit, 
    formOpt,
    className
}: { 
    children: React.ReactNode,
    formOpt: UseFormProps<T>,
    onSubmit: SubmitHandler<T>,
    className?: string,
}): JSX.Element {
    
    const safeOnSubmit = onSubmit as SubmitHandler<FieldValues>;

    return (
        <Form 
            onSubmit={safeOnSubmit} 
            formOpt={formOpt}
            className={cn("", className || '')}
            inputFieldClasses='[&>label]:text-primary'
            inputBoxClasses='text-primary/80 border border-primary/80 h-12 rounded-xl p-4 mt-2'
            inputErrorClasses="border-red-500 text-red-500"
        >   
            {children}
        </Form> 
    )
}
