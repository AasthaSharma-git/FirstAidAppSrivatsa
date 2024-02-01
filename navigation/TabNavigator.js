import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Introduction from '../screens/Introductions';
import Question from '../screens/Question';

const Tab = createMaterialTopTabNavigator();

export default class TabNavigator extends React.Component {
  render() {
    return (
     
        <Tab.Navigator>
          <Tab.Screen name="Introduction" component={Introduction} />
          <Tab.Screen name="Question" component={Question} />
        </Tab.Navigator>
     
    );
  }
}
