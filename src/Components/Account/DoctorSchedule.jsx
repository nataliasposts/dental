import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { PATHS } from '../../Routing/routing';
import { doctorSelector } from '../../store/selector/doctorSelector';
import { useSelector } from "react-redux";
import FormikDatePicker from "../Formik/FormikDatePicker";
import { Formik, Form } from "formik";
import styled from "styled-components";
import { appointmentDateValidation } from "./appointmentDateValidation";

const StyledDoctorSchedule = styled.div`
.title {
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
.doctorschedule-btn{
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
    margin-left: 20px;
}
.doctorschedule-row{
    display: flex;
    flex-direction: row
}

`


const DoctorSchedule = (props)=>{
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();
    const doctors = useSelector(doctorSelector);
    const currentDoctor = doctors.find(doctor => doctor.doctorID == params.doctorID);
    
   
  



      return (

        <StyledDoctorSchedule>
            <div className={"doctorschedule-title"}>
                <h3 className={"title"}>Book the appointment</h3>
                <p className={"description"}>Step 2: Choose the date and time</p>
            </div>
             <Formik
             initialValues={{ appointmentDate: '' }}
             onSubmit={(formDate) => {
                 dispatch({type: "newAppointment", 
                 payload: {bookedAppointment: formDate.appointmentDate, user: params.userId, doctor: params.doctorID, doctorName: currentDoctor.doctorName}});
                 history.push(PATHS.APPOINTMENT(params.userId))
            }}
             validate={appointmentDateValidation}
             >
                 <Form className={"doctorschedule-row"}>
                     <FormikDatePicker name={'appointmentDate'}/>
                     <button className={"doctorschedule-btn"} type={"submit"}>
                         book appointment
                    </button>
                </Form>
            </Formik>
        </StyledDoctorSchedule>
         );
    };

    export default DoctorSchedule;