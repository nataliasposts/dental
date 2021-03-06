import { USER_ACTIONS } from "../actionType";


export const newUserAdd = (Birthday, FirstName, SecondName, password, email, userId, userLoggedIn) => {
    return (
        {
            type: USER_ACTIONS.addUser,
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