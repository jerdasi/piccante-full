import React, { useState } from 'react'

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
                                    <a className="nav-link" href="#" style={{ fontSize: "17px" }}>Home</a>
                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href="#" style={{ fontSize: "17px" }}>Menu</a>
                                </li>
                                <li className="nav-item dropdown mr-4">
                                    <a className="nav-link" href="#" style={{ fontSize: "17px" }}>Tentang</a>
                                </li>
                                <li className="nav-item dropdown mr-4">
                                    <a className="nav-link" href="#" style={{ fontSize: "17px" }}>Book Table</a>
                                </li>
                            </ul>
                        </div>
                        <div className="user-option mt-3">
                            <a href="" className="user-link">
                                <i className="bi bi-person-fill"></i>
                            </a>
                            <a className="cart-link" href="#">
                                <i className="bi bi-cart-fill"></i>
                            </a>
                            <a className="cart-link" href="#">
                                <i className="bi bi-search"></i>
                            </a>
                            <a href="" className="order-online">
                                Order Online
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar