import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from "../HOC/GlobalModalProvider";
import ModalWindowLogin from '../Components/ModalWindow/ModalWindowComponents/ModalWindowLogin';


const StyledOurService = styled.div`
max-width: 100%;
padding: 155px 0 137px 0;
background-color: #f2edf1;

.ourservice-container{
    max-width: 1230px;
    margin: auto;
    padding: 0 15px;
}
.ourservice-row{
    display: flex;

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
.ourservice-title{
    margin: 0 auto 60px auto;
    width: 700px;
}
.ourservice-row_items{
    display: flex;
    margin-bottom: 60px;
    flex-direction: row;
}
.ourservice-row_item{
    display: flex;
    flex-direction: column;
    padding: 50px;
    background-color: white;
    margin-right: 10px;
}
.img{
    width: 20%;
}
.row-item_title{
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #2f89fc;
}
.row-item_description{
    font-size: 18px;
    text-align: center;
}
.ourservice-btn{
    background: #ff8000;
    color: #fff;
    width: 281px;
    padding: 18px 46px;
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: 50px;
    margin: auto;
    display: block;
}
`
const OurService = (props) => {

    const setModalContent = useContext(ModalContext);
    return(
        <StyledOurService>
            <div className={"ourservice-container"}>
                <div className={"ourservice-title"}>
                    <h3 className={"title"}>Our Service</h3>
                    <p className={"description"}>In the hands of Dr Neera Maini and her experienced team, Aqua Dental Clinic is setting new standards for general dental care for London and beyond.</p>
                </div>
                <div className={"ourservice-row_items"}>
                    <div className={"ourservice-row_item"}>
                        <div className={"row-item_icon"}>
                            
                        </div>
                        <div className={"row-item_title"}>
                            <h4>dental care</h4>
                        </div>
                        <div className={"row-item_description"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                        </div>
                    </div>
                    <div className={"ourservice-row_item"}>
                        <div className={"row-item_icon"}>
                            
                        </div>
                        <div className={"row-item_title"}>
                            <h4>dental care</h4>
                        </div>
                        <div className={"row-item_description"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                        </div>
                    </div>
                    <div className={"ourservice-row_item"}>
                        <div className={"row-item_icon"}>
                            
                        </div>
                        <div className={"row-item_title"}>
                            <h4>dental care</h4>
                        </div>
                        <div className={"row-item_description"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                        </div>
                    </div>
                    <div className={"ourservice-row_item"}>
                        <div className={"row-item_icon"}>
                           
                        </div>
                        <div className={"row-item_title"}>
                            <h4>dental care</h4>
                        </div>
                        <div className={"row-item_description"}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                        </div>
                    </div>
                </div>
                <button className={"ourservice-btn"} onClick={() => {setModalContent(<ModalWindowLogin/>)}}>
                    book appointment 
              </button>
            </div>
        </StyledOurService>
    )
}

export default OurService;