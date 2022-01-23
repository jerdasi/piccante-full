import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = props => {
    const authenticated = JSON.parse(localStorage.getItem('authenticated'))
    const iniateAuth = authenticated ? authenticated : null
    const [auth, setAuth] = useState(iniateAuth)

    return (
        <LoginContext.Provider value={[auth, setAuth]}>
            {props.children}
        </LoginContext.Provider>
    )
}