import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useCart } from '../context/CartContext';
import { RootStackParamList } from '../navigation/navigation';

type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;

export default function ProductScreen({ route, navigation }: { route: ProductScreenRouteProp; navigation: any }) {
  const { product } = route.params;
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Agregar al carrito" onPress={() => addToCart(product)} />
      <Button title="Ver carrito" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  image: { width: 200, height: 250, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  price: { fontSize: 18, color: '#008000' },
});
