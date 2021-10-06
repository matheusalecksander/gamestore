import React, { useState, useEffect } from 'react'
import { View, Text, TextInput } from 'react-native'

import { FontAwesome } from '@expo/vector-icons' 

import styles from './style'
import Divider from '../Divider'

import themes from '../../global/theme'     

export default function SearchBar() {
  const games = require('../../api/products.json')

  return (
    <>
      <View style={styles.container} >
        <View style={styles.orderBy}>
          <Text style={styles.logoPurple}>Ordenar:</Text>
          <FontAwesome name="chevron-down" size={18} color={themes.colors.secondary} />
        </View>
        <TextInput style={styles.input} placeholder="Pesquise seus jogos" />
        <FontAwesome name="search" size={18} color={themes.colors.primary} />
      </View>
      <Divider />
    </>
  )
}
