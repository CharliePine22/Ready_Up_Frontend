import { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  Pressable,
  Image,
} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import googleIcon from '../../../assets/icons/google.png';
import discordIcon from '../../../assets/icons/discord.png';
import styles from './signin.style';
import useAuth from '../../../hooks/useAuth';

const Signin = ({ createNewAccount, setActive }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const { signInAuthentication, error } = useAuth();

  let backendUrl =
    Platform.OS === 'web'
      ? 'http://localhost:3001'
      : 'https://ready-up-backend.onrender.com';
  const signInHandler = (email, password) => {
    let emailErrorFlag = false;
    let passwordErrorFlag = false;

    // Email Error Flag
    if (!email || !email.includes('@') || email.split().length == 0) {
      emailErrorFlag = true;
      setEmailError(true);
    }

    // Password Error Flag
    if (!password || password.split().length == 0) {
      passwordErrorFlag = true;
      setPasswordError(true);
    }

    if (passwordErrorFlag || emailErrorFlag) {
      if (!emailErrorFlag) {
        setEmailError(false);
      }
      if (!passwordErrorFlag) {
        setPasswordError(false);
      }
    } else {
      signInAuthentication({ email, password });
      setActive();
    }
  };

  return (
    <View
      style={
        !emailError || !passwordError
          ? { ...styles.container }
          : { ...styles.container, ...styles.containerError }
      }
    >
      {emailError || passwordError || error ? (
        <Text style={styles.errorMessage}>Incorrect username or password.</Text>
      ) : null}

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          id='email'
          placeholder='EMAIL'
          value={email}
          onChangeText={setEmail}
          style={
            !emailError
              ? { ...styles.textInput }
              : { ...styles.textInput, ...styles.errorInput }
          }
          placeholderStyle={styles.textInput}
          placeholderTextColor='white'
        />
        <MaterialCommunityIcons
          name='email'
          size={24}
          color='white'
          style={styles.inputIcon}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          id='password'
          placeholder='PASSWORD'
          value={password}
          onChangeText={setPassword}
          style={
            !passwordError
              ? { ...styles.textInput }
              : { ...styles.textInput, ...styles.errorInput }
          }
          placeholderTextColor='white'
          secureTextEntry
        />
        <MaterialCommunityIcons
          name='key-variant'
          size={24}
          color='white'
          style={styles.inputIcon}
        />
      </View>

      <View style={styles.loginActions}>
        <Pressable
          onPress={() => signInHandler(email, password)}
          style={styles.loginBtn}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </Pressable>

        {/* Discord and Facebook Signin Options */}
        <View style={styles.loginAltsContainer}>
          <Text style={styles.loginActionsText}>
            <Text style={styles.loginActionsTextInner}>Or Sign In With</Text>
          </Text>
          <Pressable>
            <Image source={googleIcon} style={styles.loginAltIcon} />
          </Pressable>

          <Pressable>
            <Image source={discordIcon} style={styles.loginAltIcon} />
          </Pressable>
        </View>

        {/* Signup Text Option */}
        <Text style={styles.createAccountText}>
          Don't have an account?{' '}
          <Pressable
            style={{
              padding: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={createNewAccount}
          >
            <Text
              style={{
                fontWeight: 900,
                color: 'white',
                includeFontPadding: false,
                verticalAlign: 'middle',
                alignItems: 'center',
                top: Platform.OS === 'web' ? 0 : 4,
              }}
            >
              Sign Up
            </Text>
          </Pressable>
          .
        </Text>
      </View>
    </View>
  );
};

export default Signin;
