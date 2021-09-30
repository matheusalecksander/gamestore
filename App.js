import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Rajdhani_400Regular,
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani'

import themes from './src/global/theme'
import Header from './src/components/Header/'
import Card from './src/components/Card'

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
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.background
  }
})
