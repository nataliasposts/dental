import React from "react";
import styled from "styled-components";

const StyledAppointment = styled.div``

const Appointment = (props) => {
    return(
        <StyledAppointment>
             <div className={"appointment-row"}>
                <div className={"appointment-title"}>
                    Appointments
                </div>
            </div>
        </StyledAppointment>
    )
}

export default Appointment;