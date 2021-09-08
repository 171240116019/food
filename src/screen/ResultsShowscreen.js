import React from 'react'
import { Text,View,StyleSheet } from 'react-native'

const ResultsShowscreen=({navigation})=>{
   const id=navigation.getParam('id')

   console.log(id)
    return(
        <View>
            <Text>show screen</Text>
        
        </View>
    );
};

export default ResultsShowscreen;
