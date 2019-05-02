import React from 'react';
import PropTypes from 'prop-types';
import { utils } from '../utils/utils';
import PlayNumber from './PlayNumber';
import StarsDisplay from './StarsDisplay';
import PlayAgain from './PlayAgain';
import Timer from './Timer';
import SecondsCount from './SecondsCount';
import './Game.css';
import useGameState from '../state/gameState';

const Game = (props) => {
  const {
    stars, availableNums, candidateNums, secondsLeft, setGameState, setSeconds, secondsCount, decSeconds, incSeconds
  } = useGameState();

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus = availableNums.length === 0
    ? 'won'
    : secondsLeft === 0 ? 'lost' : 'active';

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }

    const newCandidateNums = currentStatus === 'available'
      ? candidateNums.concat(number)
      : candidateNums.filter(cn => cn !== number);

    setGameState(newCandidateNums);
  };

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== 'active'
            ? (<><PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
              <SecondsCount seconds={secondsCount} incSeconds={incSeconds} decSeconds={decSeconds} />
            </>)
            : (<StarsDisplay count={stars} />)}
        </div>
        <div className="right">
          {utils.range(1, 9).map(
            number => (
              <PlayNumber
                key={number}
                status={numberStatus(number)}
                number={number}
                onClick={onNumberClick}
              />
            ),
          )}
        </div>
      </div>
      <Timer secondsCount={secondsLeft} onHittingZero={setSeconds} gameStatus={gameStatus} />
    </div>
  );
};

Game.propTypes = {
  startNewGame: PropTypes.func.isRequired,
};

export default Game;
