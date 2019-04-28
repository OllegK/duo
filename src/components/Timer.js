import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

let inter;

const Timer = (props) => {

  if (props.gameStatus !== 'active') {
    clearInterval(inter);
  }

  const [seconds, setSeconds] = useState(props.seconds);

  useEffect(() => {
    inter = setInterval(() => {
      if (seconds > 0) {
        setSeconds(currentSeconds => currentSeconds - 1);
      } else {
        props.onHittingZero();
        clearInterval(inter);
      }
    }, 1000);
  }, []);

  return (
    <div className="timer">
      Time Remaining:
      {' '}
      {seconds}
    </div>
  );
};

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  gameStatus: PropTypes.string.isRequired,
  onHittingZero: PropTypes.func.isRequired,
};

export default Timer;
