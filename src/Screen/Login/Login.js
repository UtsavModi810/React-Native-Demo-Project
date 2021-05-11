import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import styles from './style';
import Input from '../../component/Input/Input'
import ComponentButton from '../../component/Button/ComponentButton'
import * as Animatable from 'react-native-animatable';
// import validation from 'validate.js';
import Routes from '../../router/routes';
import {validation} from '../../utils/ValidationUtils'
// import AsyncStorage from '@react-native-community/async-storage'


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            emailError:'',
            password:'',
            passwordError:''
        }
    }

    Checked_blank = () =>{
        let emailError,
        passwordError,
        isValid;

        emailError = validation('email',this.state.email)
        passwordError = validation('password',this.state.password)

        if(emailError!=null || passwordError!=null){
            this.setState({
                emailError:emailError,
                passwordError:passwordError,
            });
            isValid=false
        }
        else{
            this.setState({
                emailError:"",
                passwordError:"",
            })
            isValid=true
        }
        if(isValid){
            let obj={
                email:this.state.email,
                password:this.state.password,            
            }
            this.props.navigation.navigate(Routes.Auth,{email:this.state.email,password:this.state.password})
        };
       
    }
    making_api_call = () =>{
        if(this.Checked_blank()){
            this.props.navigation.navigate(Routes.Home)
        }
    }

   
    render() {
        return (
       
            <ScrollView style={styles.container}>
                

                
                    <View style={styles.header}>
                        <Text style={styles.text}>Login</Text>
                    </View>

                   
                    <Animatable.View style={styles.footer} animation="fadeInUpBig" iterationDelay={500}>

                   
                        <Input iconName="email" placeholder="Enter email" 
                         onChangeText={text => this.setState({email: text})}
                         value={this.state.email}
                         error={this.state.emailError}/>
                          <Text>{this.state.emailError}</Text>



                        <Input iconName="lock" placeholder="Enter password" visible='true' 
                         onChangeText={text => this.setState({password: text})}
                         value={this.state.password}
                         error={this.state.passwordError}/>
                         <Text>{this.state.passwordError}</Text>
                        

                        <ComponentButton label='Sign In' onPress={() => this.making_api_call()} />

                        <Text style={styles.text1} onPress={() => this.props.navigation.navigate('Register')}> Need You Have Account? Click Here </Text>
                        
                       
                    </Animatable.View>
                    
            

                
            </ScrollView>
        
        )
    }
   

};



export default Login;