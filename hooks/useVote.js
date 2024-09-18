import { useState, useEffect } from "react";

const useVote = () => {
  const [votedGames, setVotedGames] = useState([]);

  const castVote = (game) => {
    setVotedGames((votedGames) => [
      ...votedGames,
      {
        name: game.name,
        votes: (votes += 1),
      },
    ]);
  };

  const addNewGame = () => {};

  const adjustTime = () => {};

  const finalizeVote = () => {};

  return { castVote, addNewGame, adjustTime, finalizeVote, votedGames };
};

export default useVote;
