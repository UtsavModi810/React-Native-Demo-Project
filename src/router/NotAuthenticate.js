import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import Login from '../Screen/Login/Login';
import Register from '../Screen/Register/Register';
import Auth from '../Authentication/Auth';

const Stack = createStackNavigator();

const NotAuthenticate = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name={Routes.Login} component={Login} options={{headerShown:false}}/>
            <Stack.Screen name={Routes.Auth} component={Auth} options={{headerShown: false}}/>
            <Stack.Screen name={Routes.Register} component={Register} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default NotAuthenticate;