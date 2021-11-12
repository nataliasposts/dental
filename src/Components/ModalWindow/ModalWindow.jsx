import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import {ModalContext} from "../../HOC/GlobalModalProvider"

const StyledModalWindow = styled.div`
height: 100%;
width: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 100;
background-color: rgba(0, 0, 0, 0.5);

.btn-close{
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 18px;
    padding: 4px 10px 4px 10px;
    color: #F6F5F3;
    border-radius: 50%;
    border: none;
    background-color: #ff8000;
    cursor: pointer;
    transition: 0.4s;
}
.modal-body{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
}
.modal-content{
    background-color: whitesmoke;
    color: #221c1d;
    width: 500px;
    padding: 30px 30px;
    border-radius: 4px;
    position: relative;
}

`



const ModalWindow = (props) => {
    const setModalContent = useContext(ModalContext);
    const { children } = props;


    return (
      <StyledModalWindow>
          <div className={"modal-container"}>
              <div className={"modal-body"}>
              <div className={"modal-content"}>
              {children}
              <button
                className={"btn-close"}
                onClick={() => {
                  setModalContent(false);
                }}
              >
                x
              </button>
            </div>
          </div>
          </div>
      </StyledModalWindow>
    );
  };
  
  export default memo(ModalWindow);