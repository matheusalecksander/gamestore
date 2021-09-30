import React from 'react'
import { View, Text, Image } from 'react-native'
import Divider from '../Divider'
import styles from './style'

export default function Card() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require(`../../assets/call-of-duty-infinite-warfare.png`)}
            style={styles.image} />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>Call Of Duty Infinite Warfare</Text>
          < Text style={styles.text}>Popularidade: 80</Text>
          <Text style={styles.text}>R$ <Text style={styles.title}>49,99</Text></Text>
          <Text style={styles.text}>R$10,00 de frete</Text>
        </View>
      </View>
      <Divider />
    </>
  )
}
