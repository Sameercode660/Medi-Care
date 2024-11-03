import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import MyAccount from './MyAccount';


const Drawer = createDrawerNavigator();

const index = () => {
  return (
      <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="MyAccount" component={MyAccount} />
        </Drawer.Navigator>
      </NavigationContainer>
  )
}

export default index