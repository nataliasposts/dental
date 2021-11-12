import React from "react";
import Header from "../Header/Header";
import MainScene from "../Scenes/Mainscene";





const MainLayout =(props)=>{
    const { children } = props;
    return(
        <div className={"dental-web"}>
            <Header/>
            { children }
        </div>
    )
}

export default MainLayout;