import { combineReducers } from "redux";
import { dogReducer } from "./dogReducer";
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
    dogs: dogReducer,
    inLoggedUser: loginReducer,
});