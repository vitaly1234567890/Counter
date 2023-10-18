import React, {FC} from 'react';

type ButtonProps = {
    name: string
    callBack: () => void
    disable?: boolean
}

export const Button: FC<ButtonProps> = ({name, disable, callBack}) => {
    return (
            <button disabled={disable} onClick={callBack}>{name}</button>
    );
};

