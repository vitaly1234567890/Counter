import React, {useEffect, useState} from 'react';
import {Button} from "./Button";

type NewComponentsPropsType = {
    value: number
    minValue: number
    maxValue: number
    setValue: (minValue:number) => void
}

export const Render = (props: NewComponentsPropsType) => {

    const minCount: number = props.value
    const maxCount: number = props.maxValue

    const [count, setCount] = useState<number>(0)

    function addOne() {
        if (minCount < maxCount) {
            props.setValue(props.value + 1)
        }
    }
    function reset() {
        props.setValue(props.minValue)
    }

    return (
            <div className='count'>
                <div className="dial">
                <span
                    className={count === maxCount || count === minCount ? "dial1" : ""} >
                   {props.value} </span>
                </div>
                <div className="buttons">
                    <Button name={"inc"} callBack={addOne} disable={ count === maxCount} />
                    <Button name={"reset"} callBack={reset} disable={count === minCount}/>
                </div>
            </div>

    );
};

