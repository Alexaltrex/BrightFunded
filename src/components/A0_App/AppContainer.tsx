import {HashRouter} from "react-router-dom";
import {Store, store} from "../../store/store";
import {createContext} from "react";
import * as React from "react";
import { theme } from "../../theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {App} from "./App";

export const StoreContext = createContext<Store>({} as Store);

export const AppContainer = () => {
    return (
        <StoreContext.Provider value={store}>
            <HashRouter>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </HashRouter>
        </StoreContext.Provider>
    )
}
