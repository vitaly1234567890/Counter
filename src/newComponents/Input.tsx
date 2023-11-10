import React, {ChangeEvent, FC, InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    value: number
    type: string
}





 export const Input: FC<InputProps> = ({onChange, value, type,  ...rest}) => {
    return (
        <input onChange={onChange} value={value} {...rest} type={type} />
    );
};

