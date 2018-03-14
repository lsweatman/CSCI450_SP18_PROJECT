import React from 'react'
import {StyleSheet, Text, View, Modal, Picker} from 'react-native'
import RoundedButton from './App/Components/RoundedButton'
import FullButton from './App/Components/FullButton'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


var Question_1 = [
  {label: 'Consistent motivation', value: 0 },
  {label: 'Finding peace', value: 1 },
  {label: 'Being involved in community', value: 2 },
  {label: 'Health habits', value: 3 },
  {label: 'Balancing time with electronics and life', value: 4 },
  {label: 'Money management', value: 5 }
];

var Question_2 = [
  {label: 'Administration (organizing things)', value: 0 },
  {label: 'Hospitality', value: 1 },
  {label: 'Outreach', value: 2 },
  {label: 'Evangelism', value: 3 },
  {label: 'Teaching', value: 4 }
];

var Question_3 = [
  {label: 'Gentleness', value: 0 },
  {label: 'Wisdom', value: 1 },
  {label: 'Faithful Serving', value: 2 },
  {label: 'Recognizing faults and encouraging change', value: 3 },
  {label: 'Evangelism', value: 4 },
  {label: 'Good life decisions', value: 5 }
];

var Question_4 = [
  {label: 'Leader', value: 0 },
  {label: 'Prayer Warrior', value: 1 },
  {label: 'Normal Member', value: 2 },
  {label: 'Relational Member', value: 3 }
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
                radio_props={Question_1}
                initial={0}
                buttonColor={'#84C9E0'}
                animation={true}
                onPress={(value) => {this.setState({value:value})}}
              />

<Text style= {styles.question}> What serving opportunities do you feel have helped you grow? </Text>

      <RadioForm style = {styles.radio}
                radio_props={Question_2}
                initial={0}
                buttonColor={'#84C9E0'}
                animation={true}
                onPress={(value) => {this.setState({value:value})}}
              />

<Text style= {styles.question}> Which of these do you think is your top quality? </Text>

      <RadioForm style = {styles.radio}
               radio_props={Question_3}
               initial={0}
               buttonColor={'#84C9E0'}
               animation={true}
               onPress={(value) => {this.setState({value:value})}}
              />

<Text style= {styles.question}> Which role in a small group do you best fit?  </Text>

      <RadioForm style = {styles.radio}
               radio_props={Question_4}
               initial={0}
               buttonColor={'#84C9E0'}
               animation={true}
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
      fontSize: 25,
    },
    radio: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin: 10,
    }
  });
