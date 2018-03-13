import React from 'react'
import {StyleSheet, Text, View, Image, Modal, TextInput } from 'react-native'
import RoundedButton from './App/Components/RoundedButton'
import FullButton from './App/Components/FullButton'

export default class StartupScreen extends React.Component {

  render() {
    var {navigate} = this.props.navigation;
    return (


      <View style={styles.container}>
      <Image source={require('./App/Images/Logo.png')} style={{width:150, height: 193, marginBottom: 60}}/>
      <TextInput
                    style={styles.textInput}
                    placeholder={'Username'}
                    placeholderTextColor= '#ffffff'
            />
      <TextInput
                    style={styles.textInput}
                    placeholder={'Password'}
                    placeholderTextColor= '#ffffff'
                    secureTextEntry = {true}
            />
      <RoundedButton title="Go to questionnaire screen" onPress={() => navigate('Questionnaire', {})}>
          Login
      </RoundedButton>
      <RoundedButton title="Go to signup screen" onPress={() => navigate('Signup', {})}>
          Sign-Up
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
    borderRadius: 5, color: '#ffffff', width: 250, height: 40, backgroundColor: '#f0f0f0', margin: 10, marginRight: 25, marginLeft: 25,
  }
});
