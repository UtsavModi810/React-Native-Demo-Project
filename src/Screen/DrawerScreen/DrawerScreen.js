import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home/Home';
import Setting from '../Setting/Setting';
import Bottomtab from '../Bottomtab/Bottomtab';
import UserProfile from '../UserProfile/UserProfile';
import GiphyScreen from '../GiphyScreen';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Bottomtab} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="UserProfile" component={UserProfile} />
        <Drawer.Screen name="Giphy" component={GiphyScreen}/>
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}