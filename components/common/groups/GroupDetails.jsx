import {
  View,
  Text,
  Pressable,
  FlatList,
  ScrollView,
  TextInput,
  ImageBackground,
  Animated,
} from 'react-native';
import { useState, useEffect, useRef } from 'react';
import styles from './groupDetails.style.js';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import GamePickerModal from '../modal/GamePickerModal.jsx';
import EditGroupModal from '../modal/EditGroupModal.jsx';
import useVote from '../../../hooks/useVote.js';
import GameSelection from '../game/GameSelection.jsx';
import GameVoting from '../game/GameVoting.jsx';

const GroupDetails = ({ group, closeGroup }) => {
  // Game States
  const [beginVoting, setBeginVoting] = useState(false);
  const [chosenGame, setChosenGame] = useState(null);
  const [openGameSelectionScreen, setOpenGameSelectionScreen] = useState(false);
  // Vote States
  const {
    castVote,
    addNewGame,
    adjustTime,
    finalizeVote,
    votedGames,
    changeCurrentGameInfo,
  } = useVote();
  // Date States
  const [date, setDate] = useState(new Date());
  const [dateTimeSettings, setDateTimeSettings] = useState({});
  const [editingGroup, setEditingGroup] = useState(false);
  // Animations
  const slideAnim = useRef(new Animated.Value(1000)).current;
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 75,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  /**
   * Reconstructs date object to read more human/user friendly
   */
  const convertDateTime = (date) => {
    // Get numbered day of the week and convert it to English day of the week
    let weekday = date.getDay();
    let numDayAbbreviation;
    switch (weekday) {
      case 0:
        weekday = 'Sunday';
        break;
      case 1:
        weekday = 'Monday';
        break;
      case 2:
        weekday = 'Tuesday';
        break;
      case 3:
        weekday = 'Wednesday';
        break;
      case 4:
        weekday = 'Thursday';
        break;
      case 5:
        weekday = 'Friday';
        break;
      case 6:
        weekday = 'Saturday';
        break;
    }

    // Get numbered month and return the name of the month
    let currentMonth = date.getMonth();
    switch (currentMonth) {
      case 0:
        currentMonth = 'January';
        break;
      case 1:
        currentMonth = 'February';
        break;
      case 2:
        currentMonth = 'March';
        break;
      case 3:
        currentMonth = 'April';
        break;
      case 4:
        currentMonth = 'May';
        break;
      case 5:
        currentMonth = 'June';
        break;
      case 6:
        currentMonth = 'July';
        break;
      case 7:
        currentMonth = 'August';
        break;
      case 8:
        currentMonth = 'September';
        break;
      case 9:
        currentMonth = 'October';
        break;
      case 10:
        currentMonth = 'November';
        break;
      case 11:
        currentMonth = 'December';
        break;
    }
    console.log(date.getDay());

    // Determine the day abbreviation (st, nd, rd, th)
    switch (date.getDay()) {
      case 1:
      case 21:
      case 31:
        numDayAbbreviation = 'st';
        break;
      case 2:
      case 22:
        numDayAbbreviation = 'nd';
        break;
      case 3:
      case 23:
        numDayAbbreviation = 'rd';
        break;
      default:
        numDayAbbreviation = 'th';
        break;
    }

    // Construct the final string
    const dateString = `You'll be playing on ${weekday}, ${currentMonth} ${date.getDay()}${numDayAbbreviation} at ${
      date.getHours() % 12 || 12
    }:${date.getMinutes()} ${date.getHours() > 12 ? 'PM' : 'AM'}`;

    // Log the date string to the console
    console.log(dateString);

    // Return the date string
    return dateString;
  };

  const beginVotingHandler = () => {
    convertDateTime(date);
    setBeginVoting(true);
    addNewGame({
      name: chosenGame.name,
      date: date,
      cover: chosenGame.cover.image_id
        ? `https://images.igdb.com/igdb/image/upload/t_1080p/${chosenGame.cover.image_id}.jpg`
        : chosenGame.cover,
      votes: 1,
      membersVoted: ['Cj'],
    });
    changeCurrentGameInfo({
      name: chosenGame.name,
      date: date,
      cover: chosenGame.cover.image_id
        ? `https://images.igdb.com/igdb/image/upload/t_1080p/${chosenGame.cover.image_id}.jpg`
        : chosenGame.cover,
      votes: 1,
      membersVoted: ['Cj'],
    });
  };

  return (
    <Animated.View
      style={{
        ...styles.groupDetailsWrapper,
        transform: [{ translateX: slideAnim }],
      }}
    >
      {/* Game Picker Modal */}
      <GamePickerModal
        modalStatus={openGameSelectionScreen}
        closeModal={() => {
          setOpenGameSelectionScreen(false);
        }}
        cancelChoice={() => {
          setOpenGameSelectionScreen(false);
          setChosenGame(null);
        }}
        previouslyPlayedGames={group.gamesList}
        selectGame={(game) => setChosenGame(game)}
        currentlySelectedGame={chosenGame}
        selectDate={(date) => {
          setDate(new Date(date));
          beginVotingHandler();
        }}
      />

      {/* EDIT GROUP MODAL */}
      <EditGroupModal
        modalStatus={editingGroup}
        closeModal={() => {
          setEditingGroup(false);
        }}
        group={group}
      />

      {/* CLOSE GROUP BUTTON */}
      <Pressable onPress={closeGroup} style={styles.closeGroupBtn}>
        <MaterialCommunityIcons
          name='arrow-left-bold-outline'
          size={40}
          color={'white'}
        />
      </Pressable>

      {/* EDIT GROUP SETTINGS BUTTON */}
      <Pressable
        onPress={() => setEditingGroup(true)}
        style={styles.editGroupBtn}
      >
        <MaterialCommunityIcons name='cog' size={40} color={'white'} />
      </Pressable>

      {/* Group Details Wrapper */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.groupHeader}>
          <Text style={styles.groupName}>{group.groupName}</Text>
          {/* Members List Wrapper */}
          <View style={styles.headerFontContainer}>
            <Text
              style={[
                styles.headerFont,
                {
                  color: 'white',
                  paddingHorizontal: 10,
                  lineHeight: 53,
                },
              ]}
            >
              Members
            </Text>
          </View>
          {/* Members List */}
          <View style={styles.memberListContainer}>
            <FlatList
              horizontal={true}
              contentContainerStyle={styles.memberList}
              data={group.members}
              renderItem={({ item: member }) => (
                <Text
                  style={[
                    styles.baseFont,
                    {
                      marginVertical: 0,
                      color: 'white',
                    },
                  ]}
                >
                  {member}
                </Text>
              )}
            />
          </View>
        </View>

        <View style={styles.groupBodyWrapper}>
          {/* GROUP GAME SELECTION */}
          <View style={styles.gameSelectionHeader}>
            <View style={styles.headerFontContainer}>
              <Text
                style={[
                  styles.headerFont,
                  {
                    color: 'white',
                    paddingHorizontal: 10,
                    lineHeight: 53,
                  },
                ]}
              >
                Game Selection
              </Text>
            </View>

            {/* 
            GAME SELECTION SCREEN
            */}
            {!beginVoting ? (
              <GameSelection
                chosenGame={chosenGame}
                currentlyVoting={beginVoting}
                openGameSelection={() => setOpenGameSelectionScreen(true)}
              />
            ) : (
              <GameVoting
                votedGames={votedGames}
                openGameSelection={() => setOpenGameSelectionScreen(true)}
              />
            )}
          </View>

          {/* GROUP GAMES LIST */}
          <View style={styles.headerFontContainer}>
            <Text
              style={[
                styles.headerFont,
                {
                  paddingHorizontal: 10,
                },
              ]}
            >
              Games List
            </Text>
          </View>

          {/* GAMES PLAYED LIST */}
          <View style={styles.gamesPlayedListWrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {group.gamesList.length > 0 ? (
                Object.entries(group.gamesList)
                  .sort(([, a], [, b]) => b - a)
                  .reverse()
                  .map(([position, game], idx) => {
                    return (
                      <View key={position}>
                        <Text
                          style={[
                            styles.gamesListGameName,
                            {
                              color:
                                idx == 0
                                  ? 'gold'
                                  : idx === 1
                                  ? 'silver'
                                  : idx === 2
                                  ? '#905923'
                                  : 'white',
                              fontWeight: idx <= 2 && 900,
                            },
                          ]}
                        >
                          <>
                            {game.name}: {game.playTime + ' hours'}
                          </>
                        </Text>
                      </View>
                    );
                  })
              ) : (
                <Text>Start gaming to begin adding to the groups list!</Text>
              )}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default GroupDetails;
