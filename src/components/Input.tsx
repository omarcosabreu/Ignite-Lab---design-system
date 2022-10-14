import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface InputRootProps {
    children: ReactNode;
}

function InputRoot(props: InputRootProps) {
    return (
        <div className='flex items:center gap-3 h-14 py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

InputRoot.displayName = 'Input.Root'

export interface InputIconProps {
    children: ReactNode;
}

function InputIcon(props: InputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
           {props.children} 
        </Slot>
    )
}

InputIcon.displayName = 'Input.Icon'

export interface InputInputPropos extends InputHTMLAttributes<HTMLInputElement>{} 

function InputInput(props: InputInputPropos) {
    return (
        <input 
                className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
            {...props}
            />
    )
}

InputInput.displayName = 'Input.Input'

export const Input ={
    Root: InputRoot,
    Input: InputInput,
    Icon: InputIcon,
}