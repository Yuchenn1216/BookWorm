import React from 'react';
import {View,StyleSheet,Image,Text,TouchableHighlight  } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
 
import AppText from './AppText';
import AppColour from '../config/AppColour';

// subtitle and image are optional

function AppListItem({image,title,subtitle,iconComponent,onPress,onSwipeLeft}){
    return (
        <Swipeable renderRightActions={onSwipeLeft} >
            <TouchableHighlight onPress={onPress} underlayColor={AppColour.otherColorLite}>
                <View style={styles.container}>
                    {iconComponent}
                    {image &&<Image source={image} style={styles.image}/>}

                    <View style={styles.textcontainer}>
                        <AppText style={styles.title}> {title} </AppText>
                        {subtitle && <AppText style={styles.subtitle}> {subtitle} </AppText>}
                    </View> 
            
                </View>
            </TouchableHighlight>
        </Swipeable>
    );  
} 

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
    },
    image:{
        height:75,
        width:75,
        borderRadius:37,
        marginRight:20,
        marginLeft: 10,
    },
    textcontainer:{
        flexDirection:"column"
    },

    title:{
        fontWeight:"bold",
        marginVertical:5,
    },
    subtitle:{
        fontSize:15,

    },
 
})

export default AppListItem;