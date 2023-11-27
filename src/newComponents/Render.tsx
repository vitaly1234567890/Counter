import React from 'react';
import {Button} from "./Button";

type NewComponentsPropsType = {
    value: number
    minValue: number
    maxValue: number
    setValue: (minValue: number) => void
    isDisabled: boolean
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
        props.minValue >= props.maxValue || props.minValue < 0 || props.maxValue > 10000 ?
            <span
                className="dial2">
                   "Incorrect value" </span>
            : !props.isDisabled ?
                <span className="dial3">Choose value and click on set button</span>
                : <span
                    className={props.value === maxCount || props.value === props.minValue ? "dial1" : ""}>
                   {props.value} </span>

    return (
        <div className='count1'>
            <div className="dial">
                {error}
            </div>
            <div className="buttons">
                <Button name={"inc"} callBack={addOne} disable={props.value === maxCount || !props.isDisabled}/>
                <Button name={"reset"} callBack={reset} disable={props.value === props.minValue || !props.isDisabled}/>
            </div>
        </div>

    );
};

