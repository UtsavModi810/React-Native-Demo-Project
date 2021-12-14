import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ComponentButton from '../../component/Button/ComponentButton';
import {clearAction} from '../../Redux/reducer/common/action'

class IncrementDecrement extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderWidth: 1,
              backgroundColor: 'pink',
              width: '30%',
              flexDirection: 'row',
              justifyContent: 'center',
              height: '10%',
              alignItems: 'center',
            }}>
            <Text> Show Value </Text>
            <Text>= {this.props.value.stateValue}</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <ComponentButton label="Clear" onPress={this.props.clearAction} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    value: state.common,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      clearAction,
    },
    dispatch,
  );


export default connect(mapStateToProps,mapDispatchToProps)(IncrementDecrement);
