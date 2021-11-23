import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { doctorSelector } from "../../store/selector/doctorSelector";


const StyledAppointment = styled.div``

const Appointment = (props) => {


    return(
        <StyledAppointment>
             <div className={"appointment-row"}>
                <div className={"appointment-title"}>
                    <span className={"user-appointment"}></span>
                </div>
            </div>
        </StyledAppointment>
    )
}

export default Appointment;