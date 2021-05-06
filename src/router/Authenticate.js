import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import  Routes from  './routes';
import Home from '../Screen/Home/Home';
import HomeDetail from '../Screen/HomeDetail/HomeDetail'; 
import Profile from '../Screen/UserProfile/UserProfile';
import Setting from '../Screen/Setting/Setting';
import Bottomtab from '../Screen/Bottomtab/Bottomtab';
import UserProfile from '../Screen/UserProfile/UserProfile';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import DrawerScreen from '../Screen/DrawerScreen/DrawerScreen';

const Stack = createStackNavigator();


const Authenticate = () =>{
    console.log('form  Authenticate');
    return(
        <Stack.Navigator>
            
            <Stack.Screen name={Routes.Home} component={DrawerScreen}
            options={({ navigation }) => ({
                title: 'Home',
                  headerStyle: {
                    backgroundColor: '#fff',
                  },
                  headerTintColor: '#000',headerTitleAlign:'center',
                  headerRight:()=>(<TouchableOpacity onPress={()=>navigation.navigate('UserProfile')}>
                <Icon
                  name='person' //"person-outline"
                  color="#000"
                  size={35}
                  
                  style={{ marginRight: 20}}
                />
              </TouchableOpacity>)
              }) } 
              />
             
            <Stack.Screen name={Routes.HomeDetail} component={HomeDetail}/>
            <Stack.Screen name={Routes.UserProfile} component={UserProfile}/>
            <Stack.Screen name={Routes.Setting} component={Setting}/> 
        </Stack.Navigator>
    )
}

export default Authenticate;

