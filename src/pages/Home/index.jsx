import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native'

import SearchBar from '../../components/SearchBar/'
import Card from '../../components/Card'

import Detail from '../Detail'

import styles from './style'
import themes from '../../global/theme'


export default function Home() {
  const games = require('../../api/products.json')
  const Stack = createNativeStackNavigator()


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
                price={item.price.toString().replace('.', ',')}
              />
            )
          })
        }
      </ScrollView>
    </>
  )
}
