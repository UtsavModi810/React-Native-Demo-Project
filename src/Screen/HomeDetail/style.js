import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#161616',
        height:'100%',
        width:'100%',
    },
    header: {
        height: 150,
    },
    img:{
        marginTop:-70,
        alignSelf:'center',
        height:150,
        width:150,
        borderRadius: 200,
    },
    text1:{
        top:50,
        fontSize:30,
        fontWeight:'bold',
    },
    footer: {
        height:600,
       
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 80,
        borderTopRightRadius:80,
    },
})

export default styles;