import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "./Button";
import {Render} from "./Render";


type SetterInputProps = {

}

export const SetterInput = (props: SetterInputProps) => {

    const minCount: number = 0
    const maxCount: number = 5

    const [maxValue, setMaxValue] = useState(minCount)
    const [minValue, setMinValue] = useState(minCount)
    const [value, setValue] = useState(minCount)

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
    }, []);

    useEffect( () => {
        localStorage.setItem("minCounterValue", JSON.stringify(minValue))
    }, [minValue])

    useEffect( () => {
        localStorage.setItem("maxCounterValue", JSON.stringify(maxValue))
    }, [maxValue])

    useEffect( () => {
        localStorage.setItem("CounterValue", JSON.stringify(value))
    }, [value])

    const onChangeHandlerMaxCount = (event: ChangeEvent<HTMLInputElement>) => {setMaxValue(parseInt(event.currentTarget.value))}

    const onChangeHandlerMinCount = (event: ChangeEvent<HTMLInputElement>) => {setMinValue(parseInt(event.currentTarget.value))}

    const callBackHandler = ()=>setValue(minValue)


    return (
            <div className='count'>
                <div className="settertext">
                    <span>max value:</span>
                    <input className="setterInput" type= 'number' value={maxValue} onChange={onChangeHandlerMaxCount}/>
                </div>
                <div className="settertext">
                    <span>start value:</span>
                    <input className="setterInput" type= 'number' value={minValue} onChange={onChangeHandlerMinCount}/>
                </div>
                <div className="buttons">
                    <Button name={'set'} callBack={callBackHandler}/>
                </div>
                <div>
                    <Render value={value}  setValue={setValue} minValue={minValue} maxValue={maxValue} />
                </div>
            </div>
    );
};

