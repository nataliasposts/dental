import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { PATHS } from '../../Routing/routing';



import "react-datepicker/dist/react-datepicker.css";


const DoctorSchedule = (props)=>{
  const [startDate, setStartDate] = useState();
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();

  

      return (
        <div className={"schedule-row"}> 
        <div className={"schedule"}>
          <DatePicker 
             selected={startDate}
             onChange={(date) => setStartDate(date)}
             showTimeSelect
             minTime={setHours(setMinutes(new Date(), 30), 8)}
             maxTime={setHours(setMinutes(new Date(), 0), 20)}
             dateFormat="MMMM d, yyyy h:mm aa"
             placeholderText="Select the date and time"
            />
        </div>
          <button className={"book-appointment"}
           onClick={() => {
            dispatch({type: "newAppointment", payload: 
            {startDate, user: params.userId, doctor: params.doctorID}});
            console.log(startDate)
            history.push(PATHS.APPOINTMENT(params.userId))
           }}>
            book appointment
          </button>
        </div>
      );
    };

    export default DoctorSchedule;