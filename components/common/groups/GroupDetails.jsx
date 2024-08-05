import { View, Text, Pressable, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';
import styles from './groupDetails.style.js';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CustomModal from '../modal/CustomModal.jsx';

const GroupDetails = ({ group, closeGroup }) => {
  const [chosenGame, setChosenGame] = useState(null);
  const [openGameSelectionScreen, setOpenGameSelectionScreen] = useState(false);
  const voteForCurrentGameSelection = () => {};
  console.log(chosenGame);
  return (
    <View style={styles.groupDetailsWrapper}>
      <CustomModal
        modalStatus={openGameSelectionScreen}
        closeModal={() => {
          setOpenGameSelectionScreen(false);
        }}
        cancelChoice={() => {
          setOpenGameSelectionScreen(false);
          setChosenGame(null);
        }}
        previouslyPlayedGames={group.gamesPlayed}
        selectGame={(game) => setChosenGame(game)}
        currentlySelectedGame={chosenGame}
      />
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
                      // marginHorizontal: 20,
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
            {/* GAME CASE SELECTION */}
            <View style={styles.gameSelectionContainer}>
              <View style={styles.gameCaseContainer}>
                <FontAwesome name='question' size={60} color={'white'} />
              </View>
              <View style={styles.gameSelectionDetails}>
                <Text style={styles.gameMessage}>
                  Your group hasn't chosen a game yet. As the leader of the
                  group, suggest one to play!
                </Text>

                <View style={styles.gameSelectionActions}>
                  <Pressable
                    style={({ pressed }) => [
                      styles.gameSelectionBtn,
                      pressed ? styles.gameSelectionBtnPressed : '',
                    ]}
                    onPress={() => setOpenGameSelectionScreen(true)}
                  >
                    <Text style={styles.gameSelectionBtnText}>SELECT</Text>
                  </Pressable>
                  <Pressable
                    style={({ pressed }) => [
                      styles.gameSelectionBtn,
                      pressed ? styles.gameSelectionBtnPressed : '',
                    ]}
                  >
                    <Text style={styles.gameSelectionBtnText}>RANDOMIZE</Text>
                  </Pressable>
                </View>
              </View>
            </View>
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
          <View style={styles.gamesPlayedListWrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {Object.entries(group.gamesPlayed)
                .sort(([, a], [, b]) => b - a)
                .map(([gameName, hoursPlayed], idx) => {
                  return (
                    <View key={gameName}>
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
                          {gameName}: {hoursPlayed + ' hours'}
                        </>
                      </Text>
                    </View>
                  );
                })}
            </ScrollView>
          </View>
        </View>

        <Pressable onPress={closeGroup} style={styles.closeGroupBtn}>
          <MaterialCommunityIcons
            name='arrow-left-bold-outline'
            size={40}
            color={'white'}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default GroupDetails;
