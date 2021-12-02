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
import {fetchUserRequest} from '../../Redux/action';
import {connect} from 'react-redux';
import HomeDetail from '../HomeDetail/HomeDetail';

import ComponentButton from '../../component/Button/ComponentButton';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.fetchUserRequest();
  }

  onRefresh = () => {
    this.setState({refreshing: true});
    this.props.fetchUserRequest();
    this.setState({refreshing: false});
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={1}
          keyExtractor={(item) => item.id.toString()}
          data={this.props.data}
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
                <View style={styles.show}>
                  <Image style={styles.img} source={{uri: item.avatar}}></Image>
                  <View style={styles.text}>
                    <Text style={styles.item}>{item.email}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('HomeDetail', item)
                    }>
                    <Right
                      name="keyboard-arrow-right"
                      style={{
                        fontSize: 50,
                        marginTop: 20,
                        marginRight: 15,
                        color: 'white',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            );
          }}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    data: state.data.data,
    error: state.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRequest: () => dispatch(fetchUserRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
