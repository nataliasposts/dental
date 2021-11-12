import React from "react";
import { useField } from "formik";
import styled from "styled-components";


const StyledFormikInputLogin = styled.div`


.input-label{
    display: block;
    font-size: 20px;
    color: #212020;
    margin-bottom: 10px;
}
.input-form{
    width: 400px;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #212020;
    border-radius: 4px;
    margin-top: 10px;
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