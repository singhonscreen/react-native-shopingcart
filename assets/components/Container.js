import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './Login'; 
import ShoppingCart from './ShoppingCart';

const RootStack = createStackNavigator({
    Login:  Login
    ,
    ShoppingCart:  ShoppingCart
    
  });

const Container = createAppContainer(RootStack);

export default Container;