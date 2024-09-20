import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import useVote from '../../../hooks/useVote';
import styles from './gameVoting.style';
const GameVoting = ({ openGameSelection, votedGames }) => {
  console.log(votedGames);
  return (
    <View style={styles.gameSelectionContainer}>
      <View
        style={[
          {
            padding: 0,
            borderStyle: 'solid',
          },
          styles.gameCaseContainer,
        ]}
      >
        {/* <Carousel
                loop
                width={100}
                height={100}
                autoPlay={false}
                data={votedGames}
                renderItem={({ item }) => (
                  <ImageBackground
                    style={styles.gameCaseCover}
                    source={{
                      uri: `https://images.igdb.com/igdb/image/upload/t_1080p/${item.cover.image_id}.jpg`,
                    }}
                  />
                )}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)} */}
        <Carousel
          // containerCustomStyle={styles.test}
          // style={styles.gameCaseCover}
          data={votedGames}
          renderItem={({ item }) => (
            <ImageBackground
              style={styles.gameCaseCover}
              source={{
                uri: item.cover,
              }}
            />
          )}
          sliderWidth={100}
          itemWidth={100}
          width={170}
        />
        {/* {!chosenGame ? (
          <FontAwesome name="question" size={60} color={"white"} />
        ) : (
          <ImageBackground
            style={styles.gameCaseCover}
            source={{
              uri: !chosenGame.cover.id
                ? chosenGame.cover
                : `https://images.igdb.com/igdb/image/upload/t_1080p/${chosenGame.cover.image_id}.jpg`,
            }}
          />
        )} */}
      </View>
      <View style={styles.gameSelectionDetails}>
        <Text style={styles.gameMessage}>
          Cast your vote, delay the session, or choose a superior game.
        </Text>

        <View style={styles.gameSelectionActions}>
          <Pressable
            style={({ pressed }) => [
              styles.gameSelectionBtn,
              pressed ? styles.gameSelectionBtnPressed : '',
            ]}
            onPress={openGameSelection}
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
  );
};

export default GameVoting;
