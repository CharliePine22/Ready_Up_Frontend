import {
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './gamePickerModal.style.js';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import useCheckToken from '../../../hooks/useCheckToken.js';
import SearchResults from '../game/SearchResults.jsx';

// Rename to Game Picker Modal
const GamePickerModal = ({
  closeModal,
  modalStatus,
  previouslyPlayedGames,
  selectGame,
  currentlySelectedGame,
  selectDate,
}) => {
  // State Variables
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [groupGamesList, setGroupGamesList] = useState(
    Object.entries(previouslyPlayedGames)
  );
  const [gameName, setGameName] = useState('');
  const [previousGame, setPreviousGame] = useState(null);
  const [searchingGame, setSearchingGame] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Custom Hooks
  const { token, awaitToken, generateNewToken } = useCheckToken();
  let backendUrl =
    Platform.OS === 'web'
      ? 'http://localhost:3001'
      : 'https://ready-up-backend.onrender.com';

  /**
   * Search IGDB Api Database for game case cover
   */
  const searchGame = async () => {
    if (gameName == previousGame || gameName == '') return;
    setLoading(true);
    try {
      console.log('Sending request to IGDB API with game name:', gameName);
      // Send a POST request to the IGDB API
      const request = await axios.post(`${backendUrl}/igdb/get_game_cover`, {
        // Pass the token and game name to the request
        token: token,
        gameName: gameName,
      });
      console.log(request);
      const response = await request.data;
      console.log(response);
      // IGDB API returns an error code as a string, if it returns "Tip 3"
      // It means the token has expired
      if (response['Tip 3']) {
        throw new Error('Token expiration');
      } else {
        setPreviousGame(gameName);
        setSearchResults(response);
      }
    } catch (error) {
      // If there is an error, and the error is "Token expiration"
      // Call the generateNewToken function to get a new token
      if (error == 'Error: Token expiration') {
        console.log('Error: Token expiration');
        generateNewToken();
      }
    } finally {
      setLoading(false);
    }
  };

  // Get a token if it doesn't exist
  useEffect(() => {
    awaitToken();
  }, []);

  // Display search results when user begins typing to attemt to smart match
  useEffect(() => {
    if (gameName !== '') setSearchingGame(true);
    else {
      setSearchResults([]);
      setSearchingGame(false);
      setGroupGamesList(Object.entries(previouslyPlayedGames));
    }
    // searchGame(gameName);
  }, [gameName]);

  let gameListLength = Object.entries(previouslyPlayedGames).length;
  /**
   * Opens the date picker modal after a game is selected
   */
  const finalizeChoiceHandler = () => {
    if (Platform.OS === 'web') {
      selectDate(new Date());
      closeModal();
    }
    setDateModalOpen(true);
  };

  const renderPreviouslyPlayedGames = () => {
    return (
      <FlatList
        data={groupGamesList}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={styles.gameItem}
              onPress={() => {
                selectGame(item[1].id);
                finalizeChoiceHandler();
              }}
            >
              <Text style={styles.gameName}>{item[1].name}</Text>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item[1].id}
      />
    );
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalStatus}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          closeModal;
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Select a game your group has previously played or suggest a new
              one.
            </Text>

            {/* Input for typing in a game not on the list. */}
            <TextInput
              style={styles.gameNameInput}
              onSubmitEditing={searchGame}
              onChangeText={setGameName}
              value={gameName}
            />

            {/* GAME LIST */}
            <View
              style={[
                gameListLength <= 5 && styles.previousGamesListShortened,
                styles.previousGamesList,
              ]}
            >
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ height: '100%' }}
              >
                {/* If the user has begun searching for a game not already in group list */}
                {/* Display search results */}
                {!searchingGame ? (
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ height: '100%' }}
                  >
                    {groupGamesList
                      .sort(([a], [b]) => b - a)
                      .map(([position, game], idx) => {
                        return (
                          <View
                            key={game.name}
                            style={{
                              borderBottomColor: 'white',
                              borderBottomWidth:
                                idx == groupGameList.length - 1 ? 0 : 2,
                              borderStyle: 'solid',
                            }}
                          >
                            {/* Game Name */}
                            <Pressable
                              style={({ pressed }) => [
                                game.name == currentlySelectedGame?.name &&
                                  styles.currentSelectedGame,
                              ]}
                              onPress={() => selectGame(game)}
                            >
                              <Text style={[styles.previousGamesListGameName]}>
                                <>{game.name}</>
                              </Text>
                            </Pressable>
                          </View>
                        );
                      })}
                  </ScrollView>
                ) : (
                  // Game Search Results
                  <SearchResults
                    game={gameName}
                    loading={loading}
                    searchResults={searchResults}
                    selectGame={selectGame}
                    currentGame={currentlySelectedGame}
                  />
                )}
              </ScrollView>
            </View>
            <View style={styles.modalActions}>
              {/* Confirm Button */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Pressable
                  style={styles.videoGameBtn}
                  onPress={finalizeChoiceHandler}
                >
                  <Text style={[styles.textStyle, { top: 10 }]}>A</Text>
                </Pressable>
                <Text>Select</Text>
              </View>

              {/* Cancel Button */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Pressable
                  style={styles.videoGameBtn}
                  onPress={() => {
                    setGameName('');
                    closeModal();
                  }}
                >
                  <Text style={[styles.textStyle, { top: 10 }]}>B</Text>
                </Pressable>
                <Text>Back</Text>
              </View>
            </View>

            {/* Date Time Picker that appears after selecting game */}
            <DateTimePickerModal
              isVisible={dateModalOpen}
              mode='datetime'
              onConfirm={(date) => {
                setDateModalOpen(false);
                selectDate(date);
                closeModal();
              }}
              onCancel={() => {
                setDateModalOpen(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GamePickerModal;
