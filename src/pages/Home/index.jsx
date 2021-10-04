import React from 'react'
import { ScrollView } from 'react-native'

import SearchBar from '../../components/SearchBar/'
import Card from '../../components/Card'

import styles from './style'


export default function Home() {
  const games = require('../../api/products.json')

  return (
    <>
      <ScrollView style={styles.container}>
        <SearchBar />
        {
          games.map((item, i) => {
            return (
              <Card
                key={i}
                image={item.image}
                name={item.name}
                score={item.score}
                price={item.price.toFixed(2).replace('.', ',')}
              />
            )
          })
        }
      </ScrollView>
    </>
  )
}
