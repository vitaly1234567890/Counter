import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./State-reducer";
import {loadState, saveState} from "../utils/localStorage-utils";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния

const rootReducer = combineReducers({
    counter: counterReducer
})

// непосредственно создаём store
export const store = legacy_createStore(rootReducer, loadState());
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

