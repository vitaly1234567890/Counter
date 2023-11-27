import React, {FC, InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

 export const Input: FC<InputProps> = ({onChange, value, type,  ...rest}) => {
    return (
        <input onChange={onChange} value={value} {...rest} type={type} />
    );
};

