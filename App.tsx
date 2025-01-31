import React from 'react';
import { Text,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homescreen';
import ProductScreen from './screens/productscreen';
import CartScreen from './screens/carritoscreen';
import { CartProvider } from './context/carritocontexto';
import { useContext } from 'react';




const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
      <Text>App Screen LEOOOOOOOOOOOOOOO</Text>
      </NavigationContainer>
    </CartProvider>
  );
}
