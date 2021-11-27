


const initialState = []
const appointmentReducer = (state = initialState, action)=> {
    switch(action.type){
        case 'newAppointment':
            let newAppointmentList = [...state];
            newAppointmentList.push(action.payload);
            return newAppointmentList;
            


              default: return [...state]
      
    }
}

export default appointmentReducer;