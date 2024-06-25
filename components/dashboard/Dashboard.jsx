import { View, Text, Pressable, FlatList, DatePickerIOS } from 'react-native';
import styles from './dashboard.style';
import { Stack } from 'expo-router';
import ScreenHeaderBtn from '../common/header/ScreenHeaderBtn';
import GroupBox from '../common/groups/GroupBox';
import { icons, images } from '../../constants';

const Dashboard = ({ signInAuthentication }) => {
  const DUMMYDATA = [
    // Group 1
    {
      groupName: 'RJCT',
      members: ['Ryan', 'Jr', 'Cj', 'Tony'],
      groupCount: function () {
        return this.members.length;
      },
      chooseRandomGame: function () {
        let games = Object.keys(this.gamesPlayed);
        return games[(games.length * Math.random()) << 0];
      },
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
        MultiVersus: 9,
        'Super Smash Bros': 232,
      },
      readyCount: 3,
      gameChosen: 'Helldivers 2',
      recentlyPlayed: 'Helldivers 2',
      lastPlayed: 'May 27th, 2024',
      proposedDate: '',
    },
    // Group 2
    {
      groupName: 'JCJ',
      members: ['Jess', 'Cj'],
      groupCount: function () {
        return this.members.length;
      },
      chooseRandomGame: function () {
        let games = Object.keys(this.gamesPlayed);
        return games[(games.length * Math.random()) << 0];
      },
      gamesPlayed: {
        'Rocket League': 113,
        'Animal Crossing': 27,
        'It Takes Two': 2,
        'OverCooked 2': 13,
        'Mario Party': 67,
      },
      readyCount: 1,
      gameChosen: null,
      recentlyPlayed: 'Rocket League',
      lastPlayed: 'June 5th, 2024',
    },
    // Group 3
    {
      groupName: 'Jr & Cj',
      members: ['Jr', 'Cj'],
      groupCount: function () {
        return this.members.length;
      },
      chooseRandomGame: function () {
        let games = Object.keys(this.gamesPlayed);
        return games[(games.length * Math.random()) << 0];
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
    },
  ];

  return (
    <View style={styles.dashWrapper}>
      <Text>Dashboard</Text>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'white',
            shadowColor: 'black',
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
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.roxas} dimension='100%' />
          ),
          headerTitle: 'Ready Up',
          headerTitleContainerStyle: { paddingHorizontal: 5 },
        }}
      />
      <View style={styles.mainContainer}>
        <Text>MAIN DASHBOARD VIEW</Text>
        <View style={styles.groupListContainer}>
          <FlatList
            data={DUMMYDATA}
            renderItem={({ item: group }) => <GroupBox group={group} />}
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
