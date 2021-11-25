import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Account from "Scenes/Account/Account";
import MyProfile from "Components/Accounts/MyProfile";
import Appointment from "Components/Accounts/Appointment"
import { PATHS, ROUTE } from "./routing";
import Doctors from "../Components/Accounts/Doctors";
import DoctorSchedule from "../Components/Accounts/DoctorSchedule";


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