import React from 'react'
import './App.css';
import Banner2 from './banner2/Banner-2';
import Midbar from './midbar/Midbar';
import Navbar from './navbar/navbar';
import Banner from './banner/Banner';
import Registro from './registro/Registro';
import Tarjetas from './tarjetas/Tarjetas';
import Randum from './randum/Randum';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Midbar />
      <Banner2 />
      <Registro />
      <Tarjetas />
      <Randum />
    </div>
  );
}

export default App;
