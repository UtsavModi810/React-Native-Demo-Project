import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {connect} from 'react-redux'

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
        </View>
      </SafeAreaView>
    );
  }
}
const mapstatetopropss = (state) =>{
  return{
    value:state.common,
  }
}

export default connect(mapstatetopropss)(IncrementDecrement);
