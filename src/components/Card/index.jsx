import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Divider from '../Divider'
import styles from './style'

export default function Card(props) {
  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate('Detalhes')
  }

  return (
    <TouchableOpacity
      onPress={() => handleNavigation()}
      activeOpacity={0.7}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: `https://raw.githubusercontent.com/projetos-matheusalecksander/gamestore/main/src/assets/${props.image}` }}
            style={styles.image} />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>{props.name}</Text>
          <Text style={styles.text}>Popularidade: {props.score}</Text>
          <Text style={styles.text}>R$<Text style={styles.title}>{props.price}</Text></Text>
          <Text style={styles.text}>R$10,00 de frete</Text>
        </View>
      </View>
      <Divider />
    </TouchableOpacity>
  )
}
