import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const useCheckToken = () => {
  const [token, setToken] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [gameName, setGameName] = useState('');
  const [previousGame, setPreviousGame] = useState(null);
  const [loading, setLoading] = useState(false);

  let backendUrl =
    Platform.OS === 'web'
      ? 'http://localhost:3001'
      : 'https://ready-up-backend.onrender.com';

  const generateNewToken = async () => {
    try {
      const request = await axios.post(`${backendUrl}/igdb/generate_token`);
      const response = await request.data;
      await AsyncStorage.setItem('twitch_token', response.access_token);
      setToken(response.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('twitch_token');
      console.log('PREVIOUS TOKEN!? ', token);
      if (!token) return generateNewToken();
      return token;
    } catch (error) {
      console.log(error);
    }
  };

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

  const awaitToken = async () => {
    const tokenStatus = await checkToken();
    if (!tokenStatus) return null;
    setToken(tokenStatus);
  };

  const resetSearchResults = () => {
    setSearchResults([]);
  };

  return {
    token,
    loading,
    gameName,
    previousGame,
    awaitToken,
    generateNewToken,
    searchGame,
    resetSearchResults,
    setGameName: (game) => setGameName(game),
    searchResults,
  };
};

export default useCheckToken;
