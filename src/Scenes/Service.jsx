import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from "HOC/GlobalModalProvider";
import ModalWindowLogin from 'Components/ModalWindow/ModalWindowComponents/ModalWindowLogin';
import dentist from "../assets/img/service/dentist.png";
import orthodont from "../assets/img/service/orthodontics.png";
import implant from "../assets/img/service/implant.png";
import root from "../assets/img/service/canals.png";
import cosmetic from "../assets/img/service/cosmet.png";
import crown from "../assets/img/service/crown.png";


const StyledOurService = styled.div`
max-width: 100%;
padding: 95px 0 137px 0;


.ourservice-container{
    max-width: 1170px;
    margin: auto;
    padding: 0 15px;
}
.ourservice-row{
    display: flex;

}
.title{
    font-size: 40px;
    color: #2f89fc;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Roboto-Regular', sans-serif; 
}
.description{
    text-align: center;
    font-size: 20px;
    font-family: 'Roboto-Light', sans-serif; 
}
.ourservice-title{
    margin: 0 auto 60px auto;
    width: 700px;
}
.ourservice-row_items{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;
}
.ourservice-row_item{
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    padding: 30px;
    box-shadow: 0px 5px 10px 2px rgb(34 60 80 / 20%);
    margin-right: 20px;
    width: 300px;
    margin-bottom: 20px;
}
.row-item_icon{
    align-self: center;
    margin-bottom: 15px;
}
.img{
    width: 80px;
}
.row-item_title h4{
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #2f89fc;
    font-family: 'Roboto-Regular', sans-serif; 
}
.row-item_description p{
    font-size: 18px;
    text-align: center;
    font-family: 'Roboto-Light', sans-serif; 
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
    font-family: 'Roboto-Regular', sans-serif; 
    cursor: pointer;
    transition: 400ms;
}
.ourservice-btn:hover{
    transform: scale(1.1, 1.1);
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
                            <img src={dentist} alt="dentist" className={"img"}/>
                        </div>
                        <div className={"row-item_title"}>
                            <h4>Dentist consultation</h4>
                        </div>
                        <div className={"row-item_description"}>
                            <p>from 20$</p>
                        </div>
                    </div>
                    <div className={"ourservice-row_item"}>
                        <div className={"row-item_icon"}>
                            <img src={orthodont} alt="orthodont" className={"img"}/>
                        </div>
                        <div className={"row-item_title"}>
                            <h4>Orthodontics</h4>
                        </div>
                        <div className={"row-item_description"}>
                            <p>from 1000$</p>
                        </div>
                    </div>
                    <div className={"ourservice-row_item"}>
                        <div className={"row-item_icon"}>
                            <img src={implant} alt="implant" className={"img"}/>
                        </div>
                        <div className={"row-item_title"}>
                            <h4>Dental implants</h4>
                        </div>
                        <div className={"row-item_description"}>
                            <p>from 450$</p>
                        </div>
                    </div>
                    <div className={"ourservice-row_item"}>
                        <div className={"row-item_icon"}>
                            <img src={root} alt="root" className={"img"}/>
                        </div>
                        <div className={"row-item_title"}>
                            <h4>Root canals</h4>
                        </div>
                        <div className={"row-item_description"}>
                            <p>from 280$</p>
                        </div>
                    </div>
                    <div className={"ourservice-row_item"}>
                        <div className={"row-item_icon"}>
                           <img src={crown} alt="crowns" className={"img"}/>
                        </div>
                        <div className={"row-item_title"}>
                            <h4>Crowns & Bridges</h4>
                        </div>
                        <div className={"row-item_description"}>
                            <p>from 350$</p>
                        </div>
                    </div>
                    <div className={"ourservice-row_item"}>
                        <div className={"row-item_icon"}>
                           <img src={cosmetic} alt="cosmetic" className={"img"}/>
                        </div>
                        <div className={"row-item_title"}>
                            <h4>Cosmetic Dentistry</h4>
                        </div>
                        <div className={"row-item_description"}>
                            <p>from 130$</p>
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