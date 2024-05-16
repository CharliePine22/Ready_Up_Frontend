import { useState, useCallback } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  ImageBackground,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Dashboard,
  ScreenHeaderBtn,
  Signin,
  Signup,
  Welcome,
} from "../components";
import welcomePageBackground from "../assets/images/ready-up-home-page-wallpaper.png";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const WelcomePage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const router = useRouter();

  // Font Handling
  const [fontsLoaded, fontError] = useFonts({
    GaliverSans: require("../assets/fonts/GaliverSans.ttf"),
    Pdark: require("../assets/fonts/pdark.ttf"),
    "DMSans-Bold": require("../assets/fonts/DMSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const signInAuthentication = (credentals) => {
    const { email, password } = credentals;
    console.log(email, password);
    isSignedIn ? setIsSignedIn(false) : setIsSignedIn(true);
  };

  return isSignedIn ? (
    <Dashboard signInAuthentication={signInAuthentication} />
  ) : (
    <ImageBackground
      source={welcomePageBackground}
      resizeMode="cover"
      style={{ height: "100%", width: "100%" }}
      blurRadius={2}
    >
      <SafeAreaView
        style={{ flex: 1, height: "100%" }}
        onLayout={onLayoutRootView}
      >
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerShown: false,
            // headerLeft: () => (
            //   <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
            // ),
            // headerRight: () => (
            //   <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
            // ),
            headerTitle: "Ready Up",
          }}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              height: "100%",
              justifyContent: "center",
              // backgroundColor: 'blue',
              paddingVertical: SIZES.medium,
              paddingHorizontal: SIZES.small,
              width: "100%",
              maxWidth: 480,
            }}
          >
            <Welcome signInAuthentication={signInAuthentication} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomePage;
