import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    img: {
        alignSelf:'center',
        height:'70%',
        width: '20%',
        marginTop:5,
        marginLeft:10,
        resizeMode: 'contain',
        borderRadius: 90 / 2,
    },
    show: {
        height: 100,
        flex: 1,
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: '#03506f',
        flexDirection: 'row',
    },
    item: {
        color: 'white',
        fontSize: 20,
    },
    email: {
        color: 'white',

        fontSize: 20,
    },
    text: {
        alignSelf:'center',
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 20,
    },

});

export default styles;