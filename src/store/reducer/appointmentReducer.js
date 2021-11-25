const initialState = []
const appointmentReducer = (state = initialState, action)=> {
    switch(action.type){
        case 'newAppointment':
            let newAppointment = [...state];
            newAppointment.push(action.payload);
            return newAppointment;
         default: return [...state]
    }
}

export default appointmentReducer;