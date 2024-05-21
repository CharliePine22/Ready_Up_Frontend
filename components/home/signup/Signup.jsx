import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from './signup.style';

const Signup = ({ goToSignin, signInAuthentication }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='NAME'
          value={name}
          onChangeText={setName}
          style={styles.textInput}
          placeholderStyle={styles.textInput}
          placeholderTextColor='white'
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
        <TextInput
          placeholder='EMAIL'
          value={email}
          onChangeText={setEmail}
          style={styles.textInput}
          placeholderStyle={styles.textInput}
          placeholderTextColor='white'
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
        <TextInput
          placeholder='PASSWORD'
          value={password}
          onChangeText={setPassword}
          style={styles.textInput}
          placeholderTextColor='white'
          secureTextEntry
        />
        <MaterialCommunityIcons
          name='key-variant'
          size={22}
          color='white'
          style={styles.inputIcon}
        />
      </View>

      <Pressable
        onPress={() => signInAuthentication({ email, name, password })}
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
          <Text style={{ color: 'white', fontWeight: 900 }}>Sign In</Text>
        </Pressable>
        .
      </Text>
    </View>
  );
};

export default Signup;
