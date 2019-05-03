import { useState, useEffect } from 'react';
import { utils } from '../utils/utils';

const useGameState = () => {
  const initialSeconds = Number(localStorage.getItem('seconds')) || 20;

  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [secondsCount, setSecondsCount] = useState(initialSeconds);

  useEffect(() => localStorage.setItem('seconds', secondsCount), [secondsCount]);

  const setSeconds = () => setSecondsLeft(0);

  const decSeconds = () => {
    setSecondsCount(currSeconds => currSeconds - 1);
  };

  const incSeconds = () => {
    setSecondsCount(currSeconds => currSeconds + 1);
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
