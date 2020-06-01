//import libraries for making components
import React from 'react';
import ReactNative from 'react-native';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
//responsive react native view library that adapt to various screensize
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Avatar } from 'react-native-elements';

//Create custom components
const NavigationBar = ({ term, onTermChange, onTermSubmit}) => (
        <View> 
            <View style = {styles.navigationBar}>
                <View style = {styles.searchBar}>
                    <Icon name="ios-search" style = {styles.icon} />
                    <TextInput 
                        style = {styles.inputSearch}
                        autoCapitalize = "none"
                        autoCorrect = { false }
                        placeholder = "Search"
                        value = { term }
                        onChangeText = { onTermChange }
                        onEndEditing = { onTermSubmit }
                    />
                </View>
                <View>
                    <Avatar 
                        rounded
                        onPress={() => console.log("profile press")}
                        source={{
                            uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                        containerStyle={styles.profileSetting}
                    />
                
                    
                </View>
            </View>
        </View>
    );

//styles of components
const styles = StyleSheet.create({
    navigationBar:{
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        marginHorizontal: wp('3%'),
        marginTop: hp('1.5%'),

    },
    searchBar:{
        // borderWidth: 1,
        // borderColor: "red",
        flex: 1,
        height: 48, 
        flexDirection: "row",
        
    },
    icon:{
        fontSize: 25,
        alignSelf: "center",
        marginLeft: wp('4%'),
        marginRight: wp('2%'),
        color: "#B0B0B0",
    },
    inputSearch: {
        // borderColor: "black",
        // borderWidth: 1,
        flex: 1,
        fontSize: 15, 
        // underlineColorAndroid="transparent",
        
    },
    profileSetting: {
        // borderWidth: 1,
        // borderColor: "red",
        // flex: 1.5,
        alignSelf: "center",
        marginVertical: hp('1%'),
        marginHorizontal: wp('2%'),

    }
});

//Make custom components available to other part of app
export default NavigationBar;