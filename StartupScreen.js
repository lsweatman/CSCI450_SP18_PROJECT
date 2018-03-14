import React from 'react';
import {StyleSheet, Text, View, Image, Modal, TextInput, Alert } from 'react-native';
import * as firebase from 'firebase';

import RoundedButton from './App/Components/RoundedButton';
import FullButton from './App/Components/FullButton';

const firebaseConfig = {
  apiKey: "AIzaSyAJXp7SBUPGRTPo-5qYM-T78mP8DEuBsog",
  authDomain: "commune-265d9.firebaseapp.com",
  databaseURL: "https://commune-265d9.firebaseio.com",
  projectId: "commune-265d9",
  storageBucket: "commune-265d9.appspot.com",
  messagingSenderId: "697540841037"
};

export default class StartupScreen extends React.Component {
  constructor() {
    super();
    if (!firebase.apps.length) { // Prevent more than one instance
      firebase.initializeApp(firebaseConfig);
    }
    // Passed into the firebase auth system
    // For now all we need to worry about is if the user is signed in
    this.state = {
      loading: true,
      userEmail: '',
      userPassword: '',
    };
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
      console.log(user);
      if (this.state.user) { // User has been logged in
        this.props.navigation.navigate('Login', {});
      }
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  loginUser() {
    console.log("logging in user");
    firebase.auth().signInWithEmailAndPassword(this.state.userEmail, this.state.userPassword).catch(function(error) {
      Alert.alert(
        error.code,
        error.message,
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      )
    });
  }

  signupUser() {
    console.log("signing up user");
    firebase.auth().createUserWithEmailAndPassword(this.state.userEmail, this.state.userPassword).catch(function(error) {
        // Handle Errors here.
      Alert.alert(
        error.code,
        error.message,
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      )
    });
  }

  logoutUser() {
    console.log("signing out");
    firebase.auth().signOut().then(function() {
      console.log("signed out");
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    var {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>

        <Image source={require('./App/Images/Logo.png')} style={styles.logoNoKeyboard}/>

        <TextInput
          style={styles.textInput}
          placeholder={'Username'}
          placeholderTextColor= '#000000'
          onChangeText={(text) => {this.setState({userEmail: text}); }}
        />

        <TextInput
          style={styles.textInput}
          placeholder={'Password'}
          placeholderTextColor= '#000000'
          secureTextEntry = {true}
          onChangeText={(text) => {this.setState({userPassword: text}); }}
        />

      <RoundedButton onPress={() => {this.loginUser(navigate);}}>
            Login
      </RoundedButton>

      <RoundedButton onPress={() => {this.signupUser();}}>
            Sign-Up
      </RoundedButton>

      <RoundedButton onPress={() => {this.logoutUser();}}>
            Logout
      </RoundedButton>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84C9E0',
  alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderRadius: 5,
    color: '#000000',
    width: 250,
    height: 40,
    backgroundColor: '#f0f0f0',
    margin: 10,
    marginRight: 25,
    marginLeft: 25,
  },
  logoNoKeyboard: {
    width:150,
    height: 193,
    marginBottom: 60,
  }
});
