import React from "react";
import { useField } from "formik";
import styled from "styled-components";


const StyledFormikData = styled.div`
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
.input-label{
    display: block;
    font-size: 20px;
    color: #212020;
    margin-bottom: 10px;
    font-family: 'Roboto-Regular', sans-serif; 
}
`;

const FormikData = (props) =>{
    const [field, meta, helpers] = useField(props.name);
    return (
        <StyledFormikData>
            <label className={"input-label"}>
                {props.label}
            <input {...field} className={"input-form"} type="date"/>
            </label>
            {(meta.touched && meta.error) &&
                <div className={"input-error"}>
                    {meta.error}
                </div>
            }
        </StyledFormikData>
    )
}

export default FormikData;