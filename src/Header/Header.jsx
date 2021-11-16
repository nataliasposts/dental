import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import { PATHS } from "../Routing/routing";



const StyledHeader = styled.header`
max-width: 100%;
padding: 0 15px 0 15px;
margin: auto;
position: relative;
z-index: 11;
box-shadow: 0 0 10px rgb(0 0 0 / 10%);

.header-container{
    max-width: 1230px;
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
    font-size: 20px;
    line-height: 20px;
    color: rgb(42, 44, 49);
    cursor: pointer;
    font-family: 'Merriweather-Regular', sans-serif; 
}
.header-logo_img{
    width: 50%;
}
`



const Header = (props) => {
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
                                        <Link to="/main" className="header-menu_link">Main</Link>
                                    </li>
                                    <li className={"header-menu_item"}>
                                        <Link to="/aboutus" className="header-menu_link">About us</Link>
                                    </li>
                                    <li className={"header-menu_item"}>
                                        <Link to="/service" className="header-menu_link">Service</Link>   
                                    </li>
                                    <li className={"header-menu_item"}>
                                        <Link to="/contact" className="header-menu_link">Contact</Link>
                                    </li>
                                    <li className={"header-menu_item"}>
                                        <Link to={PATHS.PROFILE} className="header-menu_link">Account</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        </div>
        </StyledHeader>
    );
};

export default Header;