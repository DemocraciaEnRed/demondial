import React, { useState } from 'react';

import Background from 'images/background.jpg';
import WithBackground from "components/withBackground";
import Countdown from "components/countdown";
import Frame from "components/frame"

export default function Game() {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <WithBackground background={Background} light>
      {
        isLoading ? 
        <Countdown setIsLoading={setIsLoading}/> : 
        <div className="full-height"><Frame src="/demondial/wickgame.html"/></div>
      }
    </WithBackground>
  );
};