import { combineReducers } from "redux";
import userReducer from "./userReducer";
import doctorReducer from "./doctorReducer";
import appointmentReducer from "./appointmentReducer";
import { USER_ACTIONS } from "../actionType";

const appReducer = combineReducers({
    userReducer,
    doctorReducer,
    appointmentReducer
});


const rootReducer = (state, action) => {
    if (action.type === USER_ACTIONS.logOut) {
        return appReducer(undefined, action)
    }

    return appReducer(state, action)
}

export default rootReducer;