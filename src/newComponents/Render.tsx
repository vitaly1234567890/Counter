import React from 'react';

type NewComponentsPropsType = {
    addOne: () => void
    count: number
    reset: () => void
    minCount: number
    maxCount: number
}

export const NewComponents = (props: NewComponentsPropsType) => {
    const buttonAddOneHandler = () => props.addOne()
    const buttonResetHandler = () => props.reset()

    return (
        <div className='count'>
            <div className="dial">
                <span
                    className={props.count === props.maxCount ? "dial1" : ""}>
                    {props.count}</span>
            </div>
            <div className="buttons">
                <button
                    disabled={props.count === props.maxCount}
                    onClick={buttonAddOneHandler}>inc</button>
                <button
                    disabled={props.count === props.minCount}
                    onClick={ buttonResetHandler }>reset</button>
            </div>
        </div>

    );
};

export default NewComponents;