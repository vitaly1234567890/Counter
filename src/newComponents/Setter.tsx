import React from 'react';
import {Button} from "./Button";
import {SetterInput} from "./SetterInput";





 export const Setter = () => {
    return (
        <div className='count'>
            <SetterInput />
            <div className="buttons">
                <Button name={'set'} callBack={() => {}}/>
            </div>
        </div>
    );
};

