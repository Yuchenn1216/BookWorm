import React from 'react';
import {StyleSheet, View} from 'react-native'; 
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppColour from '../config/AppColour';
import AppScreen from '../components/AppScreen';
import AppListItem from '../components/AppListItem';
import AppIcon from '../components/AppIcon';
import AppText from '../components/AppText';


function HomeScreen({navigation,route}) {
    
    return (
        <AppScreen style={styles.container}>
            <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons 
                        name ="library"
                        size={60}
                        color = {AppColour.primaryColor}
                        />
            </View>
            

            <View style={styles.profileContainer}>
                <AppListItem image={route.params.paramImage} title={route.params.paramName} subtitle={route.params.paramEmail}/>
            </View>
            
            <View style={styles.linksContainer}>
                <AppListItem 
                title="My book" 
                iconComponent={<AppIcon name="book-open-variant" 
                size={50} 
                iconColor={AppColour.otherColor} 
                backgroundColor={AppColour.primaryColor}
                />} 
                onPress={()=>navigation.navigate("MyBooks")}
                />
                <AppListItem 
                title="My author" 
                iconComponent={<AppIcon name="account-heart" 
                 size={50} 
                 iconColor={AppColour.otherColor} 
                 backgroundColor={AppColour.primaryColor}
                 />} 
                onPress={()=>navigation.navigate("MyAuthors")} />
            </View>
                 
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:AppColour.otherColor,
        marginTop:0
    },
    welcomeContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:70,
    },
    profileContainer:{
        marginTop:55,
        backgroundColor:AppColour.otherColorLite,
        height:90,
        justifyContent:"center"
    },
    linksContainer:{
        marginVertical:60,
        backgroundColor:AppColour.otherColorLite,
        paddingLeft:10,
        justifyContent:"space-around",
        height:125,


    }
})

export default HomeScreen;