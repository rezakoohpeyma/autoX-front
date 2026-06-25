import { JSX } from 'react';
import { FaGear, FaUser } from 'react-icons/fa6';
export default function HeaderControls(): JSX.Element {
    return (
        <div className='flex justify-center items-center gap-3 text-[#A6ADBF] text-base'>
            <button className='cursor-pointer'>
                <FaUser />
            </button>
            <button className='cursor-pointer'>
                <FaGear />
            </button>
        </div>
    )
}

