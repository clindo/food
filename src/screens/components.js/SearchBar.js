import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
    <Feather name="search" size={24} color="black" />
      <Text>Search Bar</Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({background:{
    backgroundColor:'#7cc3ff',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15
}})