import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import Divider from '../../components/Divider'

import styles from './style'


export default function Cart() {
  const navigation = useNavigation()
  const route = useRoute()
  
  const [product, setProduct] = useState([{}])
  
  useEffect(() => {
    function getGame() {
      const game = route.params
      setProduct(game)
      console.log(product.length)
      console.log(product)
    } 
    function appendGame() {
      const game = route.params
      product.push(game)
    }
    if(product === undefined){
      getGame()
    }else{
      appendGame()
    }
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => console.log(product)}
        >
          <Text>Clique aqui</Text>
        </TouchableOpacity>
        <Text>lala</Text>
      </View>
      <Divider />
      <View style={styles.content}>
        <Text>PARTE DE BAIXO</Text>
      </View>
    </View>
  )
}
