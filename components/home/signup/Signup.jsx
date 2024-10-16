import { useState } from 'react';
import { View, Text, TextInput, Pressable, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import useAuth from '../../../hooks/useAuth';
import styles from './signup.style';

const Signup = ({ goToSignin }) => {
  const { createAccount, error } = useAuth();

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleNameBlur = () => {
    if (name.trim() == '') setNameError(true);
    else setNameError(false);
  };

  const handleEmailBlur = () => {
    if (email.trim() == '' || !email.includes('@')) setEmailError(true);
    else setEmailError(false);
  };

  const handlePasswordBlur = () => {
    if (password.trim() == '' || password.length < 6) setPasswordError(true);
    else setPasswordError(false);
  };

  return (
    <View style={styles.container}>
      {/* Name Input */}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.inputContainer}>
        {nameError && (
          <Text style={styles.errorText2}>Please don't leave input blank.</Text>
        )}
        <TextInput
          placeholder='NAME'
          value={name}
          onChangeText={setName}
          style={[styles.textInput, nameError && styles.errorBorder]}
          placeholderStyle={styles.textInput}
          placeholderTextColor='white'
          onBlur={handleNameBlur}
        />
        <Ionicons
          name='person'
          size={22}
          color='white'
          style={styles.inputIcon}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        {emailError && (
          <Text style={styles.errorText2}>Please enter a valid email.</Text>
        )}
        <TextInput
          placeholder='EMAIL'
          value={email}
          onChangeText={setEmail}
          style={[styles.textInput, emailError && styles.errorBorder]}
          placeholderStyle={styles.textInput}
          placeholderTextColor='white'
          onBlur={handleEmailBlur}
        />
        <MaterialCommunityIcons
          name='email'
          size={22}
          color='white'
          style={styles.inputIcon}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        {passwordError && (
          <Text style={styles.errorText2}>
            Password must be at least 6 characters.
          </Text>
        )}
        <TextInput
          placeholder='PASSWORD'
          value={password}
          onChangeText={setPassword}
          style={[styles.textInput, passwordError && styles.errorBorder]}
          placeholderTextColor='white'
          secureTextEntry
          onBlur={handlePasswordBlur}
        />
        <MaterialCommunityIcons
          name='key-variant'
          size={22}
          color='white'
          style={styles.inputIcon}
        />
      </View>

      <Pressable
        onPress={() => {
          setNameError(false);
          setEmailError(false);
          setPasswordError(false);
          createAccount(email, password, name);
        }}
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}>CREATE ACCOUNT</Text>
      </Pressable>
      <Text style={styles.signInText}>
        Already have an account?{' '}
        <Pressable
          style={{ alignItems: 'center', justifyContent: 'center' }}
          onPress={goToSignin}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 900,
              top: Platform.OS === 'web' ? 0 : 4,
            }}
          >
            Sign In
          </Text>
        </Pressable>
        .
      </Text>
    </View>
  );
};

export default Signup;
