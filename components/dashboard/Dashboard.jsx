import { View, Text, Pressable, FlatList } from 'react-native';
import styles from './dashboard.style';
import { Stack } from 'expo-router';
import ScreenHeaderBtn from '../common/header/ScreenHeaderBtn';
import { icons, images } from '../../constants';

const Dashboard = ({ signInAuthentication }) => {
  const DUMMYDATA = [
    {
      groupName: 'RJCT',
      members: ['Ryan', 'Jr', 'Cj', 'Tony'],
      gameChosen: null,
      lastPlayed: 'Helldivers 2',
    },
    {
      groupName: 'Jess',
      members: ['Jess', 'Cj'],
      gameChosen: null,
      lastPlayed: 'Rocket League',
    },
    {
      groupName: 'Jr',
      members: ['Jr', 'Cj'],
      gameChosen: 'Elden Ring',
      lastPlayed: 'Fallout 76',
      playSession: 'Mon May 27 2024 15:30',
    },
  ];

  console.log(DUMMYDATA);
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
            renderItem={({ item: group }) => <Text>{group.groupName}</Text>}
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
