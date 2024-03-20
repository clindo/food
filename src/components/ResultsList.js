import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'

const ResultsList = ({title,results}) => {
  return (
    <View>
      <Text style= {styles.title}>{title}</Text>
      <FlatList 
horizontal={true}
data={results}
keyExtractor={(result)=>{return result.id}}
renderItem={({item})=>{

   return <Text>{item.name}</Text>;
}}
      />
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({

    title: {
        fontSize:18,
        fontWeight: 'bold'
    }


})