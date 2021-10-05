import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'
import Detail from '../pages/Detail'

import themes from '../global/theme'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
       name="GameStore"
       component={Home}
       options={
        {
          headerTintColor: themes.colors.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }} />
      <Stack.Screen
      name="Detalhes"
      component={Detail}
      options={
        {
          headerTintColor: themes.colors.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
    />
    </Stack.Navigator>
  )
}