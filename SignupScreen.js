import React from 'react'
import {StyleSheet, Text, View, Modal } from 'react-native'
import RoundedButton from './App/Components/RoundedButton'
import FullButton from './App/Components/FullButton'

export default class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RoundedButton onPress={this.toggleModal}>
          Youre signed up!
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
});
