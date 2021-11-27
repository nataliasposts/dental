import {APPOINTMENT_ACTIONS} from '../actionType';


    export const removeAppointment = (id) => {
        return (
            {
                type: APPOINTMENT_ACTIONS.removeAppointment,
                payload: {
                    id
                }
            })
    };