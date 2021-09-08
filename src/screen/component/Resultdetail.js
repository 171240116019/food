
import React from 'react'
import { Text,View,StyleSheet,Image } from 'react-native'

const Resultdetail =({result})=>{
    return(
        <View style={styles.container}>
            <Image  style={styles.image} source={{uri :result.image_url}}/>
            <Text style={styles.textstyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}
  const styles=StyleSheet.create({

    container:{
       marginLeft:15
    },
      image:{
          width:240,
          height:120,
          borderRadius:4,
          marginBottom:5
      },
      textstyle:{
          fontSize:18,
          fontWeight:'bold',
          marginLeft:15
          }
  }); 

export default Resultdetail;