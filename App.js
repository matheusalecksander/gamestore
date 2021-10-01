import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home'

import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Rajdhani_400Regular,
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani'

import themes from './src/global/theme'
import Detail from './src/pages/Detail';

const Stack = createNativeStackNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={Home}
            options={
              {
                headerTintColor: themes.colors.primary,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                headerShown: false
            }}
          />
          <Stack.Screen 
            name="Detail"
            component={Detail}
            options={
              {
                headerTintColor: themes.colors.primary,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.background
  }
})
