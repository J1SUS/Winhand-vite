import React from 'react';
import './navbar.css';
import logo from './img/logo-principal-2.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" />
            <div className="links">
                <h2>REGISTRATE</h2>
                <h1>NOSOTROS</h1>
            </div>
        </div>
    )
}


//Navbar on top