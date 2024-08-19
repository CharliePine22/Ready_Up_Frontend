import {
  View,
  Text,
  Pressable,
  FlatList,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import styles from "./groupDetails.style.js";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CustomModal from "../modal/CustomModal.jsx";

const GroupDetails = ({ group, closeGroup }) => {
  const [chosenGame, setChosenGame] = useState(null);
  const [dateTimeSettings, setDateTimeSettings] = useState({});
  const [date, setDate] = useState(new Date());
  const [openGameSelectionScreen, setOpenGameSelectionScreen] = useState(false);

  // Reconstruct date object to read more human/user friendly
  const convertDateTime = (date) => {
    let humanTime = date.getDate();
    console.log(
      "Day of Month:" + date.getDate(),
      "Hour" + date.getHours(),
      "Minute" + date.getMinutes()
    );

    // Get numbered day of the week and convert it to English day of the week
    let weekday = date.getDay();
    switch (weekday) {
      case 0:
        weekday = "Sunday";
        break;
      case 1:
        weekday = "Monday";
        break;
      case 2:
        weekday = "Tuesday";
        break;
      case 3:
        weekday = "Wednesday";
        break;
      case 4:
        weekday = "Thursday";
        break;
      case 5:
        weekday = "Friday";
        break;
      case 6:
        weekday = "Saturday";
        break;
    }

    // Get numbered momnth and return the name of the month
    let currentMonth = date.getMonth();
    switch (currentMonth) {
      case 0:
        currentMonth = "January";
        break;
      case 1:
        currentMonth = "February";
        break;
      case 2:
        currentMonth = "March";
        break;
      case 3:
        currentMonth = "April";
        break;
      case 4:
        currentMonth = "May";
        break;
      case 5:
        currentMonth = "June";
        break;
      case 6:
        currentMonth = "July";
        break;
      case 7:
        currentMonth = "August";
        break;
      case 8:
        currentMonth = "September";
        break;
      case 9:
        currentMonth = "October";
        break;
      case 10:
        currentMonth = "November";
        break;
      case 11:
        currentMonth = "December";
        break;
    }
    console.log(weekday);
    console.log(
      `You'll be playong on ${weekday}, ${currentMonth} ${date.getDay()} at ${date.getHours()}:${date.getMinutes()}`
    );
  };

  return (
    <View style={styles.groupDetailsWrapper}>
      {/* Game Picker Modal */}
      <CustomModal
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
          convertDateTime(date);
        }}
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
                  color: "white",
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
                      color: "white",
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
                    color: "white",
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
              <View
                style={[
                  {
                    padding: chosenGame ? 0 : 5,
                    borderStyle: chosenGame ? "solid" : "dotted",
                  },
                  styles.gameCaseContainer,
                ]}
              >
                {!chosenGame ? (
                  <FontAwesome name="question" size={60} color={"white"} />
                ) : (
                  <ImageBackground
                    style={styles.gameCaseCover}
                    source={{
                      uri: chosenGame?.cover,
                    }}
                    resizeMode="cover"
                  />
                )}
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
                      pressed ? styles.gameSelectionBtnPressed : "",
                    ]}
                    onPress={() => setOpenGameSelectionScreen(true)}
                  >
                    <Text style={styles.gameSelectionBtnText}>SELECT</Text>
                  </Pressable>
                  <Pressable
                    style={({ pressed }) => [
                      styles.gameSelectionBtn,
                      pressed ? styles.gameSelectionBtnPressed : "",
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
                                  ? "gold"
                                  : idx === 1
                                  ? "silver"
                                  : idx === 2
                                  ? "#905923"
                                  : "white",
                              fontWeight: idx <= 2 && 900,
                            },
                          ]}
                        >
                          <>
                            {game.name}: {game.playTime + " hours"}
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

        {/* CLOSE GROUP BUTTON */}
        <Pressable onPress={closeGroup} style={styles.closeGroupBtn}>
          <MaterialCommunityIcons
            name="arrow-left-bold-outline"
            size={40}
            color={"white"}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default GroupDetails;
