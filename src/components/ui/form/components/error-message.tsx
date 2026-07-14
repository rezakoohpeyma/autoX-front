import { cn } from '@/lib/utils';
import { ComponentProps, JSX } from 'react';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';

type ErrorMessageProps = ComponentProps<'p'>;

export default function ErrorMessage({ children, className, ...other } : ErrorMessageProps): JSX.Element {
    return (
        <div className={
            cn(
                "mt-2 ml-2 flex gap-1 text-sm text-red-500! font-semibold",
                className
            )
        } {...other}>
            <HiOutlineExclamationTriangle className="text-[1.2em]" />
            <p>{children}</p>
        </div>
    )
}

