import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Platform} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {NavigationContainer} from '@react-navigation/native'

import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import AppColour from './app/config/AppColour';
import AppScreen from './app/components/AppScreen';


import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import TestScreen from './app/screens/TestScreen';
import HomeScreen from './app/screens/HomeScreen';
import MyBooksScreen from './app/screens/MyBooksScreen';
import MyAuthorsScreen from './app/screens/MyAuthorsScreen';
import NewBookScreen from './app/screens/NewBookScreen';

import AuthNavigator from './app/navigation/AuthNavigator';
import TabNavigator from './app/navigation/TabNavigator';



// const blurRadiusValue = Platform.OS === "android" ? 0.7 : 5.5;

export default function App() {
  return (
  // <WelcomeScreen style={styles.background}></WelcomeScreen>  
  //<LoginScreen style={sty les.background}> </LoginScreen>
  //<TestScreen/>
  
  <NavigationContainer>
    <AuthNavigator/>
  </NavigationContainer>
  
  //<HomeScreen/>

  //<MyBooksScreen/>

  //<MyAuthorsScreen/>
  //<NewBookScreen/>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: AppColour.otherColor,
    alignItems:'center',
    justifyContent:'center',
   
  }, 
  background:{
    flex: 1,
  }
  
});
