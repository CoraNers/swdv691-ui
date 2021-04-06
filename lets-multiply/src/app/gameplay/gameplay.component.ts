import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss']
})
export class GameplayComponent implements OnInit {
  @Input() userData: any;
  @Input() mode: string;
  @Input() category: any;

  gameplayQuestionsShuffled = [];
  modeDisplayable: string;
  questionNumber = 1;
  gameplayQuestionsAnswered = [];
  submittedAnswer: number = undefined;
  isCorrect = undefined;
  questionsCorrect = 0;
  questionsIncorrect = 0;
  hasSubmitted = undefined;

  constructor() { }

  ngOnInit(): void {
    if (this.mode == 'practice') {
      this.modeDisplayable = 'Practicing';
    } else {
      this.modeDisplayable = 'Evaluating';
    }

    this.createGameplayArray(this.category);
  }

  createGameplayArray(categoryNumber) {
    let gameplayQuestions = [];
    for(let i = 1; i < 12+1; i++) {
      // add values 1-12 to the array
      gameplayQuestions.push(i);
    }

    // shuffle the values so they're not in order
    this.gameplayQuestionsShuffled = this.shuffle(gameplayQuestions);
    console.log(this.gameplayQuestionsShuffled);
  }

  shuffle(gamePlayQuestions) {
    // shuffle algorithm found via Stackoverflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = gamePlayQuestions.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = gamePlayQuestions[currentIndex];
      gamePlayQuestions[currentIndex] = gamePlayQuestions[randomIndex];
      gamePlayQuestions[randomIndex] = temporaryValue;
    }
  
    return gamePlayQuestions;
  }

  getNextDisplayQuestion() {
    return this.category + " x " + this.getQuestion() + " = ";
  }

  getQuestion() {
    if (this.gameplayQuestionsShuffled.length > 0) {
      // we have questions in the array that still need to be displayed to the user.
      // the first digit in each question will be the category that was selected.
      return this.gameplayQuestionsShuffled[0];
    }
  }

  popOffQuestionAnswered() {
    return this.gameplayQuestionsShuffled.shift();
  }

  submit() {
    // the user has just answered a question - verify their answer is correct or not
    // - and change out the button text
    console.log('1ST QUESTION PART ' + this.category);
    console.log('2ND QUESTION PART ' + this.getQuestion());
    console.log('SUBMITTED ANSWER ' + this.submittedAnswer);

    var currentQuestion = this.getQuestion();

    // TODO undefined and/or invalid value checking
    if ((this.category * currentQuestion) == this.submittedAnswer)  {
      this.isCorrect = true;
      this.questionsCorrect = this.questionsCorrect + 1;
    } else {
      this.isCorrect = false;
      this.questionsIncorrect = this.questionsIncorrect + 1;
    }

    console.log(this.isCorrect);
    console.log("Correct " + this.questionsCorrect);
    console.log("Incorrect " + this.questionsIncorrect);

    this.hasSubmitted = true;

      // if populated - create JSON data.
      // pop first off of this.gameplayQuestionsShuffled
      // make request to server to save
    var questionData = this.category + " x " + currentQuestion + " = " + this.submittedAnswer; 
    this.gameplayQuestionsAnswered.push(questionData);
    console.log('********************************');
    console.log(this.gameplayQuestionsAnswered);

    // if practice mode only
    // if correct - show the checkmark
    // if incorrect - show the x 

    // dont call showNextQuestion until next button is clicked
    // this.showNextQuestion();

  }

  next() {
    // increment question number for UI
    this.popOffQuestionAnswered();
    this.submittedAnswer = undefined;
    this.hasSubmitted = undefined;
    this.isCorrect = undefined;
    this.questionNumber = this.questionNumber + 1;
    console.log('-----------------------------');
    console.log(this.gameplayQuestionsShuffled);
  }

}
