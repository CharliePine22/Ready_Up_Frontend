import { create } from 'zustand';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

let backendUrl =
  Platform.OS === 'web'
    ? 'http://localhost:3001'
    : 'https://ready-up-backend.onrender.com';

const tokenStore = (set, get) => ({
  token: null,
  loading: false,
  error: false,
  searchResults: [],
  gameName: '',
  previousGame: null,
  // CHCEK FOR VALID TOKEN
  chcekToken: async () => {
    set({ loading: true });
    try {
      const token = await AsyncStorage.getItem('twitch_token');
      console.log('PREVIOUS TOKEN!? ', token);
      if (!token) return generateNewToken();
      return token;
    } catch (error) {
      console.log(error);
      set({ error: error });
    }
  },
  // GENERATE NEW TOKEN
  generateNewToken: async () => {
    set({ loading: true });
    try {
      const request = await axios.post(`${backendUrl}/igdb/generate_token`);
      const response = await request.data;
      await AsyncStorage.setItem('twitch_token', response.access_token);
      set({ token: response.access_token });
      set({ loading: false });
    } catch (error) {
      console.log(error);
      set({ error: error });
    }
    set({ loading: false });
  },
  // SEARCH GAME
  searchGame: async () => {
    if (gameName == previousGame || gameName == '') return;
    set({ loading: true });
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
        set({ gameName: '', searchResults: response });
        // set({ searchResults: response });
      }
    } catch (error) {
      console.log(error);
      set({ error: error });
    }
    set({ loading: false });
  },
  awaitToken: async () => {
    const tokenStatus = await checkToken();
    if (!tokenStatus) return null;
    set({ token: tokenStatus });
  },
  resetSearchResults: () => set({ searchResults: [] }),
});

const useTokenStore = create(tokenStore);

export default useTokenStore;
