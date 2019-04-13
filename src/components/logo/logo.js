import React from 'react';
import Tilt from 'react-tilt';
import './logo.css'
import brain from './brain.png'
const Logo=()=>
{
  return (
    <div className="pa4 dib">
    <Tilt className="Tilt logobg" options={{ max : 50 }} style={{ height: 160, width: 160 }} >
   <div className="Tilt-inner ml3 pt2"> <img src={brain} alt="logo" width="150" height="150"/> </div>
  </Tilt>

    </div>
  );
}

export default Logo;
