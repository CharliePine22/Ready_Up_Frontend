import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import Signin from '../signin/Signin';
import Signup from '../signup/Signup';
import styles from './welcome.style';

const Welcome = ({ setActive }) => {
  // Check to see if token is active from previous state
  // If signed in, display home page, otherwise display welcome page
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [error, setError] = useState(false);

  return (
    <View
      style={{ marginBottom: 10, height: '100%', justifyContent: 'center' }}
    >
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
          // height: '100%',
          height: 'auto',
          height: 390,
          paddingHorizontal: 10,
          justifyContent: 'center',
        }}
      >
        {!creatingAccount ? (
          <Signin
            setActive={setActive}
            createNewAccount={() => setCreatingAccount(true)}
          />
        ) : (
          <Signup
            goToSignin={() => {
              setCreatingAccount(false);
              setError(false);
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Welcome;
