import React from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import MyBooksScreen from '../screens/MyBooksScreen';
import NewBookScreen from '../screens/NewBookScreen';
import AppColour from '../config/AppColour';
import AppIcon from '../components/AppIcon';
import HomeNavigator from './HomeNavigator';

const TabNavigator = () => (
    <AppTab.Navigator tabBarOptions={{activeTintColor:AppColour.otherColor, activeBackgroundColor:AppColour.primaryColor}}> 
        <AppTab.Screen name = "Home" component={HomeNavigator} options={{tabBarIcon: () => <AppIcon size={30} name="home" backgroundColor={AppColour.otherColor}/>}}/>
        <AppTab.Screen name = "NewBooks" component={NewBookScreen} options={{tabBarIcon: () => <AppIcon size={30} name="plus-circle" backgroundColor={AppColour.otherColor}/>}}/>
        <AppTab.Screen name = "MyBooks" component={MyBooksScreen} options={{tabBarIcon: () => <AppIcon size={30} name="book-open-variant" backgroundColor={AppColour.otherColor}/>}}/>
    </AppTab.Navigator>
)

export default TabNavigator;
