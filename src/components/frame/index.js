import React from "react";

import Logo from "../logo";
import rotar from "images/rotame.png";

import "./index.css";

const IFRAME_ID = "wick-game"
let width=window.screen.width
let height=window.screen.height
// ooo" check: delete me!
console.log ('ancho alto = ', width, height)
console.log (`'${IFRAME_ID}_desktop'`)

const Frame = ({ src }) => <div>
    
    <iframe 
        id={IFRAME_ID}
        name={IFRAME_ID}
        src={src} 
        title="Juego"
        className="frame "
        width={width}
        height={height}
    />
    <div id="for-vertical">
        <Logo />
        <h3>Ponga el telefono en horizontal</h3>
        <img src={rotar}></img>
    </div>
    
</div>

export default Frame;