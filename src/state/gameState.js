import { useState } from 'react';
import { utils } from '../utils/utils';

const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(Number(localStorage.getItem('S'))||20);
  const [secondsCount, setSecondsCount] = useState(secondsLeft);

  const setSeconds = () => {
    setSecondsLeft(0);
  };

  const decSeconds = () => {
    setSecondsCount(currSeconds => {
      localStorage.setItem('S', currSeconds - 1);
      return currSeconds - 1;
    });
  };

  const incSeconds = () => {
    console.log('Seconds left', secondsCount);
    setSecondsCount(currSeconds => {
      localStorage.setItem('S', currSeconds + 1);
      return currSeconds + 1;

    });
  };

  const setGameState = (newCandidateNums) => {
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else { // right pick
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n),
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return {
    stars, availableNums, candidateNums, secondsLeft, setGameState, setSeconds, secondsCount, decSeconds, incSeconds,
  };
};

export default useGameState;
