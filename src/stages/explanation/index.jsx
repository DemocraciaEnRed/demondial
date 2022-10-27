import React from "react";
import { Button } from "react-bootstrap";

import Logo from "components/logo";
import WithBackground from "components/withBackground";
import Background from 'images/background.png';

import "./index.css";

const Explanation = ({ follow }) => <WithBackground background={Background}>
  <div className="animate__animated animate__fadeIn">
    <Logo />
    <div className="topics col-10">
      <p className="topics-description">Decidí el destino de tu país respondiendo preguntas de los demás</p>
      <Button onClick={follow} className="col-md-3 col-sm-4 col-10 play" variant="outline-light">JUGAR</Button>
      <p className="game-owner">Juego realizado por Democracia en Red</p>
    </div>
  </div>
</WithBackground>

export default Explanation;