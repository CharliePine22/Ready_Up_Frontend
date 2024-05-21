import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Signin from '../signin/Signin';
import Signup from '../signup/Signup';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const Welcome = ({ signInAuthentication }) => {
  // Check to see if token is active from previous state
  // If signed in, display home page, otherwise display welcome page
  const [isLoading, setIsLoading] = useState(false);
  const [creatingAccount, setCreatingAccount] = useState(false);

  return (
    <View style={{ marginBottom: 10 }}>
      <View style={styles.container}>
        <Text style={styles.appName}>Ready Up</Text>
        <Text style={styles.welcomeMessage}>
          Time to carry the team again soldier.
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          height: 380,
          paddingHorizontal: 10,
        }}
      >
        {!creatingAccount ? (
          <Signin
            signInAuthentication={signInAuthentication}
            createNewAccount={() => setCreatingAccount(true)}
          />
        ) : (
          <Signup
            goToSignin={() => setCreatingAccount(false)}
            signInAuthentication={signInAuthentication}
          />
        )}
      </View>
    </View>
  );
};

export default Welcome;
