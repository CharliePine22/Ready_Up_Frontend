import { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from './signin.style';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const { signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          value={username}
          onChangeText={setUsername}
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
          placeholder='Password'
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
      <Button
        title='Login'
        onPress={() => signIn({ username, password })}
        style={styles.btn}
      />
    </View>
  );
};

export default Signin;
