import React from "react";
import { useField } from "formik";
import styled from "styled-components";


const StyledFormikInputLogin = styled.div`

.input-label{
    display: block;
    font-size: 20px;
    color: #212020;
    margin-bottom: 10px;
    font-family: 'Roboto-Regular', sans-serif; 
    
}
.input-form{
    width: 400px;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #212020;
    border-radius: 4px;
    margin-top: 10px;
    font-family: 'Roboto-Light', sans-serif; 
    cursor: pointer;
}
`;

const FormikInputLogin = (props) =>{
    const [field, meta] = useField(props.name);
    return (
        <StyledFormikInputLogin>
            <label className={"input-label"}>
                {props.label}
            <input {...field} className={"input-form"}/>
            </label>
            {(meta.touched && meta.error) &&
                <div className={"input-error"}>
                    {meta.error}
                </div>
            }
        </StyledFormikInputLogin>
    )
}

export default FormikInputLogin;