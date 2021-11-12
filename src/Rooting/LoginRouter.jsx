import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ModalWindowLogin from "../Components/ModalWindow/ModalWindowComponents/ModalWindowLogin";
import ModalWindowRegistration from "../Components/ModalWindow/ModalWindowComponents/ModalWindowRegistration";
import { useSelector } from "react-redux";
import { userSelector } from "store/selectors/user";
import { PATHS, ROUTE } from "./routing";


const LoginRouter = (props) =>{

    const user = useSelector(userSelector);

    const renderForLoggedInUser = (Scene) => {
        if(!user.userID) {
            return <Redirect to={"/login"}/>
        }
        return (<Scene/> )
    }

    return(
        <React.Fragment>
            <Switch>
                <Route path={"/login"}>
                    <ModalWindowLogin/>
                </Route>
                <Route path={"/registration"} >
                    <ModalWindowRegistration/>
                </Route>
                <Route path={ROUTE.ACCOUNT} >
                    {renderForLoggedInUser(RootRouter)}
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default LoginRouter;