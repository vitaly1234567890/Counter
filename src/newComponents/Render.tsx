import React from 'react';
import {Button} from "./Button";

type NewComponentsPropsType = {
    value: number
    minValue: number
    maxValue: number
    setValue: (minValue: number) => void
}

export const Render = (props: NewComponentsPropsType) => {

    const minCount: number = props.value
    const maxCount: number = props.maxValue

    function addOne() {
        if (minCount < maxCount) {
            props.setValue(props.value + 1)
        }
    }

    function reset() {
        props.setValue(props.minValue)
    }

    const error =
        props.minValue >= props.maxValue || props.minValue < 0 ?
            <span
                className="dial2">
                   "Incorrect value" </span>
             : <span
                className={props.value === maxCount ? "dial1" : ""}>
                   {props.value} </span>

    return (
        <div className='count'>
            <div className="dial">
                {error}
            </div>
            <div className="buttons">
                <Button name={"inc"} callBack={addOne} disable={props.value === maxCount}/>
                <Button name={"reset"} callBack={reset}/>
            </div>
        </div>

    );
};

