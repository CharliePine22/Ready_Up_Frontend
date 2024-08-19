import { View, Text, Pressable, FlatList, DatePickerIOS } from 'react-native';
import styles from './dashboard.style';
import { useState, useEffect } from 'react';
import { Stack } from 'expo-router';
import ScreenHeaderBtn from '../common/header/ScreenHeaderBtn';
import GroupBox from '../common/groups/GroupBox';
import { icons, images } from '../../constants';
import GroupDetails from '../common/groups/GroupDetails';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AddGroupModal from '../common/modal/AddGroupModal';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import GroupSidebar from './GroupSidebar';

const Dashboard = ({ signInAuthentication }) => {
  const db = getFirestore(app);
  const [currentGroup, setCurrentGroup] = useState('');
  const [openAddGroup, setOpenAddGroup] = useState(false);
  const [allTopGames, setAllTopGames] = useState('');
  const [allGroups, setAllGroups] = useState([]);
  let groupTopGames = [];

  useEffect(() => {
    fetchUserGroups();
  }, []);

  const fetchUserGroups = async () => {
    const groupQuerySnapshot = await getDocs(collection(db, 'Groups'));
    groupQuerySnapshot.forEach((doc) => {
      setAllGroups((group) => [...group, doc.data()]);
    });
  };

  const grabTopGames = (groups) => {
    let groupTopGames = [];
    for (const group of groups) {
      groupTopGames.push(group.mostPlayedGame());
    }
    // setGroupsMostPlayed(groupTopGames);
  };

  // useEffect(() => {
  //   if (allGroups.length == 0) {
  //     setAllGroups(DUMMYDATA);
  //     return;
  //   }
  //   for (const group of allGroups) {
  //     groupTopGames.push(group.mostPlayedGame());
  //   }
  // }, [allGroups]);

  // const getTopGamesBanner = async () => {
  //   try {
  //     const response = await fetch("https://api.igdb.com/v4/games");
  //     const json = await response.json();
  //     return json.movies;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  console.log(allGroups);
  return (
    <View style={styles.dashWrapper}>
      {openAddGroup && (
        <AddGroupModal
          closeModal={() => setOpenAddGroup(false)}
          modalStatus={openAddGroup}
        />
      )}
      {/* {currentGroup && <GroupSidebar groups={allGroups} />} */}
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'white',
            shadowColor: 'red',
            shadowOpacity: 0.7,
            shadowRadius: 3,
            shadowOffset: {
              width: 0,
              height: 3,
            },
          },
          headerShadowVisible: true,
          headerShown: true,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={images.roxas} dimension='100%' />
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <Pressable
                onPress={() => setOpenAddGroup(true)}
                style={({ pressed }) => [
                  styles.addGroupBtn,
                  {
                    backgroundColor: pressed ? 'lightgrey' : 'white',
                  },
                ]}
              >
                <MaterialIcons name='group-add' size={20} color={'black'} />
              </Pressable>
            </View>
          ),
          headerTitle: 'Ready Up',
          headerTitleContainerStyle: { paddingHorizontal: 5 },
        }}
      />
      <View style={styles.mainContainer}>
        <View style={styles.groupListContainer}>
          {currentGroup && (
            <GroupDetails
              group={currentGroup}
              closeGroup={() => setCurrentGroup(undefined)}
            />
          )}
          <FlatList
            data={allGroups}
            extraData={openAddGroup}
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
