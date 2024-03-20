import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {

  const [searchTerm, setSearchTerm] =useState('');
const [searchApi,results,errorMessage]=useResults();


  return (
  
    <View>
      <SearchBar searchTerm={searchTerm}
       
      onTermChange={(setSearchTerm)}
        onTermSubmit={()=>searchApi(searchTerm)}
      />
    { errorMessage ? <Text>{errorMessage}</Text>:null}
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})