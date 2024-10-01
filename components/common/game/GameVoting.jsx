import { View, Text, ImageBackground, Pressable } from "react-native";
import { useRef, useCallback, useState, useEffect } from "react";
import Carousel from "react-native-reanimated-carousel";
import styles from "./gameVoting.style";
import useVote from "../../../hooks/useVote";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Platform } from "react-native";
const GameVoting = ({ openGameSelection, votedGames, selectDate }) => {
  const { castVote, currentGameInfo, changeCurrentGameInfo } = useVote();
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const carouselRef = useRef();
  const [votedGameInfo, setVotedGameInfo] = useState({});
  useEffect(() => {
    if (votedGames.length == 1) {
      console.log("ONE ITEM IN VOTEDGAMES!");
      console.log(votedGames[0]);
      setVotedGameInfo(votedGames[0]);
    }
  }, []);

  const snapToNextItem = useCallback(() => {
    if (Platform.OS === "web") {
      const gameIndex =
        votedGames.findIndex((game) => game.name == votedGameInfo.name) + 1;
      if (carouselRef.current) {
        // console.log('INDEX: ', gameIndex);
        // console.log('LENGTH OF VOTED GAMES: ', votedGames.length);
        // console.log('SNAPPING TO NEXT ITEM');
        carouselRef.current.scrollTo({
          animated: true,
          index: gameIndex > votedGames.length ? 0 : gameIndex,
        });
      }
    } else return;
  }, [carouselRef, votedGames]);

  const convertDateTime = (date) => {
    if (!date) return;
    // Get numbered day of the week and convert it to English day of the week
    let weekday = date.getDay();
    let numDayAbbreviation;
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

    // Get numbered month and return the name of the month
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

    // Determine the day abbreviation (st, nd, rd, th)
    switch (date.getDay()) {
      case 1:
      case 21:
      case 31:
        numDayAbbreviation = "st";
        break;
      case 2:
      case 22:
        numDayAbbreviation = "nd";
        break;
      case 3:
      case 23:
        numDayAbbreviation = "rd";
        break;
      default:
        numDayAbbreviation = "th";
        break;
    }

    // Construct the final string
    const dateString = `${weekday}, ${currentMonth} ${date.getDay()}${numDayAbbreviation} @ ${
      date.getHours() % 12 || 12
    }:${date
      .getMinutes()
      .toLocaleString("en-US", { minimumIntegerDigits: 2 })} ${
      date.getHours() > 12 ? "PM" : "AM"
    }`;

    // Return the date string
    return dateString;
  };

  return (
    <View style={styles.gameSelectionContainer}>
      <View
        style={[
          {
            padding: 0,
            borderStyle: "solid",
          },
          styles.gameCaseContainer,
        ]}
      >
        <Carousel
          ref={carouselRef}
          autoplay={true}
          scrollEnabled={votedGames.length > 1 ? true : false}
          style={styles.carousel}
          onSnapToItem={(item) => setVotedGameInfo(votedGames[item])}
          data={votedGames}
          renderItem={({ item }) => (
            <Pressable
              style={{ height: "100%", width: "100%" }}
              onPress={snapToNextItem}
            >
              <ImageBackground
                style={styles.gameCaseCover}
                source={{
                  uri: item.cover,
                }}
              />
            </Pressable>
          )}
          sliderWidth={100}
          itemWidth={100}
          width={169}
        />
      </View>
      <View style={styles.gameSelectionDetails}>
        {votedGameInfo && (
          <View style={styles.votedGameInfoWrapper}>
            <View style={styles.votedGameInfoContainer}>
              <Text style={styles.gameInfoHeader}>Title</Text>
              <Text>{votedGameInfo.name}</Text>
            </View>
            <View style={styles.votedGameInfoContainer}>
              <Text style={styles.gameInfoHeader}>Date</Text>
              <Text style={{ textAlign: "center" }}>
                {convertDateTime(votedGameInfo?.date)}
              </Text>
            </View>
            <View style={styles.votedGameInfoContainer}>
              <Text style={styles.gameInfoHeader}>Votes</Text>
              <Text>{votedGameInfo.votes}</Text>
            </View>
          </View>
        )}

        {/* <View style={styles.gameSelectionActions}>
          <Pressable
            style={({ pressed }) => [
              styles.gameSelectionBtn,
              pressed ? styles.gameSelectionBtnPressed : "",
            ]}
            onPress={() => castVote(currentGameInfo)}
          >
            <Text style={styles.gameSelectionBtnText}>VOTE</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.gameSelectionBtn,
              pressed ? styles.gameSelectionBtnPressed : "",
            ]}
            onPress={openGameSelection}
          >
            <Text style={styles.gameSelectionBtnText}>NEW GAME</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.gameSelectionBtn,
              pressed ? styles.gameSelectionBtnPressed : "",
            ]}
            onPress={() => setDateModalOpen(true)}
          >
            <Text style={styles.gameSelectionBtnText}>ADJUST TIME</Text>
          </Pressable>
        </View> */}
        <DateTimePickerModal
          isVisible={dateModalOpen}
          mode="datetime"
          onConfirm={(date) => {
            console.log("DATE!!: ", date);
            selectDate(date);
            setDateModalOpen(false);
            closeModal();
          }}
          onCancel={() => {
            setDateModalOpen(false);
          }}
        />
      </View>
    </View>
  );
};

export default GameVoting;
