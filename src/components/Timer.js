import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';
import lifecycle from 'react-pure-lifecycle';

let seconds;
let setSeconds;
let inter;

const methods = {
  componentDidMount(props) {
    inter = setInterval(() => {
      if (seconds > 0) {
        setSeconds(currentSeconds => currentSeconds - 1);
      } else {
        props.onHittingZero();
        clearInterval(inter);
      }
    }, 1000);
  }
};

const Timer = props => {

  if (props.gameStatus !== 'active') {
    clearInterval(inter);
  }

  ([seconds, setSeconds] = useState(props.seconds));

  return (
    <div className="timer">
      Time Remaining:
      {' '}
      {seconds}
    </div>
  )
};

Timer.propTypes = {

};

export default lifecycle(methods)(Timer);
