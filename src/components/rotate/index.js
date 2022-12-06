import React from "react";

import Logo from "../logo";
import rotar from "images/rotame.png";

import "./index.css";

const Rotate = () => <div id="for-vertical">
        <Logo />
        <h3>Ponga el telefono en horizontal</h3>
        <img alt="Ícono de rotación" src={rotar}></img>
    </div>

export default Rotate;