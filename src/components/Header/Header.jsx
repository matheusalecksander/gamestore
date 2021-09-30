import React from 'react'
import { View, Text } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import styles from './style'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logoPurple}>Game<Text style={styles.logoGreen}>Store</Text></Text> 
      <FontAwesome name="search" size={24} color={"#8256FF"} />
    </View>
  )
}
