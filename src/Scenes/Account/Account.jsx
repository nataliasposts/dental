import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { logOutUser } from "../../store/action/logOutUser";
import { PATHS, ROUTE } from "../../Rooting/routing";


const StyledAccount = styled.div`
`

const Account = (props) =>{
    const history = useHistory();
    const urlParams = useParams();
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logOutUser());
        history.push("/main");
    }

    return(
        <StyledAccount>
            <div className={"account-container"}>
                <div className={"account-row"}>
                <aside className={"aside-account"}>
                    <nav className={"account-nav"}>
                        <ul className={"account-list"}>
                            <li className={"account-list_item"}>
                            <Link to={PATHS.ACCOUNT(urlParams.userID)} className={"account-link"}>
                                <div className={"list-item_title"}>
                                   
                                    <p>Account</p>
                                </div>
                            </Link>                               
                            </li>
                            <li className={"account-list_item"}>
                            <Link to={PATHS.APPOINTMENT(urlParams.userID)} className={"account-link"}>
                                <div className={"list-item_title"}>
                                    
                                    <p>Appointments</p>
                                </div>
                            </Link>                               
                            </li>
                            <li className={"account-list_item"}>
                                <button onClick={logOut} className={"account-btn"}>
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