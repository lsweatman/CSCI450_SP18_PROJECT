//made the questions into arrays to streamline the rendering code in QuestionnaireScreen.js
//questions.length will give us the size of the array.
//adding questions will dynamically allow the survey to grow
var questions = [
    "Which of these habits do you struggle with the most?",
    "What serving opportunities do you feel have helped you grow?",
    "Which of these do you think is your top quality?",
    "Which role in a small group do you best fit?",
    "What is two plus two?"
  ];
  
  var options = [
    Question_1 = [
      {label: 'Consistent motivation', value: 0 },
      {label: 'Finding peace', value: 1 },
      {label: 'Being involved in community', value: 2 },
      {label: 'Health habits', value: 3 },
      {label: 'Balancing time with electronics and life', value: 4 },
      {label: 'Money management', value: 5 }
    ],
    
    Question_2 = [
      {label: 'Administration (organizing things)', value: 0 },
      {label: 'Hospitality', value: 1 },
      {label: 'Outreach', value: 2 },
      {label: 'Evangelism', value: 3 },
      {label: 'Teaching', value: 4 }
    ],
    
    Question_3 = [
      {label: 'Gentleness', value: 0 },
      {label: 'Wisdom', value: 1 },
      {label: 'Faithful Serving', value: 2 },
      {label: 'Recognizing faults and encouraging change', value: 3 },
      {label: 'Evangelism', value: 4 },
      {label: 'Good life decisions', value: 5 }
    ],
    
    Question_4 = [
      {label: 'Leader', value: 0 },
      {label: 'Prayer Warrior', value: 1 },
      {label: 'Normal Member', value: 2 },
      {label: 'Relational Member', value: 3 }
    ],
    Question_5 = [
      {label: '1', value: 0 },
      {label: '4', value: 1 },
      {label: '22', value: 2 },
      {label: 'twotwo', value: 3 }
    ],
  ];

  export {questions};
  export {options};