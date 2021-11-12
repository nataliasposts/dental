import React from "react";
import { useField } from "formik";
import styled from "styled-components";


const StyledFormikInputContact = styled.div`



`;

const FormikInputContact = (props) =>{
    const [field, meta] = useField(props.name);
    return (
        <StyledFormikInputContact>
            <label className={"input-label"}>
                {props.label}
            <input {...field} className={"input-form"}/>
            </label>
            {(meta.touched && meta.error) &&
                <div className={"input-error"}>
                    {meta.error}
                </div>
            }
        </StyledFormikInputContact>
    )
}

export default FormikInputContact;