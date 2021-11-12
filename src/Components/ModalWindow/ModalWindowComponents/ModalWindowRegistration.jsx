import React, { useContext } from 'react';
import styled from "styled-components";
import { Formik, Form } from "formik";
import FormikInputLogin from '../../Formik/FormikInputLogin';
import FormikData from "../../Formik/FormikData";
import { useHistory } from "react-router-dom";
import { PATHS  } from "Rooting/routing";
import { useDispatch } from "react-redux";
import { newUserAdd } from "store/action/newUserAdd";
import { registeredUser } from "../../../api/instance";
import { registrationValidator } from "./registrationValidator";
import ModalWindowLogin from './ModalWindowLogin';
import { ModalContext } from '../../../HOC/GlobalModalProvider';

const StyledModalWindowRegistration = styled.div`
text-align: center;
margin-bottom: 15px;

.registration-title{
    font-size: 25px;
    margin-bottom: 20px;
    color: #2f89fc;
}
.btn-registration{
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
.btn-login{
    color: #F6F5F3;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 18px;
    background: #ff8000;
    border: none;
    border-radius: 50px;
    text-align: center;
}
`
const ModalWindowRegistration = (props)=>{
  
    const dispatch = useDispatch();
    const history = useHistory();
    const setModalContent = useContext(ModalContext);



    return(
        <StyledModalWindowRegistration>
            <div className={"registration-title"}>
                <h2>Registration</h2>
            </div>
             <Formik
             initialValues={{ email: '', password: '', FirstName: '', SecondName: '', Birthday: '' }}
             onSubmit={(formData) => {
                registeredUser(formData.Birthday, formData.FirstName, formData.SecondName, formData.password, formData.email)
                .then(({ data }) => {
                    dispatch(newUserAdd(formData.Birthday, formData.FirstName, formData.SecondName, formData.password, formData.email, data));
                    history.push(PATHS.APPOINTMENT(data));
                    setModalContent(false);
        })
            }}
             validate={registrationValidator}>
                 <Form>
                     <FormikInputLogin name={'FirstName'} label={"First Name"}/>
                     <FormikInputLogin name={"SecondName"} label={"Second Name"}/>
                     <FormikInputLogin name={'email'} label={"Email adress"}/>
                     <FormikInputLogin name={'password'} label={"Password"}/>
                     <FormikData name={"Birthday"} label={"Date of birthday"} type="date"/>
                     <button type={"submit"} className={"btn-registration"}>Registration</button>
                </Form>
            </Formik>
            <button className="btn-login" onClick={() => {setModalContent(<ModalWindowLogin/>)}}>
                Log in
            </button>
        </StyledModalWindowRegistration>
    )
}

export default ModalWindowRegistration;