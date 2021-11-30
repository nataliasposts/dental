import React from "react";
import { useField } from "formik";
import DatePicker from 'react-datepicker';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";


const StyledDatePicker = styled.div`
.react-datepicker__input-container input{
    width: 400px;
    font-size: 20px;
    padding: 10px;
    border: 1px solid #212020;
    border-radius: 4px;
    font-family: 'Roboto-Light', sans-serif; 
    cursor: pointer;
}
`



const FormikDatePicker = (props) =>{
    const [field, meta, helpers] = useField(props.name);
    return (
        <StyledDatePicker>
           <DatePicker
           selected={field.value}
           onChange={(date) => {helpers.setValue(date); helpers.setTouched(true)}}
           showTimeSelect
           minTime={setHours(setMinutes(new Date(), 30), 8)}
           maxTime={setHours(setMinutes(new Date(), 0), 20)}
           dateFormat="MMMM d, yyyy h:mm aa"
           placeholderText="Select the date and time"
           placeholderText="Select the date and time"/>
           {(meta.touched && meta.error) &&
           <div className={"input-error"}>
               {meta.error}
               </div>
               }
        </StyledDatePicker>
    )
}

export default FormikDatePicker;