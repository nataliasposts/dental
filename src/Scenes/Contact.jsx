import React from "react";
import styled from "styled-components";
import Phone from "assets/img/contact/phone.svg";
import Email from "assets/img/contact/email.svg";
import Viber from "assets/img/contact/viber.svg";
import Telegram from "assets/img/contact/telegram.svg";
import Whatsapp from "assets/img/contact/whatsapp.svg";
import background from "../assets/img/contact/contact.jpg";


const StyledContact = styled.div`
max-width: 100%;
padding: 125px 0 137px 0;
background: url(${background});
background-repeat: no-repeat;
background-size: cover;
background-position: center;

.contact-container{
    max-width: 1170px;
    margin: auto;
    padding: 0 15px;
}

.title{
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 50px;
    font-family: 'Roboto-Regular',sans-serif;
    color: #2f89fc;
}

.contact-address_row{
    margin-bottom: 50px;
}
.contact-address{
    margin-bottom: 30px;
}
.contact-address_city{
    font-size: 20px;
    margin-bottom: 5px;
    font-family: 'Roboto-Regular',sans-serif;
}
.contact-address_street{
    font-size: 20px;
    font-family: 'Roboto-Regular',sans-serif;
}
.contact-email{
    margin-bottom: 15px;
    
}
.email{
    color: black;
    font-size: 20px;
    font-family: 'Roboto-Regular',sans-serif;
}
.email-img{
    width: 20px;
    margin-right: 8px;
    color: #ff8000;
}
.number{
    color: black;
    font-size: 20px;
    font-family: 'Roboto-Regular',sans-serif;
}
.number-img{
    width: 20px;
    margin-right: 8px;
    color: #ff8000;
}
.contact-icons_row{
    display: flex;
    flex-direction: row;
}
.contact-icon{
    margin-right: 10px
}
.icon{
    width: 30px;
    color: #ff8000;
    cursor: pointer;
    transition: 400ms;
}

.icon:hover{
    transform: scale(1.1, 1.1);
}
`;



const Contact = (props) =>{
    return(
        <StyledContact>
            <div className={"contact-container"}>
                <div className={"contact-title"}>
                    <h3 className={"title"}>Contacts</h3>
                </div>
                <div className={"contact-address_row"}>
                    <div className={"contact-address"}>
                        <p className={"contact-address_city"}> Warszawa</p>
                        <p className={"contact-address_street"}>al. Jerzego Warszyngtona 190</p>
                    </div> 
                    <div className={"contact-email"}>
                        <a href="mailto:nataliasposts@gmail.com" className={"link"}>
                            <p className={"email"}><Email className={"email-img"}/> office@dental.com</p>
                        </a>
                    </div>
                    <div className={"contact-number"}>
                        <a href="#" className={"link"}>
                            <p className={"number"}><Phone className={"number-img"}/>+48 789 463 218</p>
                        </a>
                    </div>
                    </div>
                    <div className={"contact-icons_row"}>
                        <div className={"contact-icon"}>
                            <a href="viber://chat?number=%2B375336447452" className={"link-icon"}>
                                <Viber className={"icon"}/>
                            </a>
                        </div>
                        <div className={"contact-icon"}>
                            <a href="tg://resolve?domain=nataliasposts" className={"link-icon"}>
                                <Telegram className={"icon"}/>
                            </a>
                        </div>
                        <div className={"contact-icon"}>
                            <a href="https://wa.me/375336447452" className={"link-icon"}>
                                <Whatsapp className={"icon"}/>
                            </a>
                        </div>
                        </div>
                    </div>
        </StyledContact>
    )

}

export default Contact;