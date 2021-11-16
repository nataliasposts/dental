import React, { useContext } from 'react';
import styled from 'styled-components';
import background from 'assets/img/firstscreen.jpg'
import ModalWindowLogin from "Components/ModalWindow/ModalWindowComponents/ModalWindowLogin";
import { ModalContext } from "HOC/GlobalModalProvider";



const StyledFirstscreen = styled.div`
max-width: 100%;
padding: 155px 0 157px 0;
background-image: url(${background});
background-repeat: no-repeat;
background-size: cover;
height: 100vh;

.firstscreen-container{
    max-width: 1230px;
    margin: auto;
    padding: 0 15px;
}
.firstscreen-row{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 130px;
}
.firstscreen-title{
    margin-bottom: 30px;
}
.firstscreen-title_blue{
    font-size: 60px;
    color: #2f89fc;
    text-transform: capitalize;
}
.firstscreen-title_black{
    font-size: 60px;
    text-transform: capitalize;
    display: block;
}
.firstscreen-description p{
    margin-bottom: 30px;
    font-size: 18px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.8);
}
.book-appointment_btn{
    background: #ff8000;
    color: #fff;
    width: 281px;
    padding: 18px 46px;
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: 50px;
}
`;

const Firstscreen = (props) => {

    const setModalContent = useContext(ModalContext);

    return(
        <StyledFirstscreen>
            <div className={"firstscreen-container"}>
                <div className={"firstscreen-row"}>
                    <div className={"firstscreen-title"}>
                        <h1 className={"firstscreen-title_blue"}>we care</h1>
                        <h2 className={"firstscreen-title_black"}>about your health</h2>
                    </div>
                    <div className={"firstscreen-description"}>
                        <p>every day we bring hope and smile to the patient we serve</p>
                    </div>
                    <button className={"book-appointment_btn"} onClick={() => {setModalContent(<ModalWindowLogin/>)}}>
                        book appointment 
                    </button>
                </div>
            </div>
        </StyledFirstscreen>
    )
};

export default Firstscreen;
