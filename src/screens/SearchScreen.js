import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {

  const [searchTerm, setSearchTerm] =useState('');

  const [results,setResults] = useState([]);
  const[errorMessage, setErrorMessage]=useState('');

  const searchApi =async (term)=> {
    console.log("Hello world");

    try{
   const response=await  yelp.get('/search',{params:{
    limit:50,
    term,
    location:'san jose'
   }});
   setResults(response.data.businesses);
  }catch(err){
    setErrorMessage("Something went wrong ")
  }
  };

 useEffect(()=>{
  searchApi('pasta');
 },[]);

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