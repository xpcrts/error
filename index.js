//import libraries to help create components
//import navigation 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import react, react-native libraries
import React from 'react';
import ReactNative from 'react-native';
import { Text, View, AppRegistry } from 'react-native';

//custom component
import HomeScreen from  './src/screens/HomeScreen';

import { REACT_APP_GOOGLE_API_KEY } from 'react-native-dotenv';


//create components
const navigator = createStackNavigator
const App = () => (
    <HomeScreen />
);

//render components to devices
AppRegistry.registerComponent('servewish', () => App);
