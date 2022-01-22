import React, { useContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { LoginContext } from './Context/LoginContext';

import AdminPage from './Page/AdminPage';
import LoginPage from './Page/LoginPage';
import MainPage from './Page/MainPage';

const PrivateRoute = ({children}) => {
    const [auth, setAuth] = useContext(LoginContext)
    console.log(auth)
    if (auth === null){
        return <Navigate to = "/login"/>
    } else {
        return children
    }
}

const LoginRoute = ({children}) => {
    const [auth, setAuth] = useContext(LoginContext)
    if (auth === null){
        return children
    } else {
        return <Navigate to = "/"/>
    }
}

const MainLayout = () => {
    

    // const PrivateRoute = ({...props}) => {
    //     if(auth){
    //         return <Route {...props}/>
    //     } else {
    //         return <Navigate to = "/login"/>
    //     }
    // }
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
                <Route path="/login" element={<LoginRoute><LoginPage /></LoginRoute>} />
            </Routes>

        </Router>

    );
}

export default MainLayout