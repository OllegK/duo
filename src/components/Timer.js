import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

const Timer = (props) => {
  const [seconds, setSeconds] = useState(props.secondsCount);
  const secondsRef = useRef(seconds);
  secondsRef.current = seconds;

  const intervalRef = useRef();

  const { gameStatus, onHittingZero } = props;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (gameStatus !== 'active') {
        clearInterval(intervalRef.current);
      } else if (secondsRef.current > 1) {
        setSeconds(currentSeconds => currentSeconds - 1);
      } else {
        setSeconds(0);
        onHittingZero();
      }
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [gameStatus, onHittingZero]);

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
