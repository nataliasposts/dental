import React from "react";
import MainLayout from "./Layouts/MainLayout";
import { BrowserRouter } from 'react-router-dom';
import RootRouter from "./Routing/Root";
import GlobalStoreProvider from "./HOC/GlobalStoreProvider";
import GlobalModalProvider from "./HOC/GlobalModalProvider";





const App = (props) => {
    return(
        <React.Fragment>
            <BrowserRouter>
            <GlobalStoreProvider>
            <GlobalModalProvider>
              <MainLayout>
              <RootRouter/>
              </MainLayout>
              </GlobalModalProvider>
            </GlobalStoreProvider>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;