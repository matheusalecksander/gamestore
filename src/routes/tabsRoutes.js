import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import { View, StyleSheet, Text } from 'react-native'

import StackRoutes from './stackRoutes'
import Cart from '../pages/Cart'
import themes from '../global/theme'

const Tab = createBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: themes.colors.background,
      },
    }}
    >
      <Tab.Screen
       name="Home"
       component={StackRoutes}
       options={
        {
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
              <Ionicons
               name="home-outline"
               size={24}
               color={focused ? themes.colors.secondary : themes.colors.primary}
                />
                <Text style={focused ? styles.labelTextFocused : styles.labelText}>HOME</Text>
            </View>
          )
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
              tabBarIcon: ({focused}) => (
                <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
                <Ionicons
                  name="cart-outline"
                  size={24}
                  color={focused ? themes.colors.secondary : themes.colors.primary}
                />
                  <Text style={focused ? styles.labelTextFocused : styles.labelText}>CARRINHO</Text>
              </View>
          )
            }
        }/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 10
  },
  iconContainerFocused: {
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderTopWidth: 3,
    borderTopColor: themes.colors.secondary,
    borderRadius: 10
  },
  labelText: {
    fontFamily: themes.fonts.textFont,
    fontSize: 12,
    color: themes.colors.primary
  },
  labelTextFocused: {
    fontFamily: themes.fonts.textFont,
    fontSize: 12,
    fontWeight: 'bold',
    color: themes.colors.secondary
  }
})

export default Tabs;