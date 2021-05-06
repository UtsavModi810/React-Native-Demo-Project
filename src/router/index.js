import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import Authenticate from './Authenticate';
import NotAuthenticate from './NotAuthenticate';
import SplashScreen from '../Screen/SplashScreen/Splashscreen';

const Stack = createStackNavigator();

class RootNavigator extends Component {
    render(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={Routes.SplashScreen}>
                <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
                <Stack.Screen name={Routes.Authenticate} component={Authenticate} />
                <Stack.Screen name={Routes.NotAuthenticate} component={NotAuthenticate} />
            </Stack.Navigator>
        </NavigationContainer>
    );
    };
}


export default RootNavigator;