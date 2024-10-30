import { useState, useCallback, useEffect } from 'react';

import { View, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import { Stack } from 'expo-router';
import { COLORS, SIZES } from '../constants';
import { Dashboard, Welcome } from '../components';
import welcomePageBackground from '../assets/images/ready-up-home-page-wallpaper.png';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// import Constants from "expo-constants";
import useAuth from '../hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuthStore from '../hooks/useStore';
SplashScreen.preventAutoHideAsync();

const WelcomePage = () => {
  const [activeUser, setActiveUser] = useState(false);
  const { currentUser, updateUser } = useAuthStore();

  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setActiveUser(true);
        updateUser(user);
      } else {
        setActiveUser(false);
        updateUser(null);
      }
    };
    getUser();
  }, []);

  // Font Handling
  const [fontsLoaded, fontError] = useFonts({
    GaliverSans: require('../assets/fonts/GaliverSans.ttf'),
    Pdark: require('../assets/fonts/pdark.ttf'),
    'DMSans-Bold': require('../assets/fonts/DMSans-Bold.ttf'),
    SixCaps: require('../assets/fonts/SixCaps-Regular.ttf'),
    Inter: require('../assets/fonts/Inter-VariableFont_slnt,wght.ttf'),
    PlayerStart: require('../assets/fonts/PressStart2P-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // If font list is empty
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return currentUser ? (
    <SafeAreaView
      key={currentUser}
      onLayout={onLayoutRootView}
      style={{ flex: 1, height: '100%', backgroundColor: '#203949' }}
    >
      <Dashboard removeActive={() => setActiveUser(false)} user={activeUser} />
    </SafeAreaView>
  ) : (
    <ImageBackground
      key={currentUser}
      source={welcomePageBackground}
      resizeMode='cover'
      style={{ height: '100%', width: '100%' }}
      blurRadius={2}
    >
      <SafeAreaView
        style={{ flex: 1, height: '100%' }}
        onLayout={onLayoutRootView}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              height: 'auto',
              justifyContent: 'center',
              paddingVertical: SIZES.medium,
              paddingHorizontal: SIZES.small,
              width: '100%',
              maxWidth: 480,
            }}
          >
            <Welcome setActive={() => setActiveUser(true)} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomePage;
