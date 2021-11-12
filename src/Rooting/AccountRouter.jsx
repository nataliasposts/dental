import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Account from "../Scenes/Accountscene/Account";
import Appointment from "../Components/Account/Appointment";
import MyProfile from "../Components/Account/MyProfile";
import { PATHS, ROUTE } from "./routing";


const AccountRouter = (props)=>{
    return(
        <Account>
            <Route path={ROUTE.ACCOUNT}>
                <MyProfile />
            </Route>
            <Route path={ROUTE.APPOINTMENT}>
                <Appointment/>
            </Route>
        </Account>
    )
}

export default AccountRouter;