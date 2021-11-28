import React, {useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";
import { PATHS } from "../../Routing/routing";
import {useSelector} from "react-redux";
import { doctorSelector } from "../../store/selector/doctorSelector";



const StyledDoctors = styled.div`

.doctors-title{
    margin-bottom: 50px;
}
.title{
    font-size: 30px;
    color: #2f89fc;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
}
.description{
    text-align: center;
    font-size: 20px;
}
.doctors-row{
    display: flex;
}
.doctors-list{
    background-color: whitesmoke;
    padding: 30px;
    box-shadow: 0px 5px 10px 2px rgb(34 60 80 / 20%);
    width: 304px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 10px;
    background-color: whitesmoke;
    align-items: center;
    cursor: pointer;
}
.doctor-name{
    margin-bottom: 10px;
    font-size: 20px;
}
.doctor-position{
    font-size: 15px;
}

`

const Doctors = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const doctors = useSelector(doctorSelector);

  
    
    return(
        <StyledDoctors>
                <div className={"doctors-title"}>
                    <h3 className={"title"}>Book the appointment</h3>
                    <p className={"description"}>Step 1: Choose the doctor</p>
                </div>
                <ul className={"doctors-row"}>
                {doctors.map((doctorData, index) => {
                        return(
                          <li key={index} className={"doctors-list"}
                                  onClick={() => {
                                  history.push(PATHS.DOCTOR_SCHEDULE(urlParams.userId, doctorData.doctorID))}}>   
                                <p className={"doctor-name"}>{doctorData.doctorName}</p>
                              <p className={"doctor-position"}>{doctorData.doctorPosition}</p>
                          </li>
                        )
                    })}
                </ul>
        </StyledDoctors>
    )
}

export default Doctors;