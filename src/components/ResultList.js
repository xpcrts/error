import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ResultDetails from './ResultDetails';
import HomeScreen from '../screens/HomeScreen';

const ResultList = ({results}) => {
    return (
        <View>
            <Text>Result: {results.length}</Text>
            <FlatList 
                data = { results }
                keyExtractor = { (result) => result.id}
                renderItem = {({ item }) => {
                    return <View>
                            <ResultDetails result = {item}/>
                          
                    </View>
                }}
            />
        </View>
    );
    
};

const styles = StyleSheet.create({});

export default ResultList;