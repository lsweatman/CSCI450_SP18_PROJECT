import React from 'react'
import {StyleSheet, Text, View, Modal } from 'react-native'
import { StackNavigator } from 'react-navigation';
import StartupScreen from './StartupScreen'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'



const Navigation = StackNavigator({
  Home: { screen: StartupScreen },
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
});

export default Navigation;
