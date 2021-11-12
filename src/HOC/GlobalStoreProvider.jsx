import React from "react";
import { Provider } from "react-redux";
import { store, persistor} from "store/initStore";
import { PersistGate } from 'redux-persist/es/integration/react';


const GlobalStoreProvider = (props) => {
    const { children } = props;
    return (
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          {children}
        </Provider>
      </PersistGate>
    );
  };
export default GlobalStoreProvider;