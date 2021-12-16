import React, {Component} from 'react';
import {View, Text, NativeModules, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const {RNTwitterSignIn} = NativeModules;

const APIKEY = {
    TWITTER_CONSUMER_KEY: 'sPeIIVfg9EbJ9WXh8JB4XvU3u',
    TWITTER_CONSUMER_SECRET: 'XRJeT4DCGMHWWndN226UF7uhM5UzRPbDp1mlFmDtbSdA89Ydro',
  };

class Setting extends Component {
  _twitterLogin = () => {
    RNTwitterSignIn.init(
      APIKEY.TWITTER_CONSUMER_KEY,
      APIKEY.TWITTER_CONSUMER_SECRET,
    )

    RNTwitterSignIn.logIn()
      .then(loginData => {
        console.log(loginData, 'loginData');
      })
      .catch(error => {
        console.log('error', error);
      });
    // RNTwitterSignIn.logIn()
    //   .then(loginData => {
    //     console.log(loginData, 'loginData');
    //   })
    //   .catch(error => {
    //     console.log('error', error);
    //   });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this._twitterLogin}
          style={{backgroundColor: '#1DA1F2', padding: 10, borderRadius: 8}}>
          <Text>Twitter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Setting;
