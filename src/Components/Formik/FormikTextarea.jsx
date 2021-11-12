import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const StyledFormikTextarea = styled.div``;

const FormikTextarea = (props) =>{
    const [field, meta, helpers] = useField(props.name);
    return (
        <StyledFormikTextarea>
            <label>
                {props.label}
            <textarea {...field} className={"textarea-form"}/>
            </label>
            {(meta.touched && meta.error) &&
                <div className={"textarea-error"}>
                    {meta.error}
                </div>
            }
        </StyledFormikTextarea>
    )
}

export default FormikTextarea;