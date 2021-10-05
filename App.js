import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
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

  const games = require('./src/api/products.json')

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        {games.map((item, i) => {
          return (
            <Card
              key={i}
              image={item.image}
              name={item.name}
              score={item.score}
              price={item.price.toString().replace('.', ',')}
            />
          )
        })}
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
