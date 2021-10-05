import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import Divider from '../../components/Divider'

import styles from './style'

export default function Detail() {

  const navigation = useNavigation()
  const route = useRoute()

  const [game, setGame] = useState({})

  useEffect(() => {
    function getGame() {
      const game = route.params
      setGame(game)
      console.log(game)
    }

    getGame()
  }, [])

  function handleNavigation(item) {
    navigation.navigate('Carrinho', { ...item })
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{game.name}</Text>
        <Text style={styles.text}>Popularidade: {game.score}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: `https://raw.githubusercontent.com/projetos-matheusalecksander/gamestore/main/src/assets/${game.image}` }} style={styles.image} />
      </View>
      <Divider />
      <View style={styles.content}>
        <Text style={styles.title}>Por: R${game.price}</Text>
        <Text style={styles.text}>Frete - R$10,00</Text>
        <Text style={styles.text}>
          Quantidade:
        </Text>

      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => handleNavigation(game)}
      >
        <Text style={styles.buttonText}>ADICIONAR AO CARRINHO</Text>
      </TouchableOpacity>
    </View>
  )
}