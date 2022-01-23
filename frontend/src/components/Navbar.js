import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = useState(false)
    const showHandler = () => {
        setShow(!show)
    }
    return (
        <>
            <nav className="navbar navbar-main navbar-expand-md" style={{ backgroundColor: "#580e0dff" }}>
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img src={"img/Logo.png"} width="170" height="150" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" onClick={showHandler}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main_nav" style={show ? { display: "block" } : { display: 'none' }}>
                        <div className="navbar-nav mx-auto mt-3">
                            <ul className="navbar-nav ml-2">
                                <li className="nav-item dropdown mr-4">
                                    <Link className="text-link" to="/" style={{ fontSize: "17px", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li className="nav-item mr-4">
                                    <Link className="text-link" to="/daftarmenu" style={{ fontSize: "17px", textDecoration: "none" }}>Menu</Link>
                                </li>
                                <li className="nav-item dropdown mr-4">
                                    <Link className="text-link" to="/about" style={{ fontSize: "17px", textDecoration: "none" }}>Tentang</Link>
                                </li>
                                <li className="nav-item dropdown mr-4">
                                    <Link className="text-link" to="/booking" style={{ fontSize: "17px", textDecoration: "none" }}>Book Table</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="user-option mt-3">
                            <Link className="user-link" to="/login">
                                <i class="bi bi-person-fill"></i>
                            </Link>
                            <Link className="cart-link" to="/cart">
                                <i className="bi bi-cart-fill"></i>
                            </Link>
                            <Link className="cart-link" to="/">
                                <i className="bi bi-search"></i>
                            </Link>
                            <Link className="order-online" to="/order">
                                Order Online
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar