import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCheckToken = () => {
  const [token, setToken] = useState(null);

  const generateNewToken = async () => {
    try {
      const request = await axios.post(
        `http://localhost:3001/igdb/generate_token`
      );
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
      if (!token) return null;
      return token;
    } catch (error) {
      console.log(error);
    }
  };

  const awaitToken = async () => {
    const tokenStatus = await checkToken();
    if (!tokenStatus) return null;
    setToken(tokenStatus);
  };

  return { token, awaitToken, generateNewToken };
};

export default useCheckToken;
