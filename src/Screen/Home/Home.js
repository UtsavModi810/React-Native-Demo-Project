import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import styles from './style';
import Right from 'react-native-vector-icons/dist/MaterialIcons';
// import {fetchUserRequest} from '../../Redux/action';
import { homeAction } from '../../Redux/reducer/common/action';
import {connect} from 'react-redux';
import HomeDetail from '../HomeDetail/HomeDetail';

import ComponentButton from '../../component/Button/ComponentButton';
import { bindActionCreators } from 'redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  onRefresh = () => {
    this.setState({refreshing: true});
    this.props.homeAction();
    this.setState({refreshing: false});
  };
0
  render() {
    console.log('123',this.props.home)
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
          data={this.props.home}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          renderItem={({item}) => {
            return (
              <SafeAreaView style={{flex: 1}}>
                 <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('HomeDetail', item)
                    }>
                <View style={styles.show}>
                  <Image style={styles.img} source={{uri: item.avatar}}></Image>
                  <View style={styles.text}>
                    <Text style={styles.item}>{item.email}</Text>
                  </View>
                  <View>
                 
                    <Right
                      name="keyboard-arrow-right"
                      style={{
                        fontSize: 50,
                        marginTop: 20,
                        marginRight: 15,
                        color: 'white',
                      }}
                    />
                  
                  </View>
                </View>
                </TouchableOpacity>
              </SafeAreaView>
            );
          }}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    home:state.common.home
    // loading: state.loading,
    // data: state.data.data,
    // error: state.error,
  };
};
const mapDispatchToProps = dispatch => 
  bindActionCreators(
    {
      homeAction,
    },
    dispatch,
  ) 
 

export default connect(mapStateToProps, mapDispatchToProps)(Home);
