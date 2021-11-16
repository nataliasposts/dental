import React, { useContext } from 'react';
import styled from "styled-components";
import { loginValidator } from "./loginValidator";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newUserAdd } from "store/action/newUserAdd";
import { loginedUser } from "api/instance";
import {  PATHS  } from "Routing/routing";
import FormikInputLogin from "../../Formik/FormikInputLogin"
import { ModalContext } from "HOC/GlobalModalProvider";
import ModalWindowRegistration from './ModalWindowRegistration';






const StyledModalWindowLogin= styled.div`
text-align: center;
margin-bottom: 15px;

.login-title{
    font-size: 25px;
    margin-bottom: 20px;
    color: #2f89fc;
}
.btn-registartion{
    color: #F6F5F3;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 18px;
    background: #ff8000;
    border: none;
    border-radius: 50px;
    text-align: center;
}
.login-btn{
    color: #F6F5F3;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 18px;
    background: #7E929F;
    border: none;
    border-radius: 50px;
    text-align: center;
    margin: 20px 0 20px 0;
}
`
const ModalWindowLogin = (props)=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const setModalContent = useContext(ModalContext);
   
   


    const LogedUser = (formData) => {
        loginedUser(formData.email)
            .then((data) => {
                if (!data) {
                    alert('Invalid login');
                } else if (data.email === formData.email && data.password !== formData.password) {
                    alert('Invalid password');

                } else if (data.email === formData.email && data.password === formData.password) {
                    dispatch(newUserAdd(data.Birthday, data.FirstName, data.SecondName, data.password, data.email, data.userID))
                    history.push(PATHS.APPOINTMENT(data.userID))
                    setModalContent(false);
                }
            })

    }





    return(
        <StyledModalWindowLogin>
            <div className={"login-title"}>
                <h2>Login</h2>
            </div>
             <Formik
             initialValues={{ email: '', password: '' }}
             onSubmit={LogedUser}
             validate={loginValidator}>
                 <Form>
                     <FormikInputLogin name={'email'} label={"Email adress"}/>
                     <FormikInputLogin name={'password'} label={"Password"}/>
                     <button type={"submit"} className={"login-btn"}> Log in</button>
                </Form>
            </Formik>
            <button className={"btn-registartion"} onClick={() => {setModalContent(<ModalWindowRegistration/>)}}>
                Registration
            </button>
        </StyledModalWindowLogin>
    )
}

export default ModalWindowLogin;