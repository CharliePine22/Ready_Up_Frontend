import { useState, useContext } from 'react';
import { View, Text, TextInput, Button, Pressable, Image } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import googleIcon from '../../../assets/icons/google.png';
import discordIcon from '../../../assets/icons/discord.png';

import styles from './signin.style';

const Signin = ({ signInAuthentication }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const { signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
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
          size={24}
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
          size={24}
          color='white'
          style={styles.inputIcon}
        />
      </View>
      {/* <Button
        title='Login'
        onPress={() => signIn({ username, password })}
        style={styles.btn}
      /> */}
      <View style={styles.loginActions}>
        <Pressable
          onPress={() => signInAuthentication({ email, password })}
          style={styles.loginBtn}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </Pressable>
        <View style={styles.loginAltsContainer}>
          <Text style={styles.loginActionsText}>
            <Text style={styles.loginActionsTextInner}>Or Sign In With</Text>
          </Text>
          <Image source={googleIcon} style={styles.loginAltIcon} />
          <Image source={discordIcon} style={styles.loginAltIcon} />
        </View>
      </View>
    </View>
  );
};

export default Signin;
