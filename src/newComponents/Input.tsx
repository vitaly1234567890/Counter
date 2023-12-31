import React, {FC, InputHTMLAttributes, memo} from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

 export const Input: FC<InputProps> = memo(({onChange,
                                           value,
                                           type,
                                           ...rest}) => {
    return (
        <input onChange={onChange} value={value} {...rest} type={type} />
    );
});

