import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Account from "Scenes/Account/Account";
import MyProfile from "Components/Account/MyProfile";
import Appointment from "Components/Account/Appointment"
import { PATHS, ROUTE } from "./routing";
import Doctors from "../Components/Account/Doctors";
import DoctorSchedule from "../Components/Account/DoctorSchedule";


const AccountRouter = (props)=>{
    return(
        <Account>
            <Switch>
        <Route path={ROUTE.PROFILE}>
            <MyProfile/>
        </Route>
        <Route path={ROUTE.APPOINTMENT}>
            <Appointment/>
        </Route>
        <Route exact path={ROUTE.DOCTOR}>
            <Doctors/>
        </Route>
        <Route path={ROUTE.DOCTOR_SCHEDULE}>
            <DoctorSchedule/>
        </Route>
        </Switch>
    </Account>
    )
}

export default AccountRouter;