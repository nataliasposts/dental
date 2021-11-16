import { combineReducers } from "redux";
import userReducer from "./userReducer";
import doctorReducer from "./doctorReducer";

const rootReducer = combineReducers({
    userReducer,
    doctorReducer
})

export default rootReducer;