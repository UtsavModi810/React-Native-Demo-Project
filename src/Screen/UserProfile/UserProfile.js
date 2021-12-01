import { Component } from "react";
import React from 'react';
import styles from './style';
import Input from '../../component/Input/Input'
import ComponentButton from '../../component/Button/ComponentButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, ScrollView,Image } from "react-native";
import * as Animatable from 'react-native-animatable';
import {CommonActions} from '@react-navigation/routers';

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

    componentDidMount() {
        this.checkAuth();
    }

    checkAuth = async () =>{
        var user = await AsyncStorage.getItem('Register');
        var parsed = JSON.parse(user);
        this.setState({
            firstname:parsed.firstname,
            lastname:parsed.lastname,
            email:parsed.email,
            phoneNo:parsed.phoneNo,
        });
        AsyncStorage.setItem('Register',JSON.stringify(user));

    };

    resetStack = CommonActions.reset({
        index:0,
        routes:[{name:'SplashScreen'}],
    });
    
    removeAuthentication = async () =>{
        try{
            await AsyncStorage.clear();
            this.props.navigation.dispatch(this.resetStack);
        }catch(e){}
    };



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
                        <Input iconName="contact-page" value={this.state.phoneNo} />
                    </View>
                        <ComponentButton label="LOGOUT" onPress={this.removeAuthentication} />
                     
                    </Animatable.View>
                </View>
            </ScrollView>
        )
    }
}


export default UserProfile;