import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const GridImage = ({ image, width }) => {
  return (
    <View
      key={image.id}
      style={{
        width: width,
        height: width,
        marginVertical: 10,
       
      }}
    >
      <Image
        source={image.uri}
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode:'stretch'
        }}
      />
    </View>
  );
};

export default GridImage;

