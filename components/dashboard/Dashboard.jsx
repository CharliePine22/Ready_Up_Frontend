import { View, Text, Pressable, FlatList, DatePickerIOS } from "react-native";
import styles from "./dashboard.style";
import { useState, useEffect } from "react";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../common/header/ScreenHeaderBtn";
import GroupBox from "../common/groups/GroupBox";
import { icons, images } from "../../constants";
import GroupDetails from "../common/groups/GroupDetails";

const DUMMYDATA = [
  // Group 1
  {
    groupId: 1,
    groupName: "RJCT",
    members: ["Ryan", "Jr", "Cj", "Tony"],
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
      "Helldivers 2": 13,
      "Risk Of Rain 2": 24,
      Valheim: 27,
      "Back 4 Blood": 58,
      "Heroes Of The Storm": 375,
      "Payday 2": 26,
      Overwatch: 152,
      "Don't Starve Together": 17,
      "Halo Infinite": 83,
      "Super Smash Bros": 232,
      MultiVersus: 9,
    },
    readyCount: 3,
    gameChosen: "Helldivers 2",
    recentlyPlayed: "Helldivers 2",
    lastPlayed: "May 27th, 2024",
    proposedDate: "",
  },

  // Group 2
  {
    groupId: 2,
    groupName: "JCJ",
    members: ["Jess", "Cj"],
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
      "Rocket League": 113,
      "Animal Crossing": 27,
      "It Takes Two": 2,
      "Overcooked 2": 13,
      "Mario Party": 67,
      "Super Smash Bros": 3,
    },
    readyCount: 1,
    gameChosen: null,
    recentlyPlayed: "Rocket League",
    lastPlayed: "June 5th, 2024",
  },

  // Group 3
  {
    groupId: 3,
    groupName: "Jr & Cj",
    members: ["Jr", "Cj"],
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
      "Helldivers 2": 13,
      "Fallout 76": 1,
      "Elden Ring": 1,
      "Jump Force": 56,
      "It Takes Two": 13,
      "Warhammer: Vermentide 2": 5,
      "Final Fantasy XIV": 49,
      "Diablo 2": 17,
      "Red Dead Redemption 2": 11,
      "Grand Theft Auto 5": 1,
    },
    readyCount: 0,
    gameChosen: "Elden Ring",
    recentlyPlayed: "Fallout 76",
    playSession: "Mon May 27 2024 15:30",
    lastPlayed: "May 31st, 2024",
  },

  // Group 4
  {
    groupId: 4,
    groupName: "Dream Team",
    members: ["Jr", "Jess", "Cj", "Jess", "Ryan", "Delaney", "Tony", "Jesse"],
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
      "Helldivers 2": 13,
      "Fallout 76": 1,
      "Elden Ring": 1,
      "Jump Force": 56,
      "It Takes Two": 13,
      "Warhammer: Vermentide 2": 5,
      "Final Fantasy XIV": 49,
      "Diablo 2": 17,
      "Red Dead Redemption 2": 11,
      "Grand Theft Auto 5": 1,
      "Rocket League": 10,
      "Sims 4": 20,
      "The Finals": 10,
      "Diablo 3": 50,
      Minecraft: 60,
      "Mario Strikers": 60,
      "Super Smash Bros": 100,
      "Overcooked 2": 50,
      "Chained Together": 5,
      "Mario Party": 18,
      "Payday 2": 20,
      Palworld: 2,
      Valheim: 22,
    },
    readyCount: 0,
    gameChosen: "Elden Ring",
    recentlyPlayed: "Fallout 76",
    playSession: "Mon May 27 2024 15:30",
    lastPlayed: "May 31st, 2024",
  },
  // Group 4
  {
    groupId: 4,
    groupName: "Dream Team",
    members: ["Jr", "Cj", "Jess", "Ryan", "Tony", "Jesse"],
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
      "Helldivers 2": 13,
      "Fallout 76": 1,
      "Elden Ring": 1,
      "Jump Force": 56,
      "It Takes Two": 13,
      "Warhammer: Vermentide 2": 5,
      "Final Fantasy XIV": 49,
      "Diablo 2": 17,
      "Red Dead Redemption 2": 11,
      "Grand Theft Auto 5": 1,
      "Rocket League": 10,
      "Sims 4": 20,
      "The Finals": 10,
      "Diablo 3": 50,
      Minecraft: 60,
      "Mario Strikers": 60,
      "Super Smash Bros": 100,
      "Overcooked 2": 50,
      "Chained Together": 5,
      "Mario Party": 18,
      "Payday 2": 20,
      Palworld: 2,
      Valheim: 22,
    },
    readyCount: 0,
    gameChosen: "Elden Ring",
    recentlyPlayed: "Fallout 76",
    playSession: "Mon May 27 2024 15:30",
    lastPlayed: "May 31st, 2024",
  },
  // Group 4
  {
    groupId: 4,
    groupName: "Dream Team",
    members: ["Jr", "Cj", "Jess", "Ryan", "Tony", "Jesse"],
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
      "Helldivers 2": 13,
      "Fallout 76": 1,
      "Elden Ring": 1,
      "Jump Force": 56,
      "It Takes Two": 13,
      "Warhammer: Vermentide 2": 5,
      "Final Fantasy XIV": 49,
      "Diablo 2": 17,
      "Red Dead Redemption 2": 11,
      "Grand Theft Auto 5": 1,
      "Rocket League": 10,
      "Sims 4": 20,
      "The Finals": 10,
      "Diablo 3": 50,
      Minecraft: 60,
      "Mario Strikers": 60,
      "Super Smash Bros": 100,
      "Overcooked 2": 50,
      "Chained Together": 5,
      "Mario Party": 18,
      "Payday 2": 20,
      Palworld: 2,
      Valheim: 22,
    },
    readyCount: 0,
    gameChosen: "Elden Ring",
    recentlyPlayed: "Fallout 76",
    playSession: "Mon May 27 2024 15:30",
    lastPlayed: "May 31st, 2024",
  },
];

const Dashboard = ({ signInAuthentication }) => {
  const [currentGroup, setCurrentGroup] = useState("");
  const [allTopGames, setAllTopGames] = useState("");
  const [allGroups, setAllGroups] = useState(DUMMYDATA);
  let groupTopGames = [];

  const grabTopGames = (groups) => {
    let groupTopGames = [];
    for (const group of groups) {
      groupTopGames.push(group.mostPlayedGame());
    }
    // setGroupsMostPlayed(groupTopGames);
  };

  useEffect(() => {
    if (allGroups.length == 0) {
      setAllGroups(DUMMYDATA);
      return;
    }
    for (const group of allGroups) {
      groupTopGames.push(group.mostPlayedGame());
    }
  }, [allGroups]);

  // const getTopGamesBanner = async () => {
  //   try {
  //     const response = await fetch("https://api.igdb.com/v4/games");
  //     const json = await response.json();
  //     return json.movies;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <View style={styles.dashWrapper}>
      {currentGroup && (
        <GroupDetails
          group={currentGroup}
          closeGroup={() => setCurrentGroup(undefined)}
        />
      )}
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "white",
            shadowColor: "black",
            shadowOpacity: 0.7,
            shadowRadius: 3,
            shadowOffset: {
              width: 0,
              height: 2.5,
            },
          },
          headerShadowVisible: true,
          headerShown: true,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <>
              <ScreenHeaderBtn iconUrl={images.roxas} dimension="100%" />
              <ScreenHeaderBtn iconUrl={images.roxas} dimension="100%" />
            </>
          ),
          headerTitle: "Ready Up",
          headerTitleContainerStyle: { paddingHorizontal: 5 },
        }}
      />
      <View style={styles.mainContainer}>
        <View style={styles.groupListContainer}>
          <FlatList
            data={allGroups}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item: group }) => (
              <GroupBox
                group={group}
                openGroup={() => setCurrentGroup(group)}
              />
            )}
          />
        </View>
      </View>
      <Pressable onPress={signInAuthentication} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGOUT</Text>
      </Pressable>
    </View>
  );
};

export default Dashboard;
