import React, { memo } from "react";
import styled from "styled-components";
import { appointmentSelector } from "../../store/selector/appointmentSelector";
import { useSelector } from "react-redux";
import Card from "./Card";



const StyledAppointment = styled.div`
.appointment-title h3{
    font-size: 30px;
    color: #2f89fc;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;
}
appointment-row{
    display: flex;
    flex-direction: column;
}
`


const Appointment = (props) => {
    const appointFind = useSelector(appointmentSelector);
    

    return(
        <StyledAppointment>
            <div className={"appointment-container"}>
                <div className={"appointment-title"}>
                    <h3>Your appoitments</h3>
                </div>
             <div className={"appointment-row"}>
                    {appointFind.map((book, id)=>{
                        const d = new Date(book.bookedAppointment);
                        const date = d.toLocaleString('en-US');
                        return(
                            <div key={id}>
                    <Card  date={date} doctorName={book.doctorName} id={date.id}/>
                    </div>
                    )
                })}
                </div>
            </div>
        </StyledAppointment>
    )
}

export default memo(Appointment);