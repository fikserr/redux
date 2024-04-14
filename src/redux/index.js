import { combineReducers, createStore } from "redux";
import counterSlice from "./counterSlice";

const rootReducer = combineReducers({
    counter:counterSlice
})
export const store = createStore(rootReducer)