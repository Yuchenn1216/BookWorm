import React, { useState } from 'react';
import {StyleSheet, FlatList,View, TouchableOpacity, TouchableOpacityComponent} from 'react-native';

import AppScreen from '../components/AppScreen';
import AppColour from '../config/AppColour';
import AppListItem from '../components/AppListItem';
import AppIcon from '../components/AppIcon';

const initialAuthorList = [
    {
        id:1,
        name:"Jane Harper",
        image: require("../assets/yuchen.jpg"), 
    },
    {
        id:2,
        name:"J.K.Rowling",
        image: require("../assets/yuchen.jpg"),
    }
]

function MyAuthorsScreen(props) {
    const[refreshing, setRefreshing] = useState(false);
     const[authors,setAuthors] = useState(initialAuthorList);
     const handlerDelete = (author) => {
        const newAuthorList = authors.filter(item=> item.id !== author.id);
        setAuthors(newAuthorList);
     }

    return (
        <AppScreen style={styles.container}>
            <FlatList
            data={authors}
            keyExtractor={authors => authors.id.toString()}
            refreshing={refreshing}
            onRefresh={() => setAuthors(initialAuthorList)}
            renderItem = {({item}) =>
                <AppListItem
                    title = {item.name}
                    image = {item.image}
                    onPress={() => console.log(item)} //click the list will print the correspoding list on the terminal, and this will allow us to click
                    onSwipeLeft={ () => 
                     (<View style={styles.deleteView}>
                        <TouchableOpacity onPress={()=> handlerDelete(item)}>
                            <AppIcon 
                            name="trash-can"  
                            iconColor={AppColour.otherColor} 
                            backgroundColor={AppColour.primaryColor} />
                        </TouchableOpacity>
                    </View>)} //this will render a View
                />} 
            ItemSeparatorComponent={ () =>
                <View style={styles.separator}/>
            }
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColour.otherColor,
        flex:1,
        marginTop:0
    },
    separator:{
        width:"100%",
        height:1,
        backgroundColor:AppColour.primaryColor,
    },
    deleteView:{
        backgroundColor:AppColour.secondraryColor,
        width:75,
        justifyContent:"center",
        alignItems:"center",
    },
})
export default MyAuthorsScreen;