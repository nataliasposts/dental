import React, { memo } from "react";
import styled from "styled-components";
import { appointmentSelector } from "../../store/selector/appointmentSelector";
import { useSelector } from "react-redux";
import Card from "./Card";



const StyledAppointment = styled.div``


const Appointment = (props) => {
    const appointFind = useSelector(appointmentSelector);
    

    return(
        <StyledAppointment>
             <div className={"appointment-row"}>
                <div className={"appointment-title"}>
                    {appointFind.map((book, id)=>{
                        const d = new Date(book.startDate);
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