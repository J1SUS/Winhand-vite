import React from 'react';
import './Tarjetas.css';
import eventos from './img/eventos.png';
import trofeo from './img/ganadoores-1.png';
import winhand from './img/winhan 1-A.png';
import play from './img/play 1-A.png'

function Tarjeta(props) {
    return (
        <div className={`tarjeta tarjeta-${props.id}`}>
            <div className="img-container"><img className="tarjeta-img" src={props.img} alt={props.alt} /></div>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
        </div>
    )
}

export default function Tarjetas() {
    return (
        <div className="Tarjetas">
            <Tarjeta id="0" title="EVENTOS" img={eventos} subtitle="PROXIMOS EVENTOS"/>
            <Tarjeta id="1" title="MEJORES GANADORES" img={trofeo} subtitle="TOP 10 DE LAS MEJORES PARTIDAS"/>
            <Tarjeta id="2" title="PATROCINADOS" img={winhand} subtitle="SE PARTE DE NUESTROS PATROCINADORES"/>
            <Tarjeta id="3" title="VIDEOS" img={play} subtitle="VIDEOS RECIENTES"/>
        </div>
    )
}
