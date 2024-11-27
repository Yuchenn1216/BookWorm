import React from 'react';
import { View,StyleSheet,FlatList } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppColour from '../config/AppColour';
import AppCard from '../components/AppCard';
import DataManager from '../config/DataManager';

const getBooks = () => {
    let commonData = DataManager.getInstance(); //bc the DM object has been created once the user Logined in
    let user = commonData.getUserID();//so the userID has been set, we need to get it 
    return commonData.getBooks(user);
}

function MyBooksScreen(props) {
    const bookList = getBooks();
    console.log(bookList);

    return (
        <AppScreen style={styles.container}>
            <FlatList
                data ={bookList}
                //bookid is unique in this case, so take each book and find the bookid as the key
                keyExtractor= {book => book.bookid.toString()} 
                //how you want your item to displayed on the screen 
                renderItem = {({item}) => 
                 <AppCard
                    title={item.title}
                    subtitle={item.subtitle}
                    image = {item.image}
                    category={item.category}
                 />}
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:AppColour.otherColor,
        marginTop:0,
    },
    
})

export default MyBooksScreen;