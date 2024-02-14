import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {

  const [searchTerm, setSearchTerm] =useState('');

  const [results,setResults] = useState([]);

  const searchApi =async ()=> {
   const response=await  yelp.get('/search',{params:{
    limit:50,
    term:searchTerm,
    location:'san jose'
   }});
   setResults(response.data.businesses);
  
  };

  return (
  
    <View>
      <SearchBar searchTerm={searchTerm} 
      onTermChange={(setSearchTerm)}
        onTermSubmit={searchApi}
      />
    
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})