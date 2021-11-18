import React from "react";
import DatePicker from "react-datepicker"



import "react-datepicker/dist/react-datepicker.css";



const DoctorSchedule = (props)=>{
    const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 9));

    return(    
            <DatePicker
            className={"calendar"}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            minTime={setHours(setMinutes(new Date(), 0), 9)}
            maxTime={setHours(setMinutes(new Date(), 0), 20)}
            dateFormat="MMMM d, yyyy h:mm aa"/>
    )
}

export default DoctorSchedule;