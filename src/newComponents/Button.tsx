import React, {FC, memo} from 'react';

type ButtonProps = {
    name: string
    callBack: () => void
    disable?: boolean
}

export const Button: FC<ButtonProps> = memo(({name, disable, callBack}) => {
    console.log('Button')
    return (
            <button disabled={disable} onClick={callBack}>{name}</button>
    );
});

