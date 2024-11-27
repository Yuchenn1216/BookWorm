import React from 'react';
import {Text, TouchableOpacity,View, StyleSheet } from 'react-native';
import AppColour from '../config/AppColour';


function AppButton({title, color="primaryColor", onPress}) { //default button is the primarycolor 
    return (
        <TouchableOpacity onPress ={onPress}>
            <View style={[styles.button,{backgroundColor:AppColour[color]}]}> 
                <Text style={styles.text}> {title} </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:AppColour.primaryColor,
        justifyContent: 'center',
        alignContent:'center',
        flexDirection:"row",
        borderRadius: 25,
        padding:10,

        width:'90%' ,
        marginLeft:15,
    },
    text:{
        alignSelf:'center',
        color:AppColour.otherColor, 
        fontSize:16,
        textTransform:'uppercase',
        fontWeight:'bold',
    },
    
})

export default AppButton;
