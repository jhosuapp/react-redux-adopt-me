import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../store";

function ReduxStoreWrapper(props: { children: JSX.Element }) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                {props.children}
            </PersistGate>
        </Provider>
    );
}
export default ReduxStoreWrapper;
