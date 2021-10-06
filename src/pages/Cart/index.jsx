import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import Divider from '../../components/Divider'

import styles from './style'


export default function Cart() {
  const navigation = useNavigation()
  const route = useRoute()
  
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    function getGame() {
      const game = route.params
      setProduct([...product, {game}])
      console.log(product.length)
      console.log(product)
    } 
    getGame()
  }, [route.params]
  )
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => console.log(product.length)}
        >
          <Text>Clique aqui</Text>
        </TouchableOpacity>
        {
          product.length > 1 ?
          <Text>{product[0].game[0].name}</Text> :
          <Text>O Carrinho está vazio</Text>
        }
      </View>
      <Divider />
      <View style={styles.content}>
        <Text>PARTE DE BAIXO</Text>
      </View>
    </View>
  )
}
