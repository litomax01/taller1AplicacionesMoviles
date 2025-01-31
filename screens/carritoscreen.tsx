import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useCart } from '../context/carritocontexto';

export default function CartScreen() {
  const { cart, removeFromCart } = useCart();

  return (
    <View>
      <Text>Carrito de Compras</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.author}</Text>
            <Text>${item.price}</Text>
            <Button title="Eliminar" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
