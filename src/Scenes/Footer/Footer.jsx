import React from "react";
import styled from 'styled-components';

const StyledFooter = styled.div `
max-width: 100%;
padding: 25px 0 25px;
background-color: rgb(33, 33, 33);
flex: 0 0 auto;

.footer-container{
    max-width: 1170px;
    margin: auto;
    padding: 0 15px;
}
.footer-title h3{
    font-family: 'Roboto-Regular', sans-serif; 
    font-size: 15px;
    text-align: center;
    color: rgb(255, 255, 255);
    text-transform: capitalize;
}
`

const Footer = (props)=>{
    return(
        <StyledFooter>
            <div class="footer-container">
            <div class="footer-title">
                <h3>© dracut family dentistry</h3>
            </div>
        </div>
        </StyledFooter>
    )
}

export default Footer;