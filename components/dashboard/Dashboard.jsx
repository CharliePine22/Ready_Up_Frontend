import { View, Text, Pressable, FlatList } from 'react-native';
import styles from './dashboard.style';
import { useState, useEffect, useMemo } from 'react';
import { Stack } from 'expo-router';
import ScreenHeaderBtn from '../common/header/ScreenHeaderBtn';
import GroupBox from '../common/groups/GroupBox';
import { icons, images } from '../../constants';
import GroupDetails from '../common/groups/GroupDetails';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AddGroupModal from '../common/modal/AddGroupModal';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import useAuth from '../../hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({ removeActive }) => {
  const db = getFirestore(app);
  const [currentGroup, setCurrentGroup] = useState('');
  const [openAddGroup, setOpenAddGroup] = useState(false);
  const [allGroups, setAllGroups] = useState([]);
  const { signOut, currentUser, updateCurrentUser } = useAuth();

  useEffect(() => {
    const grabUserData = async () => {
      if (!currentUser) {
        const user = await AsyncStorage.getItem('user');
        updateCurrentUser(JSON.parse(user));
      } else fetchUserGroups();
    };
    console.log('FIRST RENDER USER?: ', currentUser);
    grabUserData();
  }, [currentUser, null]);
  // console.log(currentUser);

  const fetchUserGroups = async () => {
    let userGroupIds = [];
    // Grab ids of groups that user is a part of
    currentUser.groups.map((group) => {
      userGroupIds.push(group._key.path.segments[6]);
    });

    // Grab all groups from DB
    const groupQuerySnapshot = await getDocs(collection(db, 'Groups'));
    // Return those that the user is part of
    // groupQuerySnapshot.forEach((doc) => {
    //   if (userGroupIds.includes(doc.id))
    //     setAllGroups((group) => [...group, doc.data()]);
    // });
    groupQuerySnapshot.forEach((doc) => {
      setAllGroups((group) => [...group, doc.data()]);
    });

    console.log('DONE');
  };
  // const fetchUserGroups = useMemo(
  //   () => async () => {
  //     let userGroupIds = [];
  //     // Grab ids of groups that user is a part of
  //     currentUser.groups.map((group) => {
  //       userGroupIds.push(group._key.path.segments[6]);
  //     });

  //     // Grab all groups from DB
  //     const groupQuerySnapshot = await getDocs(collection(db, 'Groups'));
  //     // Return those that the user is part of
  //     // groupQuerySnapshot.forEach((doc) => {
  //     //   if (userGroupIds.includes(doc.id))
  //     //     setAllGroups((group) => [...group, doc.data()]);
  //     // });
  //     groupQuerySnapshot.forEach((doc) => {
  //       setAllGroups((group) => [...group, doc.data()]);
  //     });

  //     console.log('DONE');
  //   },
  //   [currentUser]
  // );

  return (
    <View style={styles.dashWrapper}>
      {/* Add Group Modal */}
      {openAddGroup && (
        <AddGroupModal
          closeModal={() => setOpenAddGroup(false)}
          modalStatus={openAddGroup}
        />
      )}
      {/* Group Sidebar TODO: uncomment when ready */}
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
          headerShown: !currentGroup,
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

      {/* Group Details */}
      {currentGroup !== '' && (
        <GroupDetails
          group={currentGroup}
          closeGroup={() => setCurrentGroup('')}
        />
      )}

      {/* Main Container */}
      <View style={styles.mainContainer}>
        {/* Group List Container */}
        <View style={styles.groupListContainer}>
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
      {/* Logout Button */}
      <Pressable
        onPress={() => {
          signOut();
          removeActive();
        }}
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}>LOGOUT</Text>
      </Pressable>
    </View>
  );
};

export default Dashboard;
