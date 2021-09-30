import React from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import styles from './style'
import themes from '../../global/theme'

export default function Divider() {
  return (
      <LinearGradient 
        colors={[themes.colors.primary, themes.colors.secondary]}
        style={styles.divider}
        start={[0, 1]}
        end={[1, 0]}
        />
  )
}