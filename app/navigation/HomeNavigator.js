import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import MyBooksScreen from '../screens/MyBooksScreen';
import MyAuthorsScreen from '../screens/MyAuthorsScreen';


const AppStack = createStackNavigator(); // createStackNavigator is a functon, whatever the function returns will be stored in AppStack 
// we create a empty stack currently 
//component is your screen
const HomeNavigator = () => (
    //create a navigator
    <AppStack.Navigator> 
        <AppStack.Screen name = "Home" component={HomeScreen} options={{headerShown:false}}/> 
        <AppStack.Screen name = "MyBooks" component={MyBooksScreen}/> 
        <AppStack.Screen name = "MyAuthors" component={MyAuthorsScreen}/> 
    </AppStack.Navigator>
)

export default HomeNavigator;
