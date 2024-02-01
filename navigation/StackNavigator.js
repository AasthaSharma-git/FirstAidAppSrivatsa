import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator'
import Instructions from '../screens/Instructions';
const Stack = createStackNavigator();

export default class StackNavigator extends React.Component {
  render() {
    return (
     
        <Stack.Navigator>
          <Stack.Screen name="Tab" component={TabNavigator} />
          <Stack.Screen name="Instructions" component={Instructions} />
        </Stack.Navigator>
     
    );
  }
}
