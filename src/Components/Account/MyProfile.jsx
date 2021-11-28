import React, { useCallback, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/selector/userSelector";
import styled from "styled-components";

const StyledMyProfile = styled.div`

.profile-description{
    padding: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: solid 2px #ff8000;
}
.firstname{
    margin-right: 10px;
}
.birthday-title{
    margin-bottom: 10px;
}
`

const MyProfile = (props) =>{
    const userFind = useSelector(userSelector);
    const [user, setUser] = useState('')

    useEffect(() => {
        new Promise((resolve, reject) => {
            resolve(
                userFind
            )
        }).then((data) => {
            if (data.userId) {
                setUser(data);
            } 
        })}, []);
    
    return(
        <StyledMyProfile>
                <div className={"profile-description"}>
                    <div className={"profile-name"}>
                        <h3 className={"user-name"}>
                            <span className={"firstname"}>{user.firstname}</span>
                            <span className={"secondname"}>{user.secondname}</span>
                        </h3>
                    </div>
                    <div className={"user-birthday"}>
                        <h3 className={"birthday-title"}>Birthday:</h3>
                        <div className={"birthday-date"}>
                            {user.birthday}
                        </div>
                    </div>
                    </div>
        </StyledMyProfile>

    )

}

export default MyProfile;