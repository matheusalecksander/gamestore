import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import Divider from '../../components/Divider'
import CartCard from '../../components/CartCard'

import styles from './style'


export default function Cart() {
  const navigation = useNavigation()
  const route = useRoute()

  const [product, setProduct] = useState([])

  useEffect(() => {
    function getProduct() {
      if (route.params != null) {
        const newProduct = route.params
        setProduct([...product, { ...newProduct }])
        console.log(product.length)
        console.log(product)
      }
    }
    getProduct()
  }, [route.params]
  )
  return (
    <View style={styles.container}>
      <View style={styles.cartContent}>
        <TouchableOpacity
          onPress={() => console.log(product)}
        >
          <Text>Clique aqui</Text>
        </TouchableOpacity>
        <View style={styles.cartHeader}>
          <Text>Produto</Text>
          <Text>Quantidade</Text>
        </View>
        {
          product.length > 0 ?
            <FlatList
              data={product}
              renderItem={({ item }) =>
                <CartCard
                  image={item[0].image}
                  name={item[0].name}
                  price={item[0].price}
                  quantity={item[1]}
                />}
              showsVerticalScrollIndicator={false}
            />
            :
            <Text>O Carrinho está vazio</Text>
        }
      </View>
      <Divider />
      <View style={styles.finishContent}>
        <Text>PARTE DE BAIXO</Text>
      </View>
    </View>
  )
}
