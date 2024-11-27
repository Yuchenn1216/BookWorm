import React from 'react';
import { View, StyleSheet, TextInput} from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons';

//line 9: make icon becomes an option one,  display the icon only if the value of icon is passed in as a parameter
//using &&

//...otherProps means include all the other props(check LoginScreen.js see what's the other props were passed in)
//in this case, the other props is placeholder="Email Address" 
function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={25}/>}
            <TextInput style={styles.TextInput} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#e0e0eb",
        flexDirection:"row",
        borderRadius: 25,
        padding:10,
        marginVertical:15,
        width:'90%' ,
        marginLeft:15,
    },

    TextInput:{
        fontSize:20,
        fontFamily: Platform.OS === 'android' ? "monospace" : "Avenir-Roman",
        marginLeft:15,
        flex:1,
    },
})
export default AppTextInput;