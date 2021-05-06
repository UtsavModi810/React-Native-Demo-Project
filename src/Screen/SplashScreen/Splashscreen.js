import React, { Component } from 'react';
import styles from './style';
import { StyleSheet, View,Image,} from 'react-native';
import Routes from '../../router/routes';
import { CommonActions } from '@react-navigation/routers';
import AsyncStorage from '@react-native-async-storage/async-storage';

class SplashScreen extends Component{

  resetToAuth = CommonActions.reset({
    index:0,
    routes:[
      {name:Routes.Authenticate},
    ],
  })

  resetToNotAuth = CommonActions.reset({
    index:0,
    routes:[
      {name:Routes.NotAuthenticate},
    ],
  })

  componentDidMount() {
    console.log('Splash didMount');
    this.checkAuthentication();
  }

  checkAuthentication = async () => {
    let authenticated = await AsyncStorage.getItem('Register');
    console.log('checkAuth Authenticated val - ', authenticated);
    if (authenticated != null) {
      // this.setState({ isAuthenticated: true });
      this.goTo(true);
    } else {
      // this.setState({ isAuthenticated: false });
      this.goTo(false);
    }
  };

  goTo = (value) => {
    if (value) {
        setTimeout(() => {
            this.props.navigation.dispatch(this.resetToAuth);
        }, 2000);
    } else {
        setTimeout(() => {
            this.props.navigation.dispatch(this.resetToNotAuth);
        }, 2000);
    }
}

  render(){
    return (
      <View style={styles.SplashScreen_RootView}>
  
        <Image source={require('../../assets/img/truck.gif')} style={styles.logo} />
  
      </View>
    );

  }
  
}


export default SplashScreen;