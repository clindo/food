import yelp from "../api/yelp";
import { useState,useEffect } from "react";

export default ()=> {

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

   return [searchApi,results,errorMessage];
};;