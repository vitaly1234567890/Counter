import React, {ChangeEvent, useCallback} from 'react';
import {Button} from "./Button";
import {Input} from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {CounterInitialState, maxInputValueAC, minInputValueAC, setAC} from "../state/State-reducer";


export const SetterInputWithRedux = () => {

    const {
        minValue,
        maxValue,
        isDisabled,
    } = useSelector<AppRootStateType, CounterInitialState>(state => state.counter)

    const dispatch = useDispatch()

    const onChangeHandlerMaxCount = useCallback ((event: ChangeEvent<HTMLInputElement>) => {
        console.log("MaxCount")
        dispatch(maxInputValueAC(event.currentTarget.value))
    },[dispatch])

    const onChangeHandlerMinCount = useCallback ((event: ChangeEvent<HTMLInputElement>) => {
        console.log("MinCount")
        dispatch(minInputValueAC(event.currentTarget.value))
    },[dispatch])

    const callBackHandler = useCallback(() => {
        dispatch(setAC(minValue))
    },[dispatch, minValue])

    const inputError = minValue >= maxValue || minValue < 0 ? 'setterInputError' : "setterInput"

    return (
        <div className='counter'>
            <div className='count'>
                <div className="settertext">
                    <span>max value:</span>
                    <Input type='number' onChange={onChangeHandlerMaxCount} value={maxValue} className={inputError}/>
                </div>
                <div className="settertext">
                    <span>start value:</span>
                    <Input className={inputError} type='number' onChange={onChangeHandlerMinCount} value={minValue}/>
                </div>
                <div className="buttons">
                    <Button name={'set'} callBack={callBackHandler} disable={minValue >= maxValue || minValue < 0 || isDisabled || maxValue > 10000}/>
                </div>
            </div>
        </div>
    );
};

