import { Stack } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import WelcomePage from './index';
import Dashboard from '../components/dashboard/Dashboard';
const Layout = () => {
  const navigation = useNavigation();

  return <Stack />;
  // return (
  //   <Stack.Navigator>
  //     <Stack.Screen name='Welcome' component={WelcomePage} />
  //     <Stack.Screen name='Dashboard' component={Dashboard} />
  //   </Stack.Navigator>
  // );
};

export default Layout;
