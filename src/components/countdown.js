import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import nit from '../audio/count-s.wav'

import "./countdown.css";

const Countdown = (props) => {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(true);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(10);
    setIsActive(false);
  }

  const Nit = new Audio(nit)

  useEffect(() => {
    let interval = null;
    if (isActive && seconds != 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
        Nit.play()
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);

  }, [isActive, seconds]);

  return (
    <div className={`countdown-container glass ${props.rootClassName} `}>
      <h1 className="countdown-text">{seconds}</h1>
    </div>
  );
};

Countdown.defaultProps = {
  value: "30",
  rootClassName: "",
};

Countdown.propTypes = {
  value: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default Countdown;
