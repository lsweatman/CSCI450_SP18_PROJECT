import React from 'react'
import {StyleSheet, Text, View, Modal, Picker, Alert} from 'react-native'
import RoundedButton from './App/Components/RoundedButton'
import FullButton from './App/Components/FullButton'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import * as firebase from 'firebase';

//getting questions from file
import {questions} from './App/Components/questions.js';
import {options} from './App/Components/questions.js';

const firebaseConfig = {
  apiKey: "AIzaSyBWWCdi84BofstOgOLE7xKsRvDeQxcyLqY",
    authDomain: "testing-query.firebaseapp.com",
    databaseURL: "https://testing-query.firebaseio.com",
    projectId: "testing-query",
    storageBucket: "testing-query.appspot.com",
    messagingSenderId: "729415852786"
};




/*      known bugs:       */
//When the back button is enabled in the navigator, it causes problems with the survey--remove the back option
//from questionnaire screen?
var i
i = 0;
//new array to hold answers
var answers = [];

export default class QuestionnaireScreen extends React.Component {

  constructor () {
    super()
    this.state = {
      choice: options[i],
      value1: -1,
      index1: 0
      
    }
  }

    //submit button will update hasTakeQuiz to true, send data to firebase from array, then navigate back home
    submit() {
      var userId = firebase.auth().currentUser.uid;
      console.log("setting hasTakenQuiz to true");
      firebase.database().ref('users/' + userId).set({
        answers
      });
      firebase.database().ref('users/' + userId).update({
        hasTakenQuiz: true
      });
      this.props.navigation.navigate('Home', {});
    }
  
    nextQuestion(){
      //prevent empty option
      if (this.state.value1 === -1)
      {
        Alert.alert('Uh-Oh!','Please choose an option before continuing!');
        return;
      }
      var userId = firebase.auth().currentUser.uid;
      i++;
      console.log(this.state.value1);
      //save answer for this question into answers array
      answers.push(this.state.value1);
      this.props.navigation.navigate('Questionnaire', {});
    }


  render() {
    
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      
        
        {i < questions.length ? 
        <Text style={styles.question}>Question {1 + i} </Text>:            //if true
        <Text style = {styles.question}> Thank you for answering! </Text>  //if false
        }

        <Text style={styles.question}>{ questions[i] } </Text>
        

        <RadioForm style = {styles.radio}
                radio_props={options[i]}
                initial={-1}
                buttonColor={'#84C9E0'}
                animation={true}
                onPress={(value, index) => {this.setState({value1:value, index1:index})}}
        />
        

        {/*showing which option is currently chosen, will only show when value1 is updated*/}
        {this.state.value1 !== -1 ?
        <Text style = {styles.question}>Selected: {this.state.choice[this.state.index1].label}</Text>:null
        }

        

        
        {/*instead of just clicking on the radio button and continuing, instead a button will be used to 
        move to the next question*/}
        {i < questions.length ? 
          <RoundedButton
          style = {styles.button}
            onPress={()=>{this.nextQuestion()}}
          >
            Next
          </RoundedButton>:
          <RoundedButton 
          style = {{flex: 1 }}
          onPress={i = 0}
          onPress={() => {this.submit()}}
          >
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
