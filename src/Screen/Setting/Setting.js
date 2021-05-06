import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

class Setting extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Setting</Text>
                </View>

                <View style={styles.footer}>
                    <View style={styles.vi}>
                        <Icon name="person" style={styles.ic} />
                        <Text style={styles.text1}>

                            Parent Profile</Text>
                    </View>

                    <Text style={styles.text1}>

                        Terms & Condition</Text>

                    <Text style={styles.text1}>  

                        Contact & FAQs</Text>

                </View>


            </View>

        )
    }
}

export default Setting;