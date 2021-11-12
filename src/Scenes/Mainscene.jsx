import React from "react";
import AboutUs from "./AboutUs";
import Firstscreen from "./Firstscreen";
import OurService from "./Service";
import Contact from "./Contact";
 
const MainScene = (props) =>{
    return(
        <React.Fragment>
        <Firstscreen/>
        <AboutUs/>
        <OurService/>
        <Contact/>
        </React.Fragment>
    )
}

export default MainScene;