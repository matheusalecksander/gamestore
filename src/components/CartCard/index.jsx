import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './style'

export default function CartCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: `https://raw.githubusercontent.com/projetos-matheusalecksander/gamestore/main/src/assets/${props.image}` }}
            style={styles.image} />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>{props.name}</Text>
          <Text style={styles.text}>R${props.price}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.text}>{props.quantity}</Text>
      </View>
    </View>
  )
}
