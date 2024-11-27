import React, {useState} from 'react';
import { View, StyleSheet, TextInput} from 'react-native'; 
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Formik} from 'formik';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppColour from '../config/AppColour';
import AppButton from '../components/AppButton';


function LoginScreen(props) {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
    //    const [x , setx]  a variable called x and a function setX comes along with it and you can pass an array
    // Calling this function setX and passing the x vaule would set the value of x
        
        <AppScreen style={styles.container}>
             <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons 
                        name ="library"
                        size={60}
                        color = {AppColour.primaryColor}
                        />
                </View>
                
            <View style={styles.textInputContainer}>
            <AppTextInput
                 autoCapitalize ='none'
                 autoCorrect = {false}
                 textContentType = "emailAddress"
                 icon="account" 
                 placeholder = "Full Name"
                 onChangeText = {userNameInput => setUsername(userNameInput)}
                 />

                <AppTextInput
                 autoCapitalize ='none'
                 autoCorrect = {false}
                 keyboardType = "email-address"
                 textContentType = "emailAddress"
                 icon="email" 
                 placeholder = "Email address"
                 onChangeText = {userEmailInput => setEmail(userEmailInput)}
                 />
                 
                <AppTextInput
                 autoCapitalize ='none'
                 autoCorrect = {false}
                 textContentType = "password"
                 secureTextEntry = {true}
                 icon="lock" 
                 placeholder = "Password"
                 onChangeText = {userPasswordInput => setPassword(userPasswordInput)}
                />
            </View>

              <AppButton title="Login" onPress={() => console.log(email,password)}/>

        </AppScreen>

    );
}

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:AppColour.otherColor,
    },

    welcomeContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:70,
    },

    textInputContainer:{
        marginTop:25,
        marginVertical:25,

    }
     
})
export default LoginScreen; 


