import React, {Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
// import useResults from '../hooks/useResults';
import { REACT_APP_GOOGLE_API_KEY } from 'react-native-dotenv';

import { useEffect, useState } from 'react';
import googleDetails from '../api/googleDetails';

const ResultDetails = ({result}) => {
    

        // const photo_reference = result.photos[0].photo_reference; 
        console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb    ", result.photos[0].photo_reference);
        return (
            <View>
                    <Image  
                        style = {styles.image} 
                        source = {{
                            // uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=${REACT_APP_GOOGLE_API_KEY}`
                        }} 
                    />
                    <Text> { result.name }</Text> 
                   
            </View>  
        ); 
};


const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 350,
        borderRadius: 8,

    }
});

export default ResultDetails;
