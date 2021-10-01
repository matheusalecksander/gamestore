import React from 'react'
import { ScrollView } from 'react-native'

import Header from '../../components/Header/'
import Card from '../../components/Card'

import styles from './style'

export default function Home() {
  const games = require('../../api/products.json')

  return (
    <ScrollView style={styles.container}>
      {/*       <Header /> */}
      {
        games.map((item, i) => {
          return (
            <Card
              key={i}
              image={item.image}
              name={item.name}
              score={item.score}
              price={item.price.toString().replace('.', ',')}
            />
          )
        })
      }
    </ScrollView>
  )
}
