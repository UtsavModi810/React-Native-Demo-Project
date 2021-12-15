import React from 'react';
import { Text, View, Image, StyleSheet, ImageComponent, ScrollView } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';

function HomeDetail({  route }) {
    const { avatar, email,first_name,last_name } = route.params;

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>

                </View>
                <Animatable.View style={styles.footer} animation="fadeInUpBig" iterationDelay={500}>
                    <Image style={styles.img} source={{uri : avatar}} />
                    <Text style={styles.text1}>{first_name}{'  '}{last_name}</Text>
                    <Text style={styles.text1}>{email}</Text>
                </Animatable.View>
            </View>
        </ScrollView>
    )
}


export default HomeDetail;