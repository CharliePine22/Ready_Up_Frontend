import { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import styles from './signin.style';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const { signIn } = useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Sign in' onPress={() => signIn({ username, password })} />
    </View>
  );
};

export default Signin;
