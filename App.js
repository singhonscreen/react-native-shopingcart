import React, { Component } from 'react';
import Login from "./assets/components/Login";
// import {createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'
import ShoppingCart from './assets/components/ShoppingCart'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const RootStack = createStackNavigator({
//    Login, 
//    ShoppingCart
// });
// const Container = createAppContainer(RootStack);
// const App = createAppContainer(RootStack);
// const goToShop = ()=>{
//   navigation.navigate('ShoppingCart')
// }
const Stack = createNativeStackNavigator();

const App = () =>{
  

  return (
    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
  </NavigationContainer>
    
    );
  } 



export default App;