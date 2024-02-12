import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({searchTerm,onTermChange,onTermSubmit}) => {


  return (
    <View style={styles.backgroundStyle}>
    <Feather name="search" style= {styles.iconStyle} color="black" /> 
      <TextInput
       autoCapitalize='none' 
       autoCorrect ={false} 
       style={styles.inputStyle} 
       placeholder='Search' 
       value={searchTerm}
       onChangeText={newTerm=> onTermChange(newTerm)}
        onEndEditing={()=>onTermSubmit()}
       />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  backgroundStyle:{
    backgroundColor:'#7cc3ff',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
},
inputStyle:{
flex:1,
fontSize:18
},
iconStyle:{
  fontSize:35,
  alignSelf: 'center',
  marginHorizontal:5
}

})