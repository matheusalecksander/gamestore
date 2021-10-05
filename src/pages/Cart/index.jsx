import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import Divider from '../../components/Divider'

import styles from './style'

export default function Cart() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>PARTE DE CIMA</Text>
      </View>
      <Divider />
      <View style={styles.content}>
        <Text>PARTE DE BAIXO</Text>
      </View>
    </View>
  )
}