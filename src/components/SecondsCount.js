import React from 'react';
import PropTypes from 'prop-types';
import './SecondsCount.css';

const SecondsCount = props => (
  <>
    <div className="seconds">
      <button type="button" disabled={props.seconds <= 1} onClick={() => props.decSeconds()}>-</button>
      <span className="secondsSpan">
        {props.seconds}
        &nbsp;
        Seconds
      </span>
      <button type="button" onClick={() => props.incSeconds()}>+</button>
    </div>
    <div className="seconds">
      {props.seconds <= 5 && <span className="secondsSpan">You are kidding me!</span>}
    </div>
  </>
);

SecondsCount.propTypes = {
  seconds: PropTypes.number.isRequired,
  incSeconds: PropTypes.func.isRequired,
  decSeconds: PropTypes.func.isRequired,
};

export default SecondsCount;
