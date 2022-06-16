import { Text, View } from 'react-native'
import React from 'react'
import DrawerNavigator from './navigation/DrawerNavigator'
import BottomTabNavigator from './navigation/TabNavigator'

export default class App extends React.Component {
  render() {
    return (

      <DrawerNavigator />

    )
  }
}