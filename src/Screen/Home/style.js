import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    img: {
        height: 90,
        width: 90,
        marginTop:5,
        marginLeft:5,
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

        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 20,
    },

});

export default styles;