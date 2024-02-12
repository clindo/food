import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import SearchBar from './components.js/SearchBar'

const SearchScreen = () => {

  const [searchTerm, setSearchTerm] =useState('');
  return (
  
    <View>
      <SearchBar searchTerm={searchTerm} 
      onTermChange={(newTerm=> setSearchTerm(newTerm))}
        onTermSubmit={()=> console.log('Term submitted')}
      />
    
      <Text>{searchTerm}</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})