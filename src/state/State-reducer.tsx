
type ActionsType =
    AddOneActionType
    | ResetActionType
    | MinValueActionType
    | MaxValueActionType
    | SetActionType

export const initialState = {
    "minValue": 0,
    "maxValue": 0,
    "value": 0,
    "isDisabled": false,
    "error": false
} as const

export type CounterInitialState = typeof initialState


export type AddOneActionType = {
    type: "ADD-ONE"
    value: number
}

export type ResetActionType = {
    type: "RESET"
    minValue: number
}

export type MinValueActionType = {
    type: "MIN-INPUT-VALUE"
    payload: { event: any }
}

export type MaxValueActionType = {
    payload: { event: any }
    type: "MAX-INPUT-VALUE"
}

export type SetActionType = {
    type: "SET"
    minValue: number
}

export const counterReducer = (state: CounterInitialState = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-ONE": {
            return {...state, value: action.value + 1}
        }
        case "RESET": {
            return {...state, value: action.minValue}
        }
        case "MIN-INPUT-VALUE": {
            return {...state, minValue: Number(action.payload.event),isDisabled: false}
        }
        case "MAX-INPUT-VALUE": {
            return {...state, maxValue: Number(action.payload.event),isDisabled: false}
        }
        case "SET": {
            return {...state, value: action.minValue, isDisabled: true}
        }
        default:
            return state
    }
};

export const addOneAC = (value: number): AddOneActionType => {
    return {type: 'ADD-ONE', value}
}

export const resetAC = (minValue: number): ResetActionType => {
    return {type: 'RESET', minValue}
}

export const minInputValueAC = (event: string): MinValueActionType => {
    return {type: 'MIN-INPUT-VALUE', payload: {event}}
}

export const maxInputValueAC = (event: string): MaxValueActionType => {
    return {type: 'MAX-INPUT-VALUE', payload: {event}}
}

export const setAC = (minValue: number): SetActionType => {
    return {type: "SET", minValue}
}