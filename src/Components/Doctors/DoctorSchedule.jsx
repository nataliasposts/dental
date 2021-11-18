import React, { useState } from 'react';
import DatePicker from "react-datepicker"




import "react-datepicker/dist/react-datepicker.css";


const DoctorSchedule = (props)=>{
    const [startDate, setStartDate] = useState();

    return(    
            <DatePicker
            className={"calendar"}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy h:mm aa"/>
    )
}

export default DoctorSchedule;