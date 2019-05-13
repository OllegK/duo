import React from 'react';
import PropTypes from 'prop-types';
import './PlayAgain.css';

const PlayAgain = ({ gameStatus, username, onClick, showModal }) => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {gameStatus === 'lost'
        ? 'Game Over' : gameStatus === 'firstRun' ? username ?
        (
          <>
            Hi<> </>
            <a style={{ borderBottom: '1px dotted', cursor: 'pointer' }} onClick={showModal}>
              {username}
              !
            </a>
          </>
        ) : 'Hi!' : 'Nice'}
    </div>
    <button type="button" onClick={onClick}>{gameStatus === 'firstRun' ? 'Play Now' : 'Play Again'}</button>
  </div>
);

PlayAgain.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  username: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

PlayAgain.defaultProps = {
  username: '',
};

export default PlayAgain;
