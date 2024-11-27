import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native'; 
import {MaterialCommunityIcons} from '@expo/vector-icons'
//import {createStackNavigator} from '@react-navigation/stack'
import {Formik} from 'formik';
import * as Yup from 'yup';
//import { useNavigation } from '@react-navigation/native'; 

import AppButton from '../components/AppButton';
import AppColour from '../config/AppColour';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';

//create a schema 
const schema = Yup.object().shape( // inside shape, define all objects we are gonna use
    {
        email: Yup.string().required().email().label("EMAIL"), //set the font of "email" in error message all upercase
        password: Yup.string().required().min(4).max(8).label("PASSWORD"),
         
    }
);

const users = [
    {
       id:"user1",
       name:"Billie Eilish",
       email:"be@gmail.com" ,
       password:"1234",
       image: require('../assets/yuchen.jpg')
    },
    {
        id:"user2",
        name:"Jon Snow",
        email:"js@g.com",
        password:"2345",
        image: require('../assets/JonSnow.jpeg')  
    },
];

const validateUser = ({email ,password}) => {
    return(
        users.filter((user) => user.email === email && user.password === password).length>0
    );
};

//return entire user object
const getUser = ({email}) => {
    return users.find((user) => user.email === email); //if equal, means find particular user
}


const createUser = ({email}) => { //when the email is entered
    let commonData = DataManager.getInstance(); //create a dataManager object 
    let userID = getUser({email}).id; //get the userID
    commonData.setUserID(userID); //set the userID of the dataManager object
   // console.log(commonData);
} 


function LoginScreen({navigation}) {
   // const [email, setEmail] = useState();
  //  const [password, setPassword] = useState();

    return (
    //  const [x , setx]  a variable called x and a function setX comes along with it and you can pass an array
    // Calling this function setX and passing the x vaule would set the value of x
        
        <AppScreen style={styles.container}>
             <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons 
                        name ="library"
                        size={60}
                        color = {AppColour.primaryColor}/>
            </View>
            <Formik
                initialValues = {{email:'', password:'',}}
                onSubmit = {(values, {resetForm})=> {
                    if(validateUser(values)){
                       // console.log(getUser(values));
                        resetForm();
                        createUser(values);
                        navigation.navigate("Home", {
                            screen:"Home",
                            params:{
                                screen:"Home",
                                params:{
                                    paramEmail:values.email,
                                    paramName:getUser(values).name,
                                    paramImage:getUser(values).image
                                },
                            }
                        });
                    }
                    else{
                        resetForm();
                        alert("Invalid Login Details")
                    }
                }}        
                validationSchema={schema} //use the created schema
                 >
                {({values,handleChange,handleSubmit,errors,setFieldTouched,touched}) => ( // errors will give me the errors for email and password, then display the error using {error.email}
                    <>
                <View style={styles.textInputContainer}>
                    <AppTextInput
                    autoCapitalize ='none'
                    autoCorrect = {false}
                    icon="email" 
                    placeholder = "Email address" 
                    keyboardType = "email-address"
                    textContentType = "emailAddress"
                    value={values.email}
                    onBlur = {()=>setFieldTouched("email")}
                    onChangeText = {handleChange("email")}
                    />
                    {touched.email && <AppText style={{color:"red",fontSize:16}}>{errors.email}</AppText>}
                    
                    <AppTextInput
                    autoCapitalize ='none'
                    autoCorrect = {false}
                    icon="lock" 
                    placeholder = "Password"
                    secureTextEntry = {true} // or just secureTextEntry
                    textContentType = "password"
                    value={values.password}
                    onBlur = {()=>setFieldTouched("password")}
                    onChangeText = {handleChange("password")}
                    />
                    {touched.password &&<AppText style={{color:"red",fontSize:16}}>{errors.password}</AppText>}
            </View>

              <AppButton title="Login" onPress={handleSubmit}/>
                    </>
                )}
            </Formik>
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

    textInputContainer:{
        marginTop:25,
        marginVertical:25,

    }
     
})
export default LoginScreen; 