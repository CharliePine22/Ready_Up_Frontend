import { View, Text, Pressable } from 'react-native';
import styles from './dashboard.style';

const Dashboard = ({ signInAuthentication }) => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Pressable onPress={signInAuthentication} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGOUT</Text>
      </Pressable>
    </View>
  );
};

export default Dashboard;
