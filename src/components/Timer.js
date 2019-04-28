import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

const Timer = (props) => {
  const [seconds, setSeconds] = useState(props.secondsCount);
  const intervalRef = useRef();
  const secondsRef = useRef(seconds);
  secondsRef.current = seconds;

  if (props.gameStatus !== 'active') {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (secondsRef.current > 0) {
        setSeconds(currentSeconds => currentSeconds - 1);
      } else {
        props.onHittingZero();
        clearInterval(intervalRef.current);
      }
    }, 1000);
    return () => clearInterval(intervalRef.current);
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
  secondsCount: PropTypes.number.isRequired,
  gameStatus: PropTypes.string.isRequired,
  onHittingZero: PropTypes.func.isRequired,
};

export default Timer;
