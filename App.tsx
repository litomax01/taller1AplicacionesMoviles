import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductsScreen';
import CartScreen from './screens/CarritoScreen';
import LoginScreen from './screens/LoginScreen';
import { CartProvider } from './context/CartContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Inicio de Sesión' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tienda' }} />
      
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}