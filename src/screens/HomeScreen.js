import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, PushNotificationIOS } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import { REACT_APP_GOOGLE_API_KEY } from 'react-native-dotenv';
import NavigationBar from '../components/navigation_bar/NavigationBar';
import google from '../api/google';
import ResultList from '../components/ResultList';  


import callingFunction from '../components/ResultDetails';

const HomeScreen = () => {
    const [ term, setTerm ] = useState('');
    const [ results, setResults ] = useState([]);
    

    const searchApi = async (initialSearchTerm) => {
        const response = await google.get('/json', {
            params: {
                key: REACT_APP_GOOGLE_API_KEY,
                query: initialSearchTerm,
            }
        });
        setResults(response.data.results);
       
    };
    useEffect(() =>{
        searchApi('pizza');  
    }, [])
     
    const filterResultsByRating = (rating) => {
        return results.filter(result => {
            return result.rating <= rating;
        });
    };

    return (
        <View>
            <NavigationBar 
                term = { term }
                onTermChange = { setTerm }
                onTermSubmit = { () => {
                    searchApi(term);
                    callingFunction 
                } }
            />
            <Text style = {styles.resultDisplay}>About { results.length } results</Text>
            <ResultList 
                results = { filterResultsByRating(5) }
                // parentReference = { this.p}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    resultDisplay: {
        marginHorizontal: wp('3%'),
        marginTop: hp('1%'),
        color: "#B0B0B0",
    },
});

export default HomeScreen;
