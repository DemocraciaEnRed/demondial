import React from "react";
import { Button } from "react-bootstrap";

import Logo from "components/logo";
import WithBackground from "components/withBackground";
import Background from 'images/background.jpg';

import "./index.css";

const Explanation = ({ follow }) => {

  const frases = [
    'Respondé todas las preguntas de la defensa y levantá la copa antes que nadie',
    'La copa del mundo está a unas pocas preguntas de distancia',
    'La selección te necesita para llegar a la final',
    'El juego para lxs que queremos levantar la copa antes que nadie',
    'El juego donde no tenés que entrenar para ganar la copa del mundo',
  ]

  return (
    <WithBackground background={Background} > 
      <div className="animate__animated animate__fadeIn">
        <Logo />
        <div className="topics col-10">
          <p className="topics-description">{frases[Math.floor(Math.random()*frases.length)]}</p>
          <Button onClick={follow } className="col-md-3 col-sm-4 col-10 play" variant="outline-light">JUGAR</Button>
          <p className="game-owner">Juego realizado por Democracia en Red</p>
        </div>
      </div>
    </WithBackground>
  )
}

export default Explanation;