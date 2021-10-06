import React, { useState, useEffect } from 'react'
import { View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'
import themes from '../../global/theme'

import Divider from '../../components/Divider'

import Card from '../../components/Card'

import styles from './style'


export default function Home() {
  const products = require('../../api/products.json')
  const [searchText, setSearchText] = useState('')
  const [games, setGames] = useState(products)
  const [options, setOptions] = useState('closed')
  const [sort, setSort] = useState('score')

  useEffect(() => {
    if (searchText === '') {
      setGames(products)
    } else {
      setGames(
        products.filter((item) => {
          if (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
            return true
          } else {
            return false
          }
        }))
    }
  }, [searchText])

  function sortByNameAZ() {
    let sortedList = [...products]

    sortedList.sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0)

    setGames(sortedList)
  }
  function sortByNameZA() {
    let sortedList = [...products]

    sortedList.sort((a, b) => (b.name > a.name) ? 1 : (a.name > b.name) ? -1 : 0)

    setGames(sortedList)
  }
  function sortByLowerPrice() {
    let sortedList = [...products]

    sortedList.sort((a, b) => (a.price > b.price) ? 1 : (b.price > a.price) ? -1 : 0)

    setGames(sortedList)
  }
  function sortByHigherPrice() {
    let sortedList = [...products]

    sortedList.sort((a, b) => (b.price > a.price) ? 1 : (a.price > b.price) ? -1 : 0)


    setGames(sortedList)
  }
  function sortByScore() {
    let sortedList = [...products]

    sortedList.sort((a, b) => (b.score > a.score) ? 1 : (a.score > b.score) ? -1 : 0)


    setGames(sortedList)
  }

  return (
    <View style={styles.container}>
      {
        options === "closed" ?
          <View style={styles.closedOptionsContainer}>
            <View style={styles.wrapperButton}>
              <TouchableOpacity
                style={styles.orderBy}
                onPress={() => { setOptions("opened") }}
              >
                <Text style={styles.logoPurple}>Ordenar:</Text>
                <FontAwesome name="chevron-down" size={18} color={themes.colors.secondary} />
              </TouchableOpacity>
            </View>
            <View style={styles.wrapperInput}>
              <TextInput
                style={styles.input}
                placeholder="Pesquise seus jogos"
                value={searchText}
                onChangeText={(t) => setSearchText(t)} />
              <FontAwesome name="search" size={18} color={themes.colors.primary} />
            </View>
          </View>
          :
          <View style={styles.openedOptionsContainer}>
            <View style={styles.wrapperButtons}>
              <View style={styles.wrapperButton}>
                <TouchableOpacity
                  style={styles.orderBy}
                  onPress={() => { setOptions("closed") }}
                >
                  <Text style={styles.logoPurple}>Ordenar:</Text>
                  <FontAwesome name="chevron-up" size={18} color={themes.colors.secondary} />
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperInput}>
                <TextInput
                  style={styles.input}
                  placeholder="Pesquise seus jogos"
                  value={searchText}
                  onChangeText={(t) => setSearchText(t)} />
                <FontAwesome name="search" size={18} color={themes.colors.primary} />
              </View>
            </View>

            <View style={styles.optionsWrapper}>
              <TouchableOpacity style={styles.sortOption}
                onPress={() => sortByNameAZ()}
              >
                <Text style={styles.optionText}>
                  Nome(A-Z)
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sortOption}
                onPress={() => sortByNameZA()}
              >
                <Text style={styles.optionText}>
                  Nome(Z-A)
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sortOption}
                onPress={() => sortByLowerPrice()}
              >
                <Text style={styles.optionText}>
                  Menor Preço
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sortOption}
                onPress={() => sortByHigherPrice()}
              >
                <Text style={styles.optionText}>
                  Maior Preço
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sortOption}
                onPress={() => sortByScore()}
              >
                <Text style={styles.optionText}>
                  Score
                </Text>
              </TouchableOpacity>
            </View>
          </View>
      }

      <Divider />

      <FlatList
        data={games}
        renderItem={({ item }) =>
          <Card
            image={item.image}
            name={item.name}
            score={item.score}
            price={item.price.toFixed(2).replace('.', ',')}
          />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View >)
}
