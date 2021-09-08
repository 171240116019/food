import React,{ useState,useEffect } from 'react';
import { View,Text,StyleSheet,ScrollView } from 'react-native';
import Searchbar from './component/searchbar';
import yelp from './api/yelp';
import useResults from './hooks/useResults';
import Resultslist from './component/Resultslist';



const SearchScreen= () => {
    const[term,setTerm]=useState('');
    const[searchApi,results,errorMessage]=useResults();

    const filterResultsByPrice=(price)=>{
        return results.filter(result=>{
            return result.price===price
        });
    };

    return (
        <View style={{flex:1}}>
        <Searchbar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmiit={()=>searchApi(term)}    
        />
          {errorMessage ? <Text>{errorMessage}</Text>:null}
            <Text>we have  found {results.length} results</Text>
            <ScrollView>
            <Resultslist 
         
             results={filterResultsByPrice('$')}
              title="Cost Effective"/>
            <Resultslist  
          
            results={filterResultsByPrice('$$')}
             title="Bit Pricier"/>
            <Resultslist  
           
            results={filterResultsByPrice('$$$')}
             title="Big Spender"/>
            </ScrollView>
        </View>
    );
};
const styles=StyleSheet.create({})

export default SearchScreen;
