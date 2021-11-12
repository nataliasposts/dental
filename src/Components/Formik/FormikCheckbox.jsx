import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const StyledFormikCheckbox = styled.div``;

const FormikCheckbox = (props) =>{
    const [field, meta, helpers] = useField(props.name);
    return (
        <StyledFormikCheckbox>
            <label>
                {props.label}
            <input {...field} className={"input-form"} type="checkbox"/>
            </label>
            {(meta.touched && meta.error) &&
                <div className={"input-error"}>
                    {meta.error}
                </div>
            }
        </StyledFormikCheckbox>
    )
}

export default FormikCheckbox;