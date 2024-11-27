import React from 'react';
import { View,Image,tAppText,StyleSheet} from 'react-native';
import AppColour from '../config/AppColour';
import AppText from './AppText';

function AppCard({category,title, subtitle, image}) {
    return (
        <View style={styles.container}>
            {isFinite(image)? <Image source={image} style={styles.image}/> :<Image source={{uri:image}} style={styles.image}/>}
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText> 
            <AppText style={styles.subtitle}>{category}</AppText> 
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColour.otherColorLite,
        borderRadius:20,
        overflow:"hidden",
        marginBottom:25,
    },
    image:{
        width:"100%",
        height:200,
    },
    title:{
        fontWeight:"bold",
        marginLeft:12,
    },
    subtitle:{
        fontSize:16,
        marginLeft:12,
    } 
})

export default AppCard;