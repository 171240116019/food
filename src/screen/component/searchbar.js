import React from 'react';
import { View,Text,StyleSheet,TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons'

const Searchbar=({ term ,onTermChange,onTermSubmiit })=>{
    return (
        <View style={styles.background}>
        <Feather name='search' style={styles.iconstyle}/>
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmiit}
        />
       
            <Text></Text>
        </View>
    );
};
const styles=StyleSheet.create({
    background:{
        backgroundColor:'gray',
        height:50,
        borderRadius:5,
        marginHorizontal:10,
        flexDirection:'row',
        marginTop:10,
        marginBottom:10

    },
    input:{
       flex:1,
       fontSize:18,
    },
    iconstyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
        
    }
});

export default Searchbar;