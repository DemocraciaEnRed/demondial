import React from "react";

import "./index.css";
const IFRAME_ID = "wick-game"


let width=window.screen.width
let height=window.screen.height

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
</div>

export default Frame;