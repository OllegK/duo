import React from 'react';
import PropTypes from 'prop-types';
import './PlayAgain.css';

const PlayAgain = props => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {props.gameStatus === 'lost' ? 'Game Over' : props.gameStatus === 'firstRun' ? 'Hi' : 'Nice'}
    </div>
    <button type="button" onClick={props.onClick}>{props.gameStatus === 'firstRun' ? 'Play Now' : 'Play Again'}</button>
  </div>
);

PlayAgain.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default PlayAgain;
