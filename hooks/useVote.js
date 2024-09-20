import { useState, useEffect } from 'react';

const useVote = () => {
  const [votedGames, setVotedGames] = useState([]);

  const castVote = (game) => {
    const foundGame = votedGames.find(
      (votedGame) => votedGame.name === game.name
    );
    if (foundGame) {
      foundGame.votes++;
      setVotedGames([...votedGames]);
    }
  };

  const addNewGame = (game) => {
    if (votedGames.find((votedGame) => votedGame.name === game.name))
      castVote(game);
    else setVotedGames((votedGames) => [...votedGames, game]);
  };

  const adjustTime = () => {};

  const finalizeVote = () => {};

  return { castVote, addNewGame, adjustTime, finalizeVote, votedGames };
};

export default useVote;
