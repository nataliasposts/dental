import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, useHistory} from 'react-router-dom';
import logo from "../../assets/img/logo.png"
import { PATHS } from "../../Routing/routing";
import ModalWindowRegistration from "../../Components/ModalWindow/ModalWindowComponents/ModalWindowRegistration";
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../store/selector/userSelector';
import { logOutUser } from "../../store/action/logOutUser";
import ModalWindowLogin from '../../Components/ModalWindow/ModalWindowComponents/ModalWindowLogin';
import { ModalContext } from '../../HOC/GlobalModalProvider';



const StyledHeader = styled.header`
max-width: 100%;
position: relative;
z-index: 11;
box-shadow: 0 0 10px rgb(0 0 0 / 10%);



.header-container{
    max-width: 1170px;
    margin: auto;
    padding: 0 15px;
}
.header-row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 -15px 0 -15px;
    
}
.header-menu{
    width: 50%;
}
.header-menu_items{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
}
.header-menu_item{
    list-style-type: none;
    margin-right: 15px;
    :last-child {
      margin-right: 0px;
    }
}
.header-menu_link{
    text-decoration: none;
    font-size: 25px;
    line-height: 20px;
    color: rgb(42, 44, 49);
    cursor: pointer;
    font-family: 'Roboto-Regular', sans-serif; 
    background-color: white;
    cursor: pointer;
    transition: 0.3s;
}
.header-menu_link:hover{
    color: #ff8000;
}
.header-logo_img{
    width: 50%;
}
.log-btn{
    background: #ff8000;
    color: #fff;
    padding: 15px 36px;
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
    border: none;
    border-radius: 50px;
    font-family: 'Roboto-Regular', sans-serif; 
    cursor: pointer;
    transition: 400ms;
}
.log-btn:hover{
    transform: scale(1.1, 1.1);
}
`



const Header = (props) => {

    const setModalContent = useContext(ModalContext);
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
   
    const moveToProfile = (userId) => {
        history.push(PATHS.PROFILE(userId))
      }

   
    return(
        <StyledHeader>
            <div className={"header-container"}>
                <div className={"header-row"}>
                    <div className={"header-logo"}>
                        <Link to="/" className="header-logo_link">
                            <img className="header-logo_img" src={logo}/>
                        </Link>
                        </div>
                            <nav className={"header-menu"}>
                                <ul className={"header-menu_items"}>
                                    <li className={"header-menu_item"}>
                                        <Link to="/main" className={"header-menu_link"}>Main</Link>
                                    </li>
                                    <li className={"header-menu_item"}>
                                        <Link to="/aboutus" className={"header-menu_link"}>About us</Link>
                                    </li>
                                    <li className={"header-menu_item"}>
                                        <Link to="/service" className={"header-menu_link"}>Service</Link>   
                                    </li>
                                    <li className={"header-menu_item"}>
                                        <Link to="/contact" className={"header-menu_link"}>Contact</Link>
                                    </li>
                                    {(user.loggedIn === true)
                                    ? <li className={"header-menu_item"}> 
                                        <button className={"header-menu_link"} 
                                        onClick={() => { moveToProfile(user.userId)}}>
                                            Account
                                        </button>
                                    </li>
                                    : <li className="header-menu_item">
                                        <button className={"header-menu_link"} 
                                        onClick={() => {setModalContent(<ModalWindowRegistration/>)}}>
                                            Registration
                                        </button>
                                    </li>}
                                </ul>
                            </nav>
                            <div className={"header-login"}>
                                {(user.loggedIn === true)
                                ? <button className={"log-btn"} 

                                onClick={() => {
                                        dispatch(logOutUser());
                                        history.push("/main");
                                        }}>
                                            Log out
                                </button>
                                : <button className={"log-btn"}
                                   onClick={() => {setModalContent(<ModalWindowLogin/>)}} >
                                       Log in
                                </button>}
                            </div>
                        </div>
                        </div>
        </StyledHeader>
    );
};

export default Header;