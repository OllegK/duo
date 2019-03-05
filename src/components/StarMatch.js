import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Game from './Game';

const StarMatch = () => {
  document.title = 'DUO';
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default hot(StarMatch);
