import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
};

type RootStackParamList = {
  Home: undefined;
  Product: { book: Book };
  Cart: undefined;
};

type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;
type ProductScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;

type Props = {
  route: ProductScreenRouteProp;
  navigation: ProductScreenNavigationProp;
};

export default function ProductScreen({ route, navigation }: Props) {
  const { book } = route.params;

  return (
    <View>
      <Image source={{ uri: book.image }} style={{ width: 150, height: 200 }} />
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
      <Text>${book.price}</Text>
      <Button title="Agregar al carrito" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
}
