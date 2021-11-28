import { APPOINTMENT_ACTIONS } from "../actionType";

const initialState = []
const appointmentReducer = (state = initialState, action)=> {
    switch(action.type){
        case 'newAppointment':
            let newAppointmentList = [...state];
            newAppointmentList.push({...action.payload, id: Math.floor((Math.random() * 1000 + 1))});
            return newAppointmentList;
        
        case  (APPOINTMENT_ACTIONS.removeAppointment):
            newAppointmentList = [...state];
            const appointmentId = newAppointmentList.find(x => x.id === action.payload.id)
            const idAppointmentRemove = newAppointmentList.indexOf(appointmentId);
            newAppointmentList.splice(idAppointmentRemove, 1);
            return newAppointmentList;


              default: return [...state]
      
    }
}

export default appointmentReducer;