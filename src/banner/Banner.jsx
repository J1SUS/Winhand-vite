import React from 'react';
import './banner.css';
import Obsion from './img/obsion-3.5.png'

export default function Banner() {
    return (
        <div className="Banner">
            <img src={Obsion} alt="Obsion" />
            <div className="text">
                <div className="title">
                <h1 className="somos">Somos</h1>
                <h3 className="Plataforma">Una Plataforma</h3>
                <h4 className="Colaborativa">Colaborativa</h4>
                <h1 className="Premiada">Premiada</h1>
                </div>
                <div className="subtitle">
                    <h3>Inspirada en los</h3>
                    <h1>Juegos de Bingo</h1>
                </div>
            </div>
        </div>
    )
}

//Initial Banner