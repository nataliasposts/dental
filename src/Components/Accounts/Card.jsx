import React, { useEffect, memo, useState, useContext } from "react";
import styled from "styled-components";
import { removeAppointment } from "../../store/action/removeAppointment";
import { useDispatch } from 'react-redux';



const StyledCard = styled.div` `

const Card = (props) => {

    const dispatch = useDispatch();
   


    return(
        <StyledCard>
            <div className={"card-list"}>
                <h3 className={"card-title"}>
                    {props.date}
                </h3>
                <p className={"card-description"}>
                 {props.doctorName}
                </p>
                <button className="card-btn" onClick={() => {dispatch(removeAppointment(props.id))}}>remove</button>
            </div>
        </StyledCard>
        ) 
    }

    

export default memo(Card);  