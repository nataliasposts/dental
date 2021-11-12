import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/selector/userSelector";
import styled from "styled-components";

const StyledMyProfile = styled.div`
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
            if (data.userID) {
                setUser(data);
            } 
        })}, []);
    
    return(
        <StyledMyProfile>
            <div className={"profile-row"}>
                <div className={"profile-description"}>
                    <div className={"profile-name"}>
                        <h3 className={"user-name"}>
                            <span>{user.firstname}</span>
                            <span>{user.secondname}</span>
                        </h3>
                    </div>
                    <div className={"user-birthday"}>
                        <h3 className={"birthday-title"}>Birthday</h3>
                        <div className={"birthday-date"}>
                            {user.birthday}
                        </div>
                    </div>
                    </div>
                    <div className={"profile-content"}>
                        <div className={"user-appointment"}>
                            Appointments
                        </div>
                    </div>
            </div>
        </StyledMyProfile>

    )

}

export default MyProfile;