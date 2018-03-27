import React from 'react'
import {StyleSheet, Text, View, Modal, Picker, Alert} from 'react-native'
import RoundedButton from './App/Components/RoundedButton'
import FullButton from './App/Components/FullButton'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import * as firebase from 'firebase';

//getting questions from file
import {questions} from './App/Utility/questions.js';
import {options} from './App/Utility/questions.js';

const firebaseConfig = {
  apiKey: "AIzaSyBWWCdi84BofstOgOLE7xKsRvDeQxcyLqY",
    authDomain: "testing-query.firebaseapp.com",
    databaseURL: "https://testing-query.firebaseio.com",
    projectId: "testing-query",
    storageBucket: "testing-query.appspot.com",
    messagingSenderId: "729415852786"
};

// TODO: Get the silly radio form to have nothing selected after next question

//new array to hold answers
var answers = [];

export default class QuestionnaireScreen extends React.Component {

  constructor () {
    super();
    // Wipe any answers from previous test-takers
    answers = [];
    // Get any answers the user might have already answered
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
      if(snapshot.val().answers != null) {
        answers = snapshot.val().answers;
      }
    });

    this.state = {
      choice: options[0],
      value1: -1,
      index1: 0,
      currentQuestion: 0,
    }
  }

  componentWillMount() {
    var initialQuestionVal;
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
      if(snapshot.val().currentAnswer != null) { // User has answered things previously
        initialQuestionVal = snapshot.val().currentAnswer;
        this.setState({
          choice: options[initialQuestionVal],
          currentQuestion: initialQuestionVal
        });
      }
      else { // Users first time entering something
        initialQuestionVal = 0;
        this.setState({
          currentQuestion: initialQuestionVal
        });
      }
    });
  }

  //submit button will update hasTakeQuiz to true, send data to firebase from array, then navigate back home
  submit() {
    var userId = firebase.auth().currentUser.uid;
    // Puts answers into firebase and deletes currentQuestion
    firebase.database().ref('users/' + userId).set({
      answers
    });
    firebase.database().ref('users/' + userId).update({
      hasTakenQuiz: true
    });

    // Go back to login page
    this.props.navigation.goBack(null);
  }

  nextQuestion(){
    //prevent empty option
    if (this.state.value1 === -1)
    {
      Alert.alert('Uh-Oh!','Please choose an option before continuing!');
      return;
    }
    
    this.setState({
      choice: options[this.state.currentQuestion],
      currentQuestion: this.state.currentQuestion++
    });

    //save answer for this question into answers array
    answers.push(this.state.value1);

    // Save the user's progress in firebase
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId).child('answers').set(answers);
    firebase.database().ref('users/' + userId).child('currentAnswer').set(this.state.currentQuestion);

    // Instead of navigating we rerender the page
    this.setState(this.state);
  }


  render() {
    
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      
        {this.state.currentQuestion < questions.length ? 
        <Text style={styles.question}>Question {1 + this.state.currentQuestion} </Text>:            //if true
        <Text style = {styles.question}> Thank you for answering! </Text>  //if false
        }

        <Text style={styles.question}>{ questions[this.state.currentQuestion] } </Text>
        

        <RadioForm style = {styles.radio}
                radio_props={options[this.state.currentQuestion]}
                initial={-1}
                buttonColor={'#84C9E0'}
                animation={true}
                onPress={(value, index) => {this.setState({value1:value, index1:index})}}
        />
        
        {/*instead of just clicking on the radio button and continuing, instead a button will be used to 
        move to the next question*/}
        {this.state.currentQuestion < questions.length ? 
          <RoundedButton style={styles.button}
                         onPress={()=>{this.nextQuestion()}}>
            Next
          </RoundedButton>:
          <RoundedButton style={{flex: 1 }}
                         onPress={() => {this.submit()}}>
            Submit
          </RoundedButton >
        }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 25,
    padding: 10
  },
  radio: {
    
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10
  },
  button:{
    
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
