import { Component } from "react";
import React from 'react';
import styles from './style';
import Input from '../../component/Input/Input'
import ComponentButton from '../../component/Button/ComponentButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, ScrollView,Image } from "react-native";
import * as Animatable from 'react-native-animatable';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            mobileno: '',

        }
    }
    checkAuth = async () => {
        // debugger
        try {
            let user = await AsyncStorage.getItem('Register');
            let parsed = JSON.parse(user);
            console.log('auth--', user)
            //debugger
            console.log("parsed-", parsed.email, parsed.password)
            this.setState({ firstname: parsed.firstname, lastname: parsed.lastname, email: parsed.email, mobileno: parsed.mobileno })


        } catch (error) {
            alert(error);
        }
    };

    componentDidMount() {


        // let obj = {
        //   name: 'utsav',
        //   email: 'utsav@gmail.com',
        //   password: 'Ut$av1234',
        // };
        /*AsyncStorage.setItem('user',user);*/
        // AsyncStorage.setItem('user', JSON.stringify(obj));
        this.checkAuth();
    }



    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.header}>
                       
                    </View>

                    <Animatable.View style={styles.footer} animation="fadeInUpBig" iterationDelay={500}>
                        <Image style={styles.img} source={require('../../assets/img/ironman.jpg')}/>
                    <View style={styles.text}>
                        <Input iconName="person-pin-circle" value={this.state.firstname} />
                        <Input iconName="person-pin-circle" value={this.state.lastname} />
                        <Input iconName="email" value={this.state.email} />
                        <Input iconName="contact-page" value={this.state.mobileno} />
                    </View>
                        <ComponentButton label="LOGOUT" onPress={() => this.props.navigation.navigate('Login')} />
                     
                    </Animatable.View>
                </View>
            </ScrollView>
        )
    }
}


export default UserProfile;