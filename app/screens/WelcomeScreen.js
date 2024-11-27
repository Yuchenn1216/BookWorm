import React from 'react';
import { View,StyleSheet,ImageBackground, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColour from '../config/AppColour';
import AppButton from '../components/AppButton';


const blurRadiusValue = Platform.OS ==='android'? 0.5 : 5.5;

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            <ImageBackground
                source = {require("../assets/Background-Image.jpg")} 
                style = {styles.background}
                blurRadius={blurRadiusValue}>
                
                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons 
                        name ="library"
                        size={60}
                        color = {AppColour.primaryColor}
                    />
                    <AppText> Welcome to BookWorm </AppText>
                </View>

                <View style={styles.buttonContainer}>
                    <AppButton title="Login" onPress={()=> navigation.navigate("Login")}/>
                    <AppButton title="Register" color="secondraryColor" onPress={()=> navigation.navigate("Register")}/>
                </View>
            
             </ImageBackground>      
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
    },

    welcomeContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
    },

    //this container is not styling the button itself, the acutal style for button is in AppButton.js
    buttonContainer:{
       // backgroundColor:'red',
        marginTop:270,
        marginEnd:20,
        flexDirection:"column",
        height:200,
        alignSelf:'flex-end',
       justifyContent:'space-around',
       width:'50%',
    } 
})
export default WelcomeScreen;