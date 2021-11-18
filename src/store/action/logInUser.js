import { USER_ACTIONS } from "../actionType";


export const logInUser = (Birthday, FirstName, SecondName, password, email, userId, userLoggedIn) => {
    return (
        {
            type: USER_ACTIONS.logIn,
            payload: {
                email: email,
                password: password,
                secondname: SecondName,
                firstname: FirstName, 
                birthday: Birthday,
                id: userId,
                loggedIn: userLoggedIn,
            }
        })
};