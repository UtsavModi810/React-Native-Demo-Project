import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from './routes';
import Home from '../Screen/Home/Home';
import HomeDetail from '../Screen/HomeDetail/HomeDetail';
import Profile from '../Screen/UserProfile/UserProfile';
import Setting from '../Screen/Setting/Setting';
// import Bottomtab from '../Screen/Bottomtab/Bottomtab';
import UserProfile from '../Screen/UserProfile/UserProfile';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// import DrawerScreen from '../Screen/DrawerScreen/DrawerScreen';
import GiphyScreen from '../Screen/GiphyScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../Screen/TabBar';
import SwipeCard from '../Screen/SwipeCard';
import Increment from '../Screen/Increment';
import Decrement from '../Screen/Decrement';
import IncrementDecrement from '../Screen/IncrementDecrement';
import ToDo from '../Screen/ToDo';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Icon name="menu" color="#000" size={35} style={{marginLeft: 20}} />
      </TouchableOpacity>
    </View>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Setting':
      return 'Setting';
  }
};

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      tabBarOptions={{
        labelStyle: {fontSize: 15},
        activeTintColor: '#03506f',
        style: {height: 50},
      }}>
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Setting}
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen
        name="Home"
        component={BottomTabStack}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerStyle: {
            backgroundColor: '#fff',
          },

          headerTintColor: '#000',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),

          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('UserProfile')}>
              <Icon
                name="person"
                color="#000"
                size={35}
                style={{marginRight: 20}}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name={Routes.HomeDetail}
        component={HomeDetail}
        options={{
          title: 'HomeDetail',
        }}
      />
      <Stack.Screen
        name={Routes.UserProfile}
        component={UserProfile}
        options={{
          title: 'UserProfile',
        }}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Setting}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        title: 'setting',
        headerStyle: {
          backgroundColor: '#fff',
        },

        headerTintColor: '#000',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={Routes.Setting}
        component={Setting}
        options={{
          title: 'Setting',
        }}
      />
    </Stack.Navigator>
  );
};

const GiphyScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.GiphyScreen}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        title: 'Giphy',
        headerStyle: {
          backgroundColor: '#fff',
        },

        headerTintColor: '#000',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={Routes.GiphyScreen}
        component={GiphyScreen}
        options={{
          title: 'Giphy',
        }}
      />
    </Stack.Navigator>
  );
};

const TabBarStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.TabBar}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        title: 'TabBar',
        headerStyle: {
          backgroundColor: '#fff',
        },

        headerTintColor: '#000',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={Routes.TabBar}
        component={TabBar}
        options={{
          title: 'TabBar',
        }}
      />
    </Stack.Navigator>
  );
};

const SwipeCardStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.SwipeCard}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        title: 'SwipeCard',
        headerStyle: {
          backgroundColor: '#fff',
        },

        headerTintColor: '#000',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={Routes.SwipeCard}
        component={SwipeCard}
        options={{
          title: 'SwipeCard',
        }}
      />
    </Stack.Navigator>
  );
};

const IncrementStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Increment}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        title: 'Increment',
        headerStyle: {
          backgroundColor: '#fff',
        },

        headerTintColor: '#000',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={Routes.Increment}
        component={Increment}
        options={{
          title: 'Increment',
        }}
      />
    </Stack.Navigator>
  );
};

const DecrementStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Decrement}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        title: 'Decrement',
        headerStyle: {
          backgroundColor: '#fff',
        },

        headerTintColor: '#000',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={Routes.Decrement}
        component={Decrement}
        options={{
          title: 'Decrement',
        }}
      />
    </Stack.Navigator>
  );
};

const IncrementDecrementStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.IncrementDecrement}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        title: 'IncrementDecrement',
        headerStyle: {
          backgroundColor: '#fff',
        },

        headerTintColor: '#000',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={Routes.IncrementDecrement}
        component={IncrementDecrement}
        options={{
          title: 'IncrementDecrement',
        }}
      />
    </Stack.Navigator>
  );
};

const ToDoStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.ToDo}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        title: 'ToDo',
        headerStyle: {
          backgroundColor: '#fff',
        },

        headerTintColor: '#000',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={Routes.ToDo}
        component={ToDo}
        options={{
          title: 'ToDo',
        }}
      />
    </Stack.Navigator>
  );
};

const Authenticate = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home Screen"
        options={{drawerLabel: 'Home'}}
        component={HomeScreenStack}
      />

      <Drawer.Screen
        name="Setting Screen"
        options={{drawerLabel: 'Setting'}}
        component={SettingScreenStack}
      />
      <Drawer.Screen
        name="Giphy Screen"
        options={{drawerLabel: 'Giphy'}}
        component={GiphyScreenStack}
      />
      <Drawer.Screen
        name="TabBar Screen"
        options={{drawerLabel: 'TabBar'}}
        component={TabBarStack}
      />
      <Drawer.Screen
        name="Swipe Screen"
        options={{drawerLabel: 'SwipeCard'}}
        component={SwipeCardStack}
      />

      <Drawer.Screen
        name="Increment Screen"
        options={{drawerLabel: 'Increment'}}
        component={IncrementStack}
      />

      <Drawer.Screen
        name="Decrement Screen"
        options={{drawerLabel: 'Decrement'}}
        component={DecrementStack}
      />

      <Drawer.Screen
        name="IncrementDecrement Screen"
        options={{drawerLabel: 'IncrementDecrement'}}
        component={IncrementDecrementStack}
      />

<Drawer.Screen
        name="ToDo Screen"
        options={{drawerLabel: 'ToDo'}}
        component={ToDoStack}
      />
    </Drawer.Navigator>
  );
};

export default Authenticate;
