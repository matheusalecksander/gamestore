import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import StackRoutes from './stackRoutes'
import Cart from '../pages/Cart'
import themes from '../global/theme'

const Tab = createBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
       name="Home"
       component={StackRoutes}
       options={
        {
          headerShown: false
        }
      }/>
      <Tab.Screen 
        name="Carrinho"
        component={Cart} 
        options={
            {
              headerTintColor: themes.colors.primary,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
            }
        }/>
    </Tab.Navigator>
  )
}

export default Tabs;