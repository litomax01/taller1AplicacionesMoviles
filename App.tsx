import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homeScreen from './screens/homescreen';
import ProductScreen from './screens/productscreen';
import CartScreen from './screens/carritoscreen';
import LoginScreen from './screens/loginscreen';
import { CartProvider } from './context/carritocontexto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Inicio de Sesión' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tienda' }} />
          <Stack.Screen name="Product" component={ProductScreen} options={{ title: 'Detalle del Producto' }} />
          <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Carrito de Compras' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
