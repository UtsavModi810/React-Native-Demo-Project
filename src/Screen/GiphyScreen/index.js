import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Input from '../../component/Input/Input';

const GiphyScreen = () => {
  const [gifs, setGifs] = useState([]);
  const [term, updateTerm] = useState('');

  async function fetchGifs() {
    try {
      const API_KEY = 'rerzr9EmdZh9XVHYIy5ulAVofQ0yKBQ9';
      const BASE_URL = 'https://api.giphy.com/v1/gifs/search';
      const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}`);
      const res = await resJson.json();
      setGifs(res.data);
    } catch (error) {
      console.warn(error);
    }
  }

  function onEdit(newTerm) {
    updateTerm(newTerm);
    fetchGifs();
  }
  return (
    <View style={styles.view}>
      <Input
        placeholder="Search Giphy"
        // placeholderTextColor="#fff"
        onChangeText={(text) => onEdit(text)}
      />
      <FlatList
        data={gifs}
        renderItem={({item}) => (
        
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{uri: item.images.original.url}}
          />
        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  textInput: {
    width: '100%',
    height: 50,
    color: 'white',
  },
  image: {
    width: 300,
    height: 150,
    borderWidth: 3,
    marginBottom: 5,
  },
});

export default GiphyScreen;
