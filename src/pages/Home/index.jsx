import React from 'react'
import { View, FlatList } from 'react-native'

import SearchBar from '../../components/SearchBar/'
import Card from '../../components/Card'

import styles from './style'


export default function Home() {
  const games = require('../../api/products.json')

  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        data={games}
        renderItem={({ item }) =>
          <Card
            image={item.image}
            name={item.name}
            score={item.score}
            price={item.price}
          />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
