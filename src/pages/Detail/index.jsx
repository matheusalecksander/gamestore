import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import Divider from '../../components/Divider'

import styles from './style'

export default function Detail() {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>FIFA 18</Text>
        <Text style={styles.text}>Popularidade: 325</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: `https://raw.githubusercontent.com/projetos-matheusalecksander/gamestore/main/src/assets/fifa-18.png` }} style={styles.image} />
      </View>
      <Divider />
      <View style={styles.content}>
        <Text style={styles.title}>R$195,39</Text>
        <Text style={styles.text}>Frete - R$10,00</Text>
        <Text style={styles.text}>
          Quantidade:
        </Text>

      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>ADICIONAR AO CARRINHO</Text>
      </TouchableOpacity>
    </View>
  )
}