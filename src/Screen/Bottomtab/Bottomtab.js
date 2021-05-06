import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Home from '../../Screen/Home/Home';
import Setting from '../Setting/Setting'
import Routes from '../../router/routes';

const Tab = createBottomTabNavigator();

class Bottomtab extends Component {
    render() {
      
        return (
            <Tab.Navigator
                initialRouteName={Routes.Home}
                tabBarOptions={{
                    labelStyle: {fontSize: 15,},
                    activeTintColor: '#03506f',
                    style:{height:65}
                }}
            >
                <Tab.Screen
                    name={Routes.Home}
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={30} />
                        ),
                    }}
                />

                <Tab.Screen
                    name={Routes.Setting}
                    component={Setting}
                    options={{
                        tabBarLabel: 'Setting',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="settings" color={color} size={30} />
                        ),
                    }}
                />

            </Tab.Navigator>
        )
    }
}

export default Bottomtab;
