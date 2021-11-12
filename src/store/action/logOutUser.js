import { USER_ACTIONS } from "../actionType";


export const logOutUser = () => {
    return (
        {
            type: USER_ACTIONS.logOut,
            payload: {
            }
        })
};