import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

import Divider from '../../components/Divider'

import styles from './style'
import themes from '../../global/theme'

export default function Detail() {

  const navigation = useNavigation()
  const route = useRoute()

  const [game, setGame] = useState({})
  const [quant, setQuant] = useState(1)

  function handleQuantPlus() {
    let quantidade = quant
    quantidade++
    setQuant(quantidade)
  }
  function handleQuantMinus() {
    let quantidade = quant
    quantidade--
    if (quant > 0) {
      setQuant(quantidade)
    } else {
      setQuant(0)
    }
  }

  useEffect(() => {
    function getGame() {
      const game = route.params
      setGame(game)
      console.log(route.params)
    }

    getGame()
  }, [])

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
        <View style={styles.quantWrapper}>
          <Text style={styles.text}>
            Quantidade:
          </Text>
          <TouchableOpacity
            style={styles.buttonQuant}
            activeOpacity={0.7}
            onPress={() => handleQuantMinus()}
            disabled={quant > 0 ? false : true}
          >
            <AntDesign name="minuscircle" size={18} color={quant > 0 ? themes.colors.primary : "#707070"} />
          </TouchableOpacity>
          <TextInput
            value={quant.toString()}
            keyboardType={'numeric'}
          />
          <TouchableOpacity
            style={styles.buttonQuant}
            activeOpacity={0.7}
            onPress={() => handleQuantPlus()}
          >
            <AntDesign name="pluscircle" size={18} color={themes.colors.primary} />
          </TouchableOpacity>

        </View>
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