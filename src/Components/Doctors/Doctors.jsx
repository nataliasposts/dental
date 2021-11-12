import React from "react";
import styled from "styled-components";

const StyledDoctors = styled.div`
max-width: 100%;
padding: 155px 0 137px 0;

.aboutus-container{
    max-width: 1230px;
    margin: auto;
    padding: 0 15px;
}
.title{
    font-size: 40px;
    color: #2f89fc;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 20px;
}
.description{
    text-align: center;
    font-size: 20px;
}

`

const Doctors = (props) => {
    return(
        <StyledDoctors>
            <div className={"doctors-container"}>
                <div className={"doctors-title"}>
                    <h3 className={"title"}>Book the appointment</h3>
                    <p className={"description"}>Choose a doctor</p>
                </div>
                <ul className={"doctors-row"}>
                    <li className={"doctors"}>
                        <h4 className={"doctors-name"}>Ivanov Ivan</h4>
                        <p className={"doctors-position"}>dentist</p>
                    </li>
                    <li className={"doctors"}>
                        <h4 className={"doctors-name"}>Sidorov Alex</h4>
                        <p className={"doctors-position"}>dentist</p>
                    </li>
                    <li className={"doctors"}>
                        <h4 className={"doctors-name"}>Jamson Jon</h4>
                        <p className={"doctors-position"}>dentist</p>
                    </li>
                    <li className={"doctors"}>
                        <h4 className={"doctors-name"}>Smith Mary</h4>
                        <p className={"doctors-position"}>dentist</p>
                    </li>
                </ul>
            </div>
        </StyledDoctors>
    )
}

export default Doctors;