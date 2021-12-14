import React from 'react';
import RootNavigator from './src/router';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import {NetworkProvider, NetworkConsumer} from 'react-native-offline';
import style from './src/utils/commonStyles';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <NetworkProvider>
        <NetworkConsumer>
          {({isConnected}) => (
            <View style={{flex: 1}}>
              {!isConnected ? (
                <View style={style.nointernetMessage}>
                  <Text style={style.nointernetText}>
                    {' '}
                    No Internet connection !
                  </Text>
                </View>
              ) : null}
              <RootNavigator />
            </View>
          )}
        </NetworkConsumer>
      </NetworkProvider>
    </Provider>
  );
};

export default App;
