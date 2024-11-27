import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import TabNavigator from './TabNavigator';

const AppStack = createStackNavigator(); // createStackNavigator is a functon, whatever the function returns will be stored in AppStack 
// we create a empty stack currently 
//component is your screen
const AuthNavigator = () => (
    //create a navigator
    <AppStack.Navigator> 
        <AppStack.Screen name = "Welcome" component={WelcomeScreen} options={{headerShown:false}}/> 
        <AppStack.Screen name = "Login" component={LoginScreen} options={{title:"My Login"}}/> 
        <AppStack.Screen name = "Register" component={RegisterScreen}/> 
        <AppStack.Screen name = "Home" component={TabNavigator} options={{headerShown:false}}/>
    </AppStack.Navigator>
)

export default AuthNavigator;
