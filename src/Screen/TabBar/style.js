import React from 'react'
import { View, Text, StyleSheet,Dimensions } from 'react-native'

const {width} = Dimensions.get("window");

const styles=StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        // justifyContent:'center',
    },
    tabcontainer:{
        height:50,
        flexDirection:'row',
        marginTop:20,
        borderRadius:70,
        width:width-30,
        marginHorizontal:15,
        backgroundColor:'lightgrey',
        overflow:'hidden',
    },
    imageContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
    },
    
})

export default styles;
