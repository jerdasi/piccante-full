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
import DaftarMenu from './Page/DaftarMenu';
import About from './Page/AboutPage';
import BookingTable from './Page/BookingPage'
import CartPage from './Page/CartPage'
import OrderPage from './Page/OrderPage'
import RegisterPage from './Page/RegisterPage';

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
                <Route path='/daftarmenu' element={<DaftarMenu/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/booking' element={<BookingTable/>} />
                <Route path='/cart' element={<CartPage/>} />
                <Route path='/order' element={<OrderPage/>} />
                <Route path='/register' element={<LoginRoute><RegisterPage/></LoginRoute>} />
            </Routes>

        </Router>

    );
}

export default MainLayout