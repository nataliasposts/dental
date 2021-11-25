import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import FormikInputContact from "Components/Formik/FormikInputContact";
import FormikTextarea from "Components/Formik/FormikTextarea";
import FormikCheckbox from "Components/Formik/FormikCheckbox";
import Phone from "assets/img/contact/phone.svg";
import Email from "assets/img/contact/email.svg";
import Viber from "assets/img/contact/viber.svg";
import Telegram from "assets/img/contact/telegram.svg";
import Whatsapp from "assets/img/contact/whatsapp.svg";
import background from "assets/img/contact/contact.png";

const StyledContact = styled.div`
max-width: 100%;
padding: 155px 0 137px 0;
background: url(${background}) rgba(0, 0, 0, 0.1);
background-repeat: no-repeat;
background-size: cover;
background-blend-mode: multiply;
background-position: center;


.contact-container{
    max-width: 1230px;
    margin: auto;
    padding: 0 15px;
}
.phone-img{
    width: 20px;
}
.email-img{
    width: 20px
}
.icon{
    width: 20px
}
.contact-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.title{
    font-size: 40px;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 20px;
}

`;

const customValidator = (values) => {
    const errorObj = {};
    let isValid = true;
  
    // Validate name
    if (!values.name) {
        errorObj.name = "Please write your name";
        isValid = false;
    } else if (values.name.length > 50) {
        errorObj.name = "Are you really sure that your full name is that big?";
        isValid = false;
    }
  
    // Validate email
    if (!values.email) {
        errorObj.email = "Please write your email";
        isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errorObj.email = 'Invalid email address';
        isValid = false;
    }

    // Validate message
    if (!values.message) {
        errorObj.message = "Please write the message";
        isValid = false;
    }
    // Validate terms
    if (!values.terms) {
        errorObj.terms = "Please accept terms and conditions";
        isValid = false;
    }
  
    return isValid ? null : errorObj;
  };


const Contact = (props) =>{
    return(
        <StyledContact>
            <div className={"contact-container"}>
                <div className={"contact-title"}>
                    <h2 className={"title"}>Contacts</h2>
                </div>
                <div className={"contact-wrapper"}>
                <div className={"contact-row"}>
                    <div className={"contact-address"}>
                        <p>Warszawa</p>
                        <p>al. Jerzego Warszyngtona 190</p>
                    </div> 
                    <div className={"contact-email"}>
                        <a href="#" className={"link"}>
                            <p className={"email"}><Email className={"email-img"}/> office@dental.com</p>
                        </a>
                    </div>
                    <div className={"contact-number"}>
                        <a href="#" className={"link"}>
                            <p className={"number"}><Phone className={"phone-img"}/>+48 789 463 218</p>
                        </a>
                    </div>
                    <div className={"contact-icons_row"}>
                        <div className={"contact-icon"}>
                            <a href="#" className={"link"}>
                                <Viber className={"icon"}/>
                            </a>
                        </div>
                        <div className={"contact-icon"}>
                            <a href="#" className={"link"}>
                                <Telegram className={"icon"}/>
                            </a>
                        </div>
                        <div className={"contact-icon"}>
                            <a href="#" className={"link"}>
                                <Whatsapp className={"icon"}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"contact-form"}>
                    
                    <Formik
                    initialValues={{ name: '', email: '', message: '',  terms: false}}
                    onSubmit={(values) => {
                        console.log("form submitted", values)}}
                    validate={customValidator}>
                        <Form>
                        <FormikInputContact name={'name'} label={"Name"} />
                        <FormikInputContact name={'email'} label={"Email adress"}/>
                        <FormikTextarea name={'message'} label={"Message"} rows={"10"} cols={"45"}/>
                        <FormikCheckbox name={'terms'} type={"checkbox"} label={"I accept Terms And Conditions"}/>
                        <button type={"submit"} className={"btn-contact"}>Send</button>
                        </Form>
                    </Formik>
                </div>
            </div>
            </div>
        </StyledContact>
    )

}

export default Contact;