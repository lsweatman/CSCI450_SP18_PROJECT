import React from 'react'
import {StyleSheet, Text, View, Modal, Picker} from 'react-native'
import RoundedButton from './App/Components/RoundedButton'
import FullButton from './App/Components/FullButton'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


var radio_props = [
  {label: 'Consistent motivation', value: 0 },
  {label: 'Finding peace', value: 1 },
  {label: 'Being involved in community', value: 2 },
  {label: 'Health habits', value: 3 },
  {label: 'Balancing time with electronics and life', value: 4 },
  {label: 'Money management', value: 5 }
];

// var RadioButtonProject = React.createClass({
//   getInitialState: function() {
//     return {
//       value: 0,
//     }
//   },


export default class QuestionnaireScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
<Text style= {styles.question}> Which of these habits do you struggle with the most? </Text>

      <RadioForm style = {styles.radio}
                radio_props={radio_props}
                initial={0}
                onPress={(value) => {this.setState({value:value})}}
              />

        <RoundedButton onPress={this.toggleModal}>
          Submit Answers
        </RoundedButton>
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    question: {
    alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontSize: 30,
    },
    radio: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin: 10,
    }
  });
