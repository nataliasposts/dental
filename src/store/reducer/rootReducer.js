import { USER_ACTIONS } from "../actionType";

const rootReducer = (state, action) =>{
    let newUser = {};
    switch (action.type) {
        case(USER_ACTIONS.addUser):  
           
        newUser = {
                email: action.payload.email,
                password: action.payload.password,
                secondname: action.payload.secondname,
                firstname: action.payload.firstname,
                birthday: action.payload.birthday,
                userID: action.payload.id,
            };
            return { ...state, user: newUser };

        case (USER_ACTIONS.logOut):
             newUser = {};
              return { ...state, user: newUser };
        

        default: return { ...state, user:{}}
    }
}


export default rootReducer;