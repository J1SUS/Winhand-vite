import React from 'react';
import './registro.css';
import reg2 from './img/reg2.png'

export default function Registro() {
    return (
        <div className="Registro">
            <img src={reg2} alt="reg2"/>
            <div className="reg">
                <h2>Registrate con Facebook</h2>
                <h2>Registrate con Google</h2>
            </div>
        </div>
    )
}