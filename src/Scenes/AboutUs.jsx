import React from "react";
import styled from 'styled-components';
import aboutus from 'assets/img/aboutus.jpg';
import { Link } from 'react-router-dom';





const StyledAboutUs = styled.div`
max-width: 100%;
padding: 155px 0 137px 0;

.aboutus-container{
    max-width: 1230px;
    margin: auto;
    padding: 0 15px;
}
.aboutus-row{
    display: flex;
    flex-direction: row;
}
.aboutus-img{
    max-width: 50%;
}
.img{
    width: 800px;
}
.aboutus-row_info{
    display: flex;
    flex-direction: column;
    max-width: 50%;
    margin: 0 0 0 80px;
    background-color: white;
    padding: 30px;
}
.aboutus-title{
    text-transform: uppercase;
    font-size: 40px;
    margin-bottom: 30px;
    color: #2f89fc;
    text-align: center;
}
.aboutus-description{
    font-size: 20px;
    margin-bottom: 30px;
    color: #292744;
    text-align: justify;
}
.aboutus-btn{
    background: #ff8000;
    color: #fff;
    width: 281px;
    padding: 18px 46px;
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: 50px;
    margin: auto;
    cutsor: pointer;
}
`;

const AboutUs = (props) => {
    return(
        <StyledAboutUs>
            <div className={"aboutus-container"}>
                <div className={"aboutus-row"}>
                <div className={"aboutus-img"}>
                    <img src={aboutus} alt="about us" className={"img"}/>
                </div>
                <div className={"aboutus-row_info"}>
                    <div className={"aboutus-title"}>
                        <h3>about dental clinic</h3>
                    </div>
                    <div className={"aboutus-description"}>
                        <p>At Dental Clinic we offer modern, innovative dentistry and competitive prices in the heart of North London. 
                            We have designed our practice so that our patients feel as comfortable 
                            and relaxed as possible and leave feeling happy with their dental experience.</p>
                    </div>
                    <Link to="/contact" className="aboutus-btn">Contact</Link>
                    </div>
                </div>
            </div>
        </StyledAboutUs>
    )
}


export default AboutUs;