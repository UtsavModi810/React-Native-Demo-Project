// import React, { Component } from "react";
// import { Text, View,Button } from 'react-native'
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import Home from '../Home/Home';


// const Drawer = createDrawerNavigator();

// export function first() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         {/* <Button
//           onPress={() => navigation.navigate('second')}
          
//         /> */}
//         <Text>Hello FFirst</Text>
//       </View>
//     );
//   }
  
//   function second({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
//         <Text>Hello second</Text>

//       </View>
//     );
//   }

// class DrawerScreen extends Component{
//     render(){
//     console.log('drawer')

//         return(
//             <Drawer.Navigator>
//                 {/* <Drawer.Screen name="first" Component={first}/> */}
//                 <Drawer.Screen name="second" Component={second}/>

//             </Drawer.Navigator>
//         )
//     }
// }

// export default DrawerScreen;


import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home/Home';
import Setting from '../Setting/Setting';
import Bottomtab from '../Bottomtab/Bottomtab';
import UserProfile from '../UserProfile/UserProfile';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Bottomtab} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="UserProfile" component={UserProfile} />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}