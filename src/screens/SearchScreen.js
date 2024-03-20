import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
const SearchScreen = () => {

  const [searchTerm, setSearchTerm] =useState('');
const [searchApi,results,errorMessage]=useResults();

const filterResultsByPrice=(price) => {
return results.filter(r => {return r.price===price});
}


  return (
  
    <View>
      <SearchBar searchTerm={searchTerm}
       
      onTermChange={(setSearchTerm)}
        onTermSubmit={()=>searchApi(searchTerm)}
      />
    { errorMessage ? <Text>{errorMessage}</Text>:null}
      <Text>We have found {results.length} results</Text>
      <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}/>
      <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')}/>
      <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')}/>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})