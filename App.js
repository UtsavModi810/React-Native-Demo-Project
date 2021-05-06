import Login from "./src/Screen/Login/Login";
import Register from "./src/Screen/Register/Register";
import React,{useState,useEffect} from 'react';
import Home from "./src/Screen/Home/Home";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splashscreen from './src/Screen/SplashScreen/Splashscreen';
import HomeDetail from './src/Screen/HomeDetail/HomeDetail';
import Auth from './src/Authentication/Auth';
import UserProfile from "./src/Screen/UserProfile/UserProfile";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import Bottomtab from './src/Screen/Bottomtab/Bottomtab';
import RootNavigator from './src/router';


const Stack = createStackNavigator();


const App = () => {
  return(
    <RootNavigator/>
  )
  
}

export default App;
