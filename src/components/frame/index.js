import React from "react";

import Logo from "../logo";

import "./index.css";

const IFRAME_ID = "wick-game"

const Frame = ({ src }) => <div>
    <Logo />
    <iframe 
        id={IFRAME_ID}
        name={IFRAME_ID}
        src={src} 
        title="Juego"
        className="frame"
        width={1300}
        height={800}
    />
</div>

export default Frame;