import React, {useState} from 'react'
import { View,StyleSheet,Picker} from 'react-native'
import Iconc from 'react-native-vector-icons/dist/MaterialIcons';

const Pickers = (props) => {
    const [selectedValue, setSelectedValue] = useState("java");
    const {inputview,ic,input} = styles;
  
  
    return (
      <View style={styles.inputview}>
        <Iconc name={props.iconName}  style={styles.ic}> </Iconc>
        <Picker
          selectedValue={selectedValue}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Select country"  />
          <Picker.Item label="UK" value="UK" />
          <Picker.Item label="US" value="US" />
          <Picker.Item label="India" value="india" />
        </Picker>
      </View>
    )
}

export default Pickers

const styles = StyleSheet.create({
    inputview: {
     
        backgroundColor: "#ffffff",
        borderRadius: 30,
        width: "80%",
        height: 45,
        height: 60,
        marginBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        paddingLeft: 20,
    },
    ic: {

        fontSize: 25
    },
    input: {
        fontSize: 25,
        height: 50,
        flex: 1,
        marginLeft: 20,
        
    },
});