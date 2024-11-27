import React,{useState} from 'react';
import { StyleSheet,TouchableOpacity,Image } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppColour from '../config/AppColour';
import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';
import * as ImagePicker from 'expo-image-picker';  
import AppIcon from '../components/AppIcon';


const categories = [
    {label: "Advanture", value:1,icon:"airplane-takeoff", backgroundColor:"red"},
    {label: "Thriller", value:2,icon:"ghost", backgroundColor:"blue"},
    {label: "Fiction", value:3, icon:"flash", backgroundColor:"green"},
    
];

function NewBookScreen({navigation}) {
    const [title,setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [category, setCategory]= useState("");
    const [image, setImage]= useState(null);
    
    const [titleError, setTitleError]= useState("");
    const [subtitleError, setSubtitleError] = useState("");
    const [categoryError, setCategoryError]= useState("");
    const [imageError, setImageError]= useState("");

    let openImagePickerAsync = async() => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(permissionResult.granted === false){
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        //handle the cancel event (when the screen displays the img but we don't want to select one)
        if(pickerResult.canceled === true){
            return;
        }

        setImage({path: pickerResult.uri});
        console.log(pickerResult);
    }
    
    const doErrorCheck = () =>{
        console.log(title,subtitle,category.label);
        setTitleError( title.length>0 ? "" : "Please set a valid Book Title");
        setSubtitleError( subtitle.length>0 ? "" : "Please set a valid Time");
        setCategoryError( category ? "" : "Please select a category");
        setImageError(image? "": "Please pick an image");
        return ((title.length>0) && (subtitle.length>0) && (category)&& (image) ? true :false )
    }

    const addBook = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const books = commonData.getBooks(user); 
        const bookID = books.length+1;
        const newBook = {
            title: title,
            subtitle:subtitle,
            category:category.label,
            bookid: bookID,
            userid:user,
            image:image.path,
        }
        console.log(newBook);
        commonData.addBook(newBook);
    }

    return (
        <AppScreen style={[styles.container,{backgroundColor:AppColour.otherColor}]}>
            <AppTextInput
            icon = "book-open-page-variant"
            placeholder = "Book Title"
            value = {title}
            onChangeText = { (inputText) => setTitle(inputText)}
            />

        {titleError.length>0 ? <AppText style={{margin:3, color:"red",fontSize:16}}>{subtitleError}</AppText> : <></>}
        
        <AppTextInput
            icon = "calendar-month"
            placeholder = "Book Read On"
            value = {subtitle}
            onChangeText = { (inputText) => setSubtitle(inputText)}
          />

        {subtitleError.length>0 ? <AppText style={{margin:3, color:"red",fontSize:16}}>{subtitleError}</AppText> : <></>}

        <AppPicker
             selectdItem = {category}
             onSelectItem = {item => setCategory(item)}  
             data={categories}  
             icon="apps"
             placeholder="Categories" 
             numColumns={3} />
            
        {categoryError.length>0 ? <AppText style={{margin:3, color:"red",fontSize:16}}>{categoryError}</AppText> : <></>}

        <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
            <AppIcon name="camera" size={80} iconColor={AppColour.otherColor} backgroundColor={AppColour.primaryColor}/>
            {image &&<Image source={{uri:image.path}} style={{height:100, width:100}}/>}
        </TouchableOpacity>

        {imageError.length>0 ? <AppText style={{margin:3, color:"red",fontSize:16}}>{imageError}</AppText> : <></>}

        <AppButton title="Add Book" onPress={() => { 
            if(doErrorCheck()){
                addBook();
               navigation.navigate("MyBooks");
                }
            }
        }/> 
         
        </AppScreen>
    );
}


const styles = StyleSheet.create({
    container:{
       // marginTop:0,
    },
    imageButton: {
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20,
        
    }
})

export default NewBookScreen;