import { combineReducers } from "redux";
import { dogReducer } from "./dogReducer";
import { filteredDogReducer } from "./filteredDogReducer";
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
  dogs: dogReducer,
  filteredDogs: filteredDogReducer,
  inLoggedUser: loginReducer,
});
