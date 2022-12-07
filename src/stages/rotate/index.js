import React from "react";

import WithBackground from "components/withBackground";
import Logo from "components/logo";
import Background from 'images/background.jpg';
import rotar from "images/rotame.png";

import "./index.css";

const Rotate = () => {

    return (
        <WithBackground background={Background} light>
            <div id="for-vertical">
                <Logo />
                <h3>Ponga el telefono en horizontal</h3>
                <img alt="Ícono de rotación" id="rotacion" src={rotar}></img>
            </div>
        </WithBackground>
    )
}

export default Rotate;