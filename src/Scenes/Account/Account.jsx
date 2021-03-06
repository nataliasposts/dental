import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { logOutUser } from "store/action/logOutUser";
import { PATHS } from "Routing/routing";





const StyledAccount = styled.div`
flex: 1 0 auto;

.account-container{
    max-width: 1170px;
    margin: auto;
    padding: 0 15px;
    position: relative;
    z-index: 1;
}

.account-row{
    display: flex;
    width: 100%;
}
.aside-account{
    margin-top: 155px;
    width: 25%;
    padding: 15px 0;
}
.section{
    width: 75%;
    margin-top: 55px
}
.account-btn{
    background: #ff8000;
    color: #fff;
    padding: 15px 20px;
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: 50px;
    padding: 10px 30px;
    cursor: pointer;
    border: none;
    font-size: 14px;
    margin-top: 55px;
    font-family: 'Roboto-Regular', sans-serif; 
    transition: 400ms;
}
.account-btn:hover{
    transform: scale(1.1, 1.1);
}
.account-list_item{
    margin-bottom: 15px;
}
.list-item_title{
    font-size: 20px;
    color: black;
    font-family: 'Roboto-Regular', sans-serif; 
    cursor: pointer;
    transition: 0.3s;
}
.list-item_title:hover{
    color: #ff8000;
}
`

const Account = (props) =>{
    const history = useHistory();
    const urlParams = useParams();
    const dispatch = useDispatch();
    



    return(
        <StyledAccount>
            <div className={"account-container"}>
                <div className={"account-row"}>
                <aside className={"aside-account"}>
                    <nav className={"account-nav"}>
                        <ul className={"account-list"}>
                            <li className={"account-list_item"}>
                            <Link to={PATHS.PROFILE(urlParams.userId)} className={"account-link"}>
                                <div className={"list-item_title"}>  
                                    <p>Account</p>
                                </div>
                            </Link>                               
                            </li>
                            <li className={"account-list_item"}>
                            <Link to={PATHS.APPOINTMENT(urlParams.userId)} className={"account-link"}>
                                <div className={"list-item_title"}>                                   
                                    <p>Appointments</p>
                                </div>
                            </Link>
                            </li> 
                            <li>
                            <Link to={PATHS.DOCTOR(urlParams.userId)} className={"account-link"}>
                                <div className={"list-item_title"}>                                    
                                    <p>Book appointment</p>
                                </div>
                            </Link>                             
                            </li>
                            <li className={"account-list_item"}>
                                <button onClick={() => {
                                    dispatch(logOutUser());
                                    history.push("/main");
                                }}
                                className={"account-btn"}>
                                    Log out
                                </button>
                            </li>
                        </ul>
                    </nav>
                    </aside>
                    <section className={"section"}>
                        {props.children}
                    </section>
                </div>
            </div>
        </StyledAccount>
    )

}

export default Account;