import React from 'react';
import { SafeAreaView, StyleSheet,View } from 'react-native';
import Constants from 'expo-constants';

//everthing is a children of appscreen will be display within the safeareaView
function AppScreen({children,style}) {
    return (
        <SafeAreaView style={[styles.screen,style]}>
            <View style={styles.paddingView }>
              {children}
            </View>       
        </SafeAreaView> 
    );
}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        marginTop: Constants.statusBarHeight,
    },

    paddingView:{
        flex:1,
      
    }
    
})

export default AppScreen;