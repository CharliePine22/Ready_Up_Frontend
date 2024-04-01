import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const Welcome = () => {
  // Check to see if token is active from previous state
  // If signed in, display home page, otherwise display welcome page
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.appName}>Ready Up</Text>
        <Text style={styles.welcomeMessage}>
          Time to carry the team again soldier.
        </Text>
      </View>
      <View style={styles.container}>
        <Button style={styles.welcomeBtn} title='Sign In' />
        <Button style={styles.welcomeBtn} title='Create Account' />
      </View>
    </View>
  );
};

export default Welcome;
