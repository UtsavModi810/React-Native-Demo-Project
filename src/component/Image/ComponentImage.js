import React from 'react'
import { View,Text,StyleSheet,Image} from 'react-native'


const ComponentImage = () => {
    return (
        <View style={styles.StyleSheet}>
        <Image
        style={styles.tinyLogo}
        source={require('../../assets/img/Logo-porter.png')} />
      
          </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    tinyLogo: {
       
      
        height:200,
        width:200,
    }
});

export default ComponentImage