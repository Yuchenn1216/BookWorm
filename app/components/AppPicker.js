import React,{useState}from 'react';
import { View, StyleSheet,Modal,Button,TouchableWithoutFeedback,FlatList} from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons';


import AppText from './AppText';
import AppScreen from './AppScreen';
import AppPickerItem from './AppPickerItem';



function AppPicker({data,icon,placeholder,numColumns,selectdItem,onSelectItem}) {
    const [modalVisible, setModalVisible] = useState(false); 
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={25}/>}
                    <AppText style={styles.text} > {selectdItem? selectdItem.label : placeholder} </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={25}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <AppScreen>
                    <Button title="Close" onPress={() => setModalVisible(false)}/>  
                    <FlatList 
                        numColumns={numColumns}
                        data={data}
                        keyExtractor={item => item.value.toString()}
                        renderItem = {({item}) => 
                        <AppPickerItem 
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                                }
                            }
                            label = {item.label}
                            icon = {item.icon}
                            backgroundColor={item.backgroundColor}
                            />}
                    />
                </AppScreen>
            </Modal>
        </>
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

    text:{
        flex:1,
    },
})
export default AppPicker;