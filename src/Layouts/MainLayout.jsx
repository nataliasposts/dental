import React from "react";
import Header from "../Scenes/Header/Header";
import Footer from "../Scenes/Footer/Footer";
import styled from 'styled-components';

const StyledMainLayout = styled.div`
display: flex;
min-height: 100vh;
flex-direction: column;
padding: 0;
margin: 0;
`



const MainLayout =(props)=>{
    const { children } = props;
    return(
        <StyledMainLayout className={"dental-web"}>
            <Header/>
            { children }
            <Footer/>
        </StyledMainLayout>
    )
}

export default MainLayout;