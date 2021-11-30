import React, { useEffect, memo, useState, useContext } from "react";
import styled from "styled-components";
import { removeAppointment } from "../../store/action/removeAppointment";
import { useDispatch } from 'react-redux';



const StyledCard = styled.div`
display: flex;
flex-direction: column;
width: 504px;
border-radius: 4px;
padding: 15px;
margin-bottom: 30px;
box-shadow: 0px 5px 10px 2px rgb(34 60 80 / 20%);
background-color: whitesmoke;
padding: 30px;
cursor: pointer;

.card-date{
    font-size: 20px;
    margin-bottom: 15px;
    font-family: 'Roboto-Regular', sans-serif; 
}
.card-doctor{
    font-size: 20px;
    margin-bottom: 30px;
    font-family: 'Roboto-Regular', sans-serif; 
}
.card-btn{
    background: #ff8000;
    color: #fff;
    padding: 15px 20px;
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: 50px;
    padding: 10px 30px;
    cursor: pointer;
    border: none;
    font-size: 14px;
    width: 180px;
    align-self: center;
    font-family: 'Roboto-Regular', sans-serif; 
}
 `

const Card = (props) => {

    const dispatch = useDispatch();
   


    return(
        <StyledCard>
                <p className={"card-date"}>
                    {props.date}
                </p>
                <p className={"card-doctor"}>
                 Doctor: {props.doctorName}
                </p>
                <button className={"card-btn"} onClick={() => {dispatch(removeAppointment(props.id))}}>remove</button>
        </StyledCard>
        ) 
    }

    

export default memo(Card);  