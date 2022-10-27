import React from "react";

import WithBackground from "components/withBackground";
import Logo from "components/logo";
import Background from 'images/background.jpg';

import "./index.css";

const Landing = ({ follow }) => <div className="animate__animated animate__fadeOut animate__delay-3s" onAnimationEnd={follow}>
  <WithBackground background={Background}>
  <div className="centered animate__animated animate__fadeIn animate__delay-1s">
      <Logo />
      <p className="game-name">El verdadero mundial</p>
    </div>
  </WithBackground>
</div>

export default Landing;