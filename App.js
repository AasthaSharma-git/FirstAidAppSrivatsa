import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
 
import TabNavigator from './navigation/TabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';



export default class App extends React.Component {
  render() {
    return (
    <NavigationContainer>
    <DrawerNavigator/>
    </NavigationContainer>
    );
  }
}
