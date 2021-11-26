import React, { useEffect, memo, useState, useContext } from "react";
import styled from "styled-components";

const StyledCard = styled.div` `

const Card = (props) => {


    return(
        <StyledCard>
            <div className={"card-list"}>
                <h3 className={"card-title"}>
                    {props.date}
                </h3>
                <p className={"card-description"}>
                 
                </p>
            </div>
        </StyledCard>
        ) 
    }

    

export default memo(Card);  