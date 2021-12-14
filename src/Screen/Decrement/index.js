import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {decrementAction} from '../../Redux/reducer/common/action';

const mapStateToProps = (state) => {
  return {
    value:state.common,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      decrementAction,
    },
    dispatch,
  );

class Decrement extends Component {

  render() {
    console.log('decrement',this.props.value.stateValue)
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
              flexDirection: 'row',
              justifyContent: 'center',
              height: '10%',
              alignItems: 'center',
            }}
            onPress={this.props.decrementAction}>
            <Text> Decrement - 1 </Text>
          </TouchableOpacity>
          <Text>{this.props.value.stateValue}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Decrement);
