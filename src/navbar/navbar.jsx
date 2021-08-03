import React, {useState} from 'react';
import './navbar.css';
import logo from './img/logo-principal-2.png'

export default function Navbar() {
  const myfunction = () => {
    var x = document.getElementById("links");
    if (x.className === "links") {
      x.className += " responsive";
    } else {
      x.className = "links";
    };
    var i = document.getElementById("logo");
    if (i.className === "logo") {
      i.className += " responsive";
    } else {
      i.className = "logo";
    }
  }


    return (
        <nav className="navbar">
            <a href="#"><img src={logo} class="logo" id="logo" alt="Logo" /></a>
            <h1 id="check" onClick={myfunction}>=</h1>
            <div id="links" className="links">
                <h2><a href="#">REGISTRATE</a></h2>
                <h1><a href="#">NOSOTROS</a></h1>
            </div>
        </nav>
    )
}


//Navbar on top
