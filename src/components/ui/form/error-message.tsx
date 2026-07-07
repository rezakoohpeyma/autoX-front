import { ComponentProps, JSX } from 'react';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';

type ErrorMessageProps = ComponentProps<'p'>

export default function ErrorMessage({ children ,...other } : ErrorMessageProps): JSX.Element {
    return (
        <div className="mt-2 ml-2 flex gap-1 text-sm text-red-500 font-semibold" {...other}>
            <HiOutlineExclamationTriangle className="text-[1.2em]" />
            <p>{children}</p>
        </div>
    )
}

