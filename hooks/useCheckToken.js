import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const useCheckToken = () => {
  const [token, setToken] = useState(null);
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

  const awaitToken = async () => {
    const tokenStatus = await checkToken();
    if (!tokenStatus) return null;
    setToken(tokenStatus);
  };

  return { token, awaitToken, generateNewToken };
};

export default useCheckToken;
