import React from "react";
import AboutUs from "./AboutUs";
import Firstscreen from "./Firstscreen";
import OurService from "./Service";
import Contact from "./Contact";
import styled from 'styled-components';
 
const StyledMainScene = styled.div`
flex: 1 0 auto;

`
const MainScene = (props) =>{
    return(
        <StyledMainScene>
        <Firstscreen/>
        <AboutUs/>
        <OurService/>
        <Contact/>
        </StyledMainScene>
    )
}

export default MainScene;