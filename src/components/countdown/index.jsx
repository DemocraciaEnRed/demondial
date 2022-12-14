import React, { useState } from 'react';

import "./index.css";

const Countdown = ({ setIsLoading }) => {
  const [loadingNumber, setLoadingNumber] = useState(5);

  const onCountDown = () => {
    setLoadingNumber(loadingNumber-1)
    if (loadingNumber === 1)
      setIsLoading(false);
  };

  const numbers = {
    5: "FB2D11",
    4: "4BD6F7",
    3: "F7A334",
    2: "32F991",
    1: "FB2D11"
  };
  
  if (loadingNumber <= 0) return <p className="ready">Esto está demorando un poquito más de lo habitual...</p>
  return <div className='enFrame'>
    <p className="ready">Empezamos en...</p>
    <p
      key={loadingNumber}
      className="centered countdown-number animate__animated animate__fadeOut"
      onAnimationEnd={onCountDown}
      style={{ color: `#${numbers[loadingNumber]}` }}
    >
      {loadingNumber}
    </p>
  </div>;
}

export default Countdown;