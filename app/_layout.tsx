import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

import { Slot } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   const [loaded, error] = useFonts({
    'OpenRunde-Regular': require('../assets/fonts/OpenRunde-Regular.otf'),
    'OpenRunde-Medium': require('../assets/fonts/OpenRunde-Medium.otf'),
    'OpenRunde-Semibold': require('../assets/fonts/OpenRunde-Semibold.otf'),
    'OpenRunde-Bold': require('../assets/fonts/OpenRunde-Bold.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Slot />
  )
}
