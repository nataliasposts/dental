import { combineReducers } from "redux";
import userReducer from "./userReducer";
import doctorReducer from "./doctorReducer";
import appointmentReducer from "./appointmentReducer";

const rootReducer = combineReducers({
    userReducer,
    doctorReducer,
    appointmentReducer
})

export default rootReducer;