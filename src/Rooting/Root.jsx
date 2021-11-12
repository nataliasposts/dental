import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AboutUs from "Scenes/AboutUs";
import OurService from "Scenes/Service";
import MainScene from "Scenes/Mainscene";
import Contact from "../Scenes/Contact";
import { useSelector } from "react-redux";
import { userSelector } from "../store/selector/userSelector";
import { ROUTE } from "./routing";
import AccountRouter from "./AccountRouter";


const RootRouter = (props) =>{

  const user = useSelector(userSelector);

    const renderForLoggedInUser = (Scene) => {
        if(!user.userID) {
            return <Redirect to={"/"}/>
        }
        return (<Scene/> )
    }

    return(
        <React.Fragment>
             <Switch>
                <Route path={"/main"}>
                  <MainScene/>
                </Route>
                <Route exact path={"/"}>
                    <MainScene/>
                </Route>
                <Route path={"/aboutus"}>
                    <AboutUs/>
                </Route>
                <Route path={"/service"}>
                  <OurService/>
                </Route>
                <Route path={"/contact"}>
                  <Contact/>
                </Route>
                <Route path={ROUTE.ACCOUNT} >
                    {renderForLoggedInUser(AccountRouter)}
                </Route>
              </Switch>
        </React.Fragment>
    )
}

export default RootRouter;