import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {incrementAction} from '../../Redux/reducer/common/action'


const mapStateToProps = (state) => {
  return {
    value:state.common,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      incrementAction,
    },
    dispatch,
  );


class Increment extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              backgroundColor: 'pink',
              width: '30%',
              justifyContent: 'center',
              height: '10%',
              alignItems: 'center',
            }}
            onPress={this.props.incrementAction}>
            <Text> Increment + 1 </Text>
          </TouchableOpacity>
          <Text>{this.props.value.stateValue}</Text>
        </View>
      </SafeAreaView>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Increment);
