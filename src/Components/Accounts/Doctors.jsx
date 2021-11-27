import React, {useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";
import { PATHS } from "../../Routing/routing";
import {useSelector} from "react-redux";
import { doctorSelector } from "../../store/selector/doctorSelector";



const StyledDoctors = styled.div`
max-width: 100%;

.aboutus-container{
    max-width: 1230px;
    margin: auto;
    padding: 0 15px;
}
.title{
    font-size: 40px;
    color: #2f89fc;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 20px;
}
.description{
    text-align: center;
    font-size: 20px;
}

`

const Doctors = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const doctors = useSelector(doctorSelector);

  
    
    return(
        <StyledDoctors>

            <div className={"doctors-container"}>
                <div className={"doctors-title"}>
                    <h3 className={"title"}>Book the appointment</h3>
                    <p className={"description"}>Choose a doctor</p>
                </div>
                <ul className={"doctors-row"}>
                {doctors.map((doctorData, index) => {
                        return(
                          <li key={index} className={"doctors-li"}>
                              <button type={"button"} className={"button"}
                                  onClick={() => {
                                  history.push(PATHS.DOCTOR_SCHEDULE(urlParams.userId, doctorData.doctorID))}}>   
                                {doctorData.doctorName}                            
                            </button>
                              <p className={"doctors-position"}>{doctorData.doctorPosition}</p>
                          </li>
                        )
                    })}
                </ul>
            </div>
        </StyledDoctors>
    )
}

export default Doctors;