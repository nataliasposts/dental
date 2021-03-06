import { USER_ACTIONS } from "../actionType";

const userReducer = (state, action) =>{
    let newUser = {};
    switch (action.type) {
        case(USER_ACTIONS.addUser):  
           
        newUser = {
                email: action.payload.email,
                password: action.payload.password,
                secondname: action.payload.secondname,
                firstname: action.payload.firstname,
                birthday: action.payload.birthday,
                userId: action.payload.id,
                loggedIn: action.payload.loggedIn,
            };
            return {...state, user: newUser };

        case (USER_ACTIONS.logOut):
             newUser = {};
              return {...state, user: newUser };
        
         case (USER_ACTIONS.logIn):
            newUser = {
                email: action.payload.email,
                password: action.payload.password,
                secondname: action.payload.secondname,
                firstname: action.payload.firstname,
                birthday: action.payload.birthday,
                userId: action.payload.id,
                loggedIn: action.payload.loggedIn,
            };
                return { ...state, user: newUser };

        default: return {...state}
    }
}


export default userReducer;