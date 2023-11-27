import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "./Button";
import {Render} from "./Render";
import {Input} from "./Input";


export const SetterInput = () => {

    const minCount: number = 0

    const [maxValue, setMaxValue] = useState(5)
    const [minValue, setMinValue] = useState(minCount)
    const [value, setValue] = useState(minCount)
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        let minValueAsString = localStorage.getItem("minCounterValue")
        if (minValueAsString) {
            let newString = JSON.parse(minValueAsString)
            setMinValue(newString)
        }
        let maxValueAsString = localStorage.getItem("maxCounterValue")
        if (maxValueAsString) {
            let newString = JSON.parse(maxValueAsString)
            setMaxValue(newString)
        }
        let valueAsString = localStorage.getItem("CounterValue")
        if (valueAsString) {
            let newString = JSON.parse(valueAsString)
            setValue(newString)
        }
        let isDisabledBut = localStorage.getItem("isDisabledButton")
        if (isDisabledBut) {
            let newString = JSON.parse(isDisabledBut)
            setIsDisabled(newString)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("minCounterValue", JSON.stringify(minValue))
    }, [minValue])

    useEffect(() => {
        localStorage.setItem("CounterValue", JSON.stringify(value))
    }, [value])

    useEffect(() => {
        localStorage.setItem("isDisabledButton", JSON.stringify(isDisabled))
    }, [isDisabled])

    const onChangeHandlerMaxCount = (event: ChangeEvent<HTMLInputElement>) => {
        const maxValue = event.currentTarget.value;
        setMaxValue(parseInt(maxValue))
        setIsDisabled(false)
        localStorage.setItem("maxCounterValue", JSON.stringify(maxValue))
    }

    const onChangeHandlerMinCount = (event: ChangeEvent<HTMLInputElement>) => {
        setMinValue(parseInt(event.currentTarget.value))
        setIsDisabled(false)
    }

    const callBackHandler = () => {
        setValue(minValue)
    }

    const inputError = minValue >= maxValue || minValue < 0 ? 'setterInputError' : "setterInput"

    const callBackHandlerDisable = () => {
        if (!isDisabled) {
            callBackHandler()
            setIsDisabled(true)
        } else if (minValue>5 || !maxValue) {
            setIsDisabled(false)
        }
    }

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
                    <Button name={'set'} callBack={callBackHandlerDisable} disable={minValue >= maxValue || minValue < 0 || isDisabled || maxValue > 10000}/>
                </div>
            </div>
            <div>
                <Render value={value} setValue={setValue} minValue={minValue} maxValue={maxValue} isDisabled={isDisabled}/>
            </div>
        </div>
    );
};

