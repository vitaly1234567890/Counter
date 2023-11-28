import React, {useCallback} from 'react';
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {addOneAC, CounterInitialState, resetAC} from "../state/State-reducer";


export const RenderWithRedux = () => {

    const {minValue, maxValue, value, isDisabled} =
        useSelector<AppRootStateType, CounterInitialState>(state => state.counter)

    const dispatch = useDispatch()

    const addOne = useCallback(() => {
        if (minValue < maxValue) {
            dispatch(addOneAC(value))
        }
    },[dispatch, value])

    const reset = useCallback(() => {
        dispatch(resetAC(minValue))
    },[dispatch, minValue])

    const error1 =
        minValue >= maxValue || minValue < 0 || maxValue > 10000 ?
            <span
                className="dial2">
                   "Incorrect value" </span>
            : !isDisabled ?
                <span className="dial3">Choose value and click on set button</span>
            : <span
                className={value === maxValue || value === minValue ? "dial1" : ""}>
                   {value} </span>

    return (
        <div className='count1'>
            <div className="dial">
                {error1}
            </div>
            <div className="buttons">
                <Button name={"inc"} callBack={addOne} disable={value === maxValue || !isDisabled}/>
                <Button name={"reset"} callBack={reset} disable={value === minValue || !isDisabled}/>
            </div>
        </div>

    );
};

