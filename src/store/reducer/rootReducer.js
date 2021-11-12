import { USER_ACTIONS } from "../actionType";

const rootReducer = (state, action) =>{
    let newUser = {};
    switch (action.type) {
        case(USER_ACTIONS.addUser):  
        newUser = [...state.user]     
        newUser = {
                email: action.payload.email,
                password: action.payload.password,
                secondname: action.payload.secondname,
                firstName: action.payload.firstName,
                birthday: action.payload.birthday,
                userID: action.payload.id,
            };
            return { ...state, user: newUser };
        
        case (USER_ACTIONS.logOut):
            newUser = [...state.user];
            newUser.splice(action.payload.index, 1);
            return { ...state, user: newUser };

        default: return {...state, user: []}
    }
}


export default rootReducer;