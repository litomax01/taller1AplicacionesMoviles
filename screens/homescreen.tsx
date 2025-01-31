
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { NavigationProp } from '@react-navigation/native';

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
};

type Props = {
  navigation: NavigationProp<any>;
};

export default function HomeScreen({ navigation }: Props) {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then(response => setBooks(response.data))
        .catch(error => console.error(error));
    }, []);
    
  }, []);

  return (
    <View>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Product', { book: item })}>
            <View>
              <Image source={{ uri: item.image }} style={{ width: 100, height: 150 }} />
              <Text>{item.title}</Text>
              <Text>{item.author}</Text>
              <Text>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
