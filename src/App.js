import React, { useState } from 'react';

import Landing from "./stages/landing";
import Explanation from "./stages/explanation";
import Game from "./stages/game";
import Rotate from "components/rotate";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import "./App.css";

const App = () => {
  const [currentStep, setCurrentStep] = useState("landing");

  const renderStep = (step) => {
    
    switch (step) {
      case 'landing':
        return <Landing follow={() => setCurrentStep("explanation")}/>
      case 'explanation':
        return <Explanation follow={() => setCurrentStep("game")}/>
      case 'game':
        return <Game />
      default:
        return <Landing follow={() => setCurrentStep("explanation")}/>
    }
  }
  if (window.matchMedia('(orientation: portrait)').matches) return <Rotate />

  return <div className="App">{renderStep(currentStep)}</div>;
}

export default App;

