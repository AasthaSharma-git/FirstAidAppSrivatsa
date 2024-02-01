import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import Search from '../screens/Search';
import Theme from '../screens/Theme';



const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="Search" component={Search} />
        <Drawer.Screen name="Theme" component={Theme} />
      </Drawer.Navigator>
    );
  }
}
