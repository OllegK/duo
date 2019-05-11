import React from 'react';
import PropTypes from 'prop-types';
import './PlayAgain.css';

const PlayAgain = ({ gameStatus, username, onClick }) => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {gameStatus === 'lost' ? 'Game Over' : gameStatus === 'firstRun' ? `Hi' + ${(username ? ' ' + username : '')}` : 'Nice'}
    </div>
    <button type="button" onClick={onClick}>{gameStatus === 'firstRun' ? 'Play Now' : 'Play Again'}</button>
  </div>
);

PlayAgain.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  username: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

PlayAgain.defaultProps = {
  username: '',
};

export default PlayAgain;
