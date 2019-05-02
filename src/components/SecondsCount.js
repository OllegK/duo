import React, {useState} from 'react';
import PropTypes from 'prop-types';

const SecondsCount = (props) => {

  const [seconds, setSeconds] = useState(props.seconds);

  return (
    <div className="seconds">
      <button disabled={props.seconds <= 1} onClick={() => props.decSeconds()}>-</button>
      {props.seconds} Seconds
      <button onClick={() => props.incSeconds()}>+</button>
    </div>
  );
};

SecondsCount.propTypes = {
};

export default SecondsCount;
