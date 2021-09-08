import React from 'react'
import { View,Text,StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import Resultdetail from './Resultdetail';
import { withNavigation } from 'react-navigation';

const Resultslist=({title,results,navigation})=>{
    return(
        <View>
            <Text style={styles.textstyle}>{title}</Text>
            <FlatList
            horizontal      
            showsHorizontalScrollIndicator={false}      
            data={results}
            keyExtractor={(result)=>result.id}
            renderItem={({item})=>{
                return (
                <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id: item.id})}>
                   <Resultdetail result={item}/>
                </TouchableOpacity>
                )
            }}

            />
        </View>
    );
};
const styles=StyleSheet.create({
    textstyle:{
        fontSize:30,

    }
})

export default withNavigation(Resultslist);




