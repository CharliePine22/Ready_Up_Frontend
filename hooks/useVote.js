import { useState, useEffect } from 'react';

const useVote = () => {
  const [votedGames, setVotedGames] = useState([]);
  const [currentGameInfo, setCurrentGameInfo] = useState(null);

  const castVote = (game) => {
    game.votes++;
    setVotedGames((votedGames) => [...votedGames]);
    setCurrentGameInfo(game);
  };

  const changeCurrentGameInfo = (game) => {
    if (votedGames.find((votedGame) => votedGame.name === game.name)) {
      setCurrentGameInfo(game);
    } else
      addNewGame({
        name: game.name,
        date: game.date,
        cover: game.cover.image_id
          ? `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg`
          : game.cover,
        votes: 1,
        membersVoted: ['Cj'],
      });
  };

  const addNewGame = (game) => {
    if (votedGames.find((votedGame) => votedGame.name === game.name)) {
      console.log(game);
      castVote(game);
    } else {
      setVotedGames((votedGames) => [...votedGames, game]);
      setCurrentGameInfo(game);
    }
  };

  const adjustTime = () => {};

  const finalizeVote = () => {};

  return {
    castVote,
    addNewGame,
    adjustTime,
    finalizeVote,
    changeCurrentGameInfo,
    votedGames,
    currentGameInfo,
  };
};

export default useVote;
