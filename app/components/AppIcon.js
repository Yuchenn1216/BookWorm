import React from 'react';
import { View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function AppIcon({name, size=40, iconColor="black", backgroundColor}) {
    return (
        <View style={{height:size, width:size, backgroundColor, borderRadius:size/2, alignItems:"center", justifyContent:"center"}}>
            <MaterialCommunityIcons name={name} size={size*0.6} color = {iconColor}/>
            
        </View>
    );
}
const styles = StyleSheet.create({
    
})

export default AppIcon;