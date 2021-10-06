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
  const [frete, setFrete] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [total, setTotal] = useState(0)

  function reset() {
    setProduct([]),
      setFrete(0),
      setSubTotal(0),
      setTotal(0)
  }

  function handleFrete() {
    if (subTotal > 250) {
      setFrete(0)
    } else {
      setFrete(frete + 10)
    }
  }

  function handleTotal() {
    setTotal(subTotal + frete)
  }

  useEffect(() => {
    function getProduct() {
      const newProduct = route.params
      setProduct([...product, { ...newProduct }]) // Adiciona um novo produto ao carrinho

      const quantidade = newProduct[1]
      const price = parseFloat(newProduct[0].price.replace(',', '.')) // Formata o preço para calcularmos o valor total da compra
      setSubTotal(price * quantidade + subTotal)
    }

    if (route.params != null) {
      getProduct()

      handleFrete()
      handleTotal()
    }

  }, [route.params])

  return (
    <View style={styles.container}>
      <View style={styles.cartContent}>
        <View style={styles.cartHeader}>
          <Text style={styles.title}>Produto</Text>
          <Text style={styles.title}>Quantidade</Text>
        </View>
        <Divider />
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
                />
              }
              keyExtractor={(item, i) => i.toString()}
              showsVerticalScrollIndicator={false}

            />
            :
            <Text style={styles.alert}>O Carrinho está vazio</Text>
        }
      </View>
      <Divider />
      <View style={styles.finishContent}>
        {
          product.length > 0 ?
            <View style={styles.finishWrapper}>
              <Text style={styles.finishTitle}>Finalize seu pedido</Text>
              <View style={styles.textWrapper}>
                <View>
                  <Text style={styles.wrapperTitle}>Frete:</Text>
                  <Text>R${frete.toFixed(2).replace('.', ',')}</Text>
                </View>

                <View>
                  <Text style={styles.wrapperTitle}>SubTotal:</Text>
                  <Text>R${subTotal.toFixed(2).replace('.', ',')}</Text>
                </View>

                <View>
                  <Text style={styles.wrapperTitle}>Total:</Text>
                  <Text>R${total.toFixed(2).replace('.', ',')}</Text>
                </View>

              </View>

              <TouchableOpacity
                onPress={() => reset()}
                style={styles.removeButton}
              >
                <Text style={styles.removeText}>Remover itens do carrinho</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.finishButton}
                onPress={() => reset()}
              >
                <Text style={styles.finishText}>Finalizar Compra</Text>
              </TouchableOpacity>
            </View>
            :
            <Text>Não há itens em seu carrinho, volte as compras</Text>

        }
      </View>
    </View>
  )
}
