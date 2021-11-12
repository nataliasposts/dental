import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Account from "../Scenes/Account/Account";
import MyProfile from "../Components/Accounts/MyProfile";
import Appointment from "../Components/Accounts/Appointment"
import { PATHS, ROUTE } from "./routing";


const AccountRouter = (props)=>{
    return(
        <Account>
        <Route path={ROUTE.ACCOUNT}>
            <MyProfile/>
        </Route>
        <Route path={ROUTE.APPOINTMENT}>
            <Appointment/>
        </Route>
    </Account>
    )
}

export default AccountRouter;