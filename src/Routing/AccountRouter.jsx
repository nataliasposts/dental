import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Account from "Scenes/Account/Account";
import MyProfile from "Components/Accounts/MyProfile";
import Appointment from "Components/Accounts/Appointment"
import { PATHS, ROUTE } from "./routing";
import Doctors from "Components/Doctors/Doctors";
import DoctorSchedule from "../Components/Doctors/DoctorSchedule";

const AccountRouter = (props)=>{
    return(
        <Account>
        <Route path={ROUTE.PROFILE}>
            <MyProfile/>
        </Route>
        <Route path={ROUTE.APPOINTMENT}>
            <Appointment/>
        </Route>
        <Route path={ROUTE.DOCTOR}>
            <Doctors/>
        </Route>
        <Route path={ROUTE.DOCTOR_SCHEDULE}>
            <DoctorSchedule/>
        </Route>
    </Account>
    )
}

export default AccountRouter;