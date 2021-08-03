import React from 'react';
import './randum.css';
import A1 from './img/A1.png';
import A2 from './img/A2.png';
import A3 from './img/A3.png';
import B1 from './img/B1.png';
import B3 from './img/B3.png'




export default function Randum() {
    const imgs = [A1, A2, A3, B1, B3];


    return <div className="randum">
        {imgs.map(img => {return <img src={img} alt={`Randum-${Math.random(1, 5)}`}/>})}
    </div>
}