import React from 'react';
import {View, Text, Image} from 'react-native';
import LoadingImage from '../../assets/img/loading.gif';

const loader = (props) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
        zIndex: 1,
      }}>
      <Image source={LoadingImage} style={{width: 100, height: 100}} loading={props.loading}/>
    </View>
  );
};

export default loader;
