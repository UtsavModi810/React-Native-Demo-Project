import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import styles from './style';
import Input from '../../component/Input/Input'
import ComponentButton from '../../component/Button/ComponentButton';
import Pickers from '../../component/Picker/Picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import {validation,PasswordValidate} from '../../utils/ValidationUtils';
import Routes from '../../router/routes';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      firstnamerror: '',
      lastname: '',
      lastnamerror: '',
      email: '',
      emailError: '',
      phoneNo: '',
      phoneError:'',
      password: '',
      passwordError:'',
      confirmpassword:'',
      confirmpasswordError:'',
    };
  }

  check_validate = () =>{
    let firstnamerror,
    lastnamerror,
     emailError,
     phoneError,
    passwordError,
    confirmpasswordError,
    isValid;

    firstnamerror = validation('name', this.state.firstname);
    lastnamerror = validation('name',this.state.lastname);
    emailError = validation('email',this.state.email);
    phoneError = validation('phoneNo',this.state.phoneNo);
    passwordError = validation('password',this.state.password);
    confirmpasswordError = PasswordValidate(this.state.password,this.state.confirmpassword)
   

    if(firstnamerror!=null || lastnamerror!=null || emailError!=null || phoneError!=null || passwordError!= null || confirmpasswordError !=null)
    {
        this.setState({
          firstnamerror:firstnamerror,
          lastnamerror:lastnamerror,
          emailError:emailError,
          phoneError:phoneError,
          passwordError:passwordError,
          confirmpasswordError:confirmpasswordError,
         
        });
        isValid =false;

    }
    else
    {
      this.setState({
        firstnamerror:'',
        lastnamerror:'',
        emailError:'',
        phoneError:'',
        passwordError:'',
        confirmpasswordError:'',


      });
      isValid =true;
    }
    if(isValid){
      let obj={
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        email:this.state.email,
        phoneNo:this.state.phoneNo,
        password:this.state.password,
      };
      AsyncStorage.setItem('Register',JSON.stringify(obj));
      console.log(obj);
      this.props.navigation.navigate(Routes.Login);

    }
  };

 


  render() {

    return (

      <ScrollView>
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.text}>Sign Up</Text>
          </View>

          <Animatable.View style={styles.footer} animation="fadeInUpBig" iterationDelay={500}>

            <Input iconName="person-pin-circle" placeholder="Enter First name"
            onChangeText ={text=>this.setState({firstname:text})} value={this.state.firstname}/>
            <Text>{this.state.firstnamerror}</Text>
           

            <Input iconName="person-pin-circle" placeholder="Enter Last name"
            onChangeText={text=>this.setState({lastname:text})} value={this.state.lastname}/>
            <Text>{this.state.lastnamerror}</Text>
          


            <Input iconName="email" placeholder="Enter email"
             onChangeText={text => this.setState({email: text})}
             value={this.state.email}
             error={this.state.emailError}/>
              <Text>{this.state.emailError}</Text>
           


            {/* <Pickers iconName="flag" /> */}
            <Input iconName="contact-page" placeholder="Enter Mobile No"
            onChangeText={text => this.setState({phoneNo: text})}
            value={this.state.phoneNo}
            error={this.state.phoneError}/>
            <Text>{this.state.phoneError}</Text>
           

            <Input iconName="lock" placeholder="Enter password" visible='true'
            onChangeText={text => this.setState({password: text})}
            value={this.state.password}
            error={this.state.passwordError}/>
            <Text>{this.state.passwordError}</Text>
            

            <Input iconName="lock-open" placeholder="Enter confirm password" visible='true'
             value={this.state.confirmpassword}
             onChangeText={text => this.setState({ confirmpassword: text})}
             error={this.state.confirmpasswordError}/>
            <Text>{this.state.confirmpasswordError}</Text>
           

            <ComponentButton label='Sign Up' onPress={() => this.check_validate()} />

          </Animatable.View>

        </View>
      </ScrollView>

    )
  }
  
}



export default Register;