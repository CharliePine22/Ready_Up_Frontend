export const DUMMYDATA = [
  // Group 1
  {
    groupId: 1, // Group identifier.
    groupName: 'RJCT', // Name of group.
    members: ['Ryan', 'Jr', 'Cj', 'Tony'], // Current accepted members of group.
    // Gets amount of current members in group.
    groupCount: function () {
      return this.members.length;
    },
    // Selects a random game from the groups previous played list.
    chooseRandomGame: function () {
      let games = Object.keys(this.gamesPlayed);
      return games[(games.length * Math.random()) << 0];
    },
    mostPlayedGame: function () {
      let games = Object.entries(this.gamesPlayed);
      // Sort games by hours played and return highest value.
      return games.sort(([, a], [, b]) => b - a)[0][0];
    },
    // The list of games that the group has played,
    // 'Name of Game' : Hours/Times Played.
    gamesPlayed: {
      'Helldivers 2': 13,
      'Risk Of Rain 2': 24,
      Valheim: 27,
      'Back 4 Blood': 58,
      'Heroes Of The Storm': 375,
      'Payday 2': 26,
      Overwatch: 152,
      "Don't Starve Together": 17,
      'Halo Infinite': 83,
      'Super Smash Bros': 232,
      MultiVersus: 9,
    },
    sentInvites: ['megamannv10@aol.com', 'jessicachilek@gmail.com'], // Send invites that are currently pending.
    readyCount: 3, // How many of the players that have agreed to proposed game.
    gameChosen: 'Helldivers 2', // Current game being voted on.
    recentlyPlayed: 'Helldivers 2', // The last game that the group played.
    lastPlayed: 'May 27th, 2024', // The last date the group played.
    proposedDate: '', // The suggested or voted date for the upcoming gane.
  },

  // Group 2
  {
    groupId: 2,
    groupName: 'JCJ',
    members: ['Jess', 'Cj'],
    groupCount: function () {
      return this.members.length;
    },
    chooseRandomGame: function () {
      let games = Object.keys(this.gamesPlayed);
      return games[(games.length * Math.random()) << 0];
    },
    mostPlayedGame: function () {
      let games = Object.entries(this.gamesPlayed);
      // Sort games by hours played and return highest value
      return games.sort(([, a], [, b]) => b - a)[0][0];
    },
    gamesPlayed: {
      'Rocket League': 113,
      'Animal Crossing': 27,
      'It Takes Two': 2,
      'Overcooked 2': 13,
      'Mario Party': 67,
      'Super Smash Bros': 3,
    },
    readyCount: 1,
    gameChosen: null,
    recentlyPlayed: 'Rocket League',
    lastPlayed: 'June 5th, 2024',
    sentInvites: ['megamannv10@aol.com', 'jessicachilek@gmail.com'],
  },

  // Group 3
  {
    groupId: 3,
    groupName: 'Jr & Cj',
    members: ['Jr', 'Cj'],
    groupCount: function () {
      return this.members.length;
    },
    chooseRandomGame: function () {
      let games = Object.keys(this.gamesPlayed);
      return games[(games.length * Math.random()) << 0];
    },
    mostPlayedGame: function () {
      let games = Object.entries(this.gamesPlayed);
      // Sort games by hours played and return highest value
      return games.sort(([, a], [, b]) => b - a)[0][0];
    },
    gamesPlayed: {
      'Helldivers 2': 13,
      'Fallout 76': 1,
      'Elden Ring': 1,
      'Jump Force': 56,
      'It Takes Two': 13,
      'Warhammer: Vermentide 2': 5,
      'Final Fantasy XIV': 49,
      'Diablo 2': 17,
      'Red Dead Redemption 2': 11,
      'Grand Theft Auto 5': 1,
    },
    readyCount: 0,
    gameChosen: 'Elden Ring',
    recentlyPlayed: 'Fallout 76',
    playSession: 'Mon May 27 2024 15:30',
    lastPlayed: 'May 31st, 2024',
    sentInvites: ['megamannv10@aol.com', 'jessicachilek@gmail.com'],
  },

  // Group 4
  {
    groupId: 4,
    groupName: 'Dream Team',
    members: ['Jr', 'Jess', 'Cj', 'Jess', 'Ryan', 'Delaney', 'Tony', 'Jesse'],
    groupCount: function () {
      return this.members.length;
    },
    chooseRandomGame: function () {
      let games = Object.keys(this.gamesPlayed);
      return games[(games.length * Math.random()) << 0];
    },
    mostPlayedGame: function () {
      let games = Object.entries(this.gamesPlayed);
      // Sort games by hours played and return highest value
      return games.sort(([, a], [, b]) => b - a)[0][0];
    },
    gamesPlayed: {
      'Helldivers 2': 13,
      'Fallout 76': 1,
      'Elden Ring': 1,
      'Jump Force': 56,
      'It Takes Two': 13,
      'Warhammer: Vermentide 2': 5,
      'Final Fantasy XIV': 49,
      'Diablo 2': 17,
      'Red Dead Redemption 2': 11,
      'Grand Theft Auto 5': 1,
      'Rocket League': 10,
      'Sims 4': 20,
      'The Finals': 10,
      'Diablo 3': 50,
      Minecraft: 60,
      'Mario Strikers': 60,
      'Super Smash Bros': 100,
      'Overcooked 2': 50,
      'Chained Together': 5,
      'Mario Party': 18,
      'Payday 2': 20,
      Palworld: 2,
      Valheim: 22,
    },
    readyCount: 0,
    gameChosen: 'Elden Ring',
    recentlyPlayed: 'Fallout 76',
    playSession: 'Mon May 27 2024 15:30',
    lastPlayed: 'May 31st, 2024',
    sentInvites: ['megamannv10@aol.com', 'jessicachilek@gmail.com'],
  },
  // Group 4
  {
    groupId: 4,
    groupName: 'Dream Team',
    members: ['Jr', 'Cj', 'Jess', 'Ryan', 'Tony', 'Jesse'],
    groupCount: function () {
      return this.members.length;
    },
    chooseRandomGame: function () {
      let games = Object.keys(this.gamesPlayed);
      return games[(games.length * Math.random()) << 0];
    },
    mostPlayedGame: function () {
      let games = Object.entries(this.gamesPlayed);
      // Sort games by hours played and return highest value
      return games.sort(([, a], [, b]) => b - a)[0][0];
    },
    gamesPlayed: {
      'Helldivers 2': 13,
      'Fallout 76': 1,
      'Elden Ring': 1,
      'Jump Force': 56,
      'It Takes Two': 13,
      'Warhammer: Vermentide 2': 5,
      'Final Fantasy XIV': 49,
      'Diablo 2': 17,
      'Red Dead Redemption 2': 11,
      'Grand Theft Auto 5': 1,
      'Rocket League': 10,
      'Sims 4': 20,
      'The Finals': 10,
      'Diablo 3': 50,
      Minecraft: 60,
      'Mario Strikers': 60,
      'Super Smash Bros': 100,
      'Overcooked 2': 50,
      'Chained Together': 5,
      'Mario Party': 18,
      'Payday 2': 20,
      Palworld: 2,
      Valheim: 22,
    },
    readyCount: 0,
    gameChosen: 'Elden Ring',
    recentlyPlayed: 'Fallout 76',
    playSession: 'Mon May 27 2024 15:30',
    lastPlayed: 'May 31st, 2024',
    sentInvites: ['megamannv10@aol.com', 'jessicachilek@gmail.com'],
  },
  // Group 4
  {
    groupId: 4,
    groupName: 'Dream Team',
    members: ['Jr', 'Cj', 'Jess', 'Ryan', 'Tony', 'Jesse'],
    groupCount: function () {
      return this.members.length;
    },
    chooseRandomGame: function () {
      let games = Object.keys(this.gamesPlayed);
      return games[(games.length * Math.random()) << 0];
    },
    mostPlayedGame: function () {
      let games = Object.entries(this.gamesPlayed);
      // Sort games by hours played and return highest value
      return games.sort(([, a], [, b]) => b - a)[0][0];
    },
    gamesPlayed: {
      'Helldivers 2': 13,
      'Fallout 76': 1,
      'Elden Ring': 1,
      'Jump Force': 56,
      'It Takes Two': 13,
      'Warhammer: Vermentide 2': 5,
      'Final Fantasy XIV': 49,
      'Diablo 2': 17,
      'Red Dead Redemption 2': 11,
      'Grand Theft Auto 5': 1,
      'Rocket League': 10,
      'Sims 4': 20,
      'The Finals': 10,
      'Diablo 3': 50,
      Minecraft: 60,
      'Mario Strikers': 60,
      'Super Smash Bros': 100,
      'Overcooked 2': 50,
      'Chained Together': 5,
      'Mario Party': 18,
      'Payday 2': 20,
      Palworld: 2,
      Valheim: 22,
    },
    readyCount: 0,
    gameChosen: 'Elden Ring',
    recentlyPlayed: 'Fallout 76',
    playSession: 'Mon May 27 2024 15:30',
    lastPlayed: 'May 31st, 2024',
    sentInvites: ['megamannv10@aol.com', 'jessicachilek@gmail.com'],
  },
];
